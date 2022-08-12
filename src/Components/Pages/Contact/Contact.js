import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input, Spacer, Text, Textarea, Button as NButton} from '@nextui-org/react';
import {Card, Button, Container, Box, Typography, TextField} from '@mui/material';
import {init, send} from '@emailjs/browser';
import {Mail, MailOutlined, NotesOutlined, PersonOutlined} from "@mui/icons-material";
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {TailSpin} from "react-loader-spinner";

init(process.env.REACT_APP_PUBLIC_KEY);

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            name: "",
            email:"",
            subject:"",
            message:"",
            resMessage:'',
            emailError:false,
            nameError:false,
            messageError:false,
            subjectError:false
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameBlur = this.handleNameBlur.bind(this);
        this.handleEmailBlur = this.handleEmailBlur.bind(this);
        this.handleSubjectBlur = this.handleSubjectBlur.bind(this);
        this.handleMessageBlur = this.handleMessageBlur.bind(this);
    }

    //lifecycle
    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}


    //event handlers
    handleNameBlur(e){
        this.setState({
            ...this.state,
            nameError:!this.state.name.length
        })
    }
    handleEmailBlur(e){
        const rx = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
        this.setState({
            ...this.state,
            emailError: !rx.test(e.target.value)
        })
    }
    handleSubjectBlur(e){
        this.setState({
            ...this.state,
            subjectError:!e.target.value.length
        })
    }
    handleMessageBlur(e){
        this.setState({
            ...this.state,
            messageError:!e.target.value.length
        })
    }
    handleNameChange(e){
        this.setState({
            ...this.state,
            name:e.target.value
        })
    }
    handleEmailChange(e){
        this.setState({
            ...this.state,
            email:e.target.value
        })
    }
    handleSubjectChange(e){
        this.setState({
            ...this.state,
            subject:e.target.value
        })
    }
    handleMessageChange(e){
        this.setState({
            ...this.state,
            message:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            ...this.state,
            loading: true,
        })
        send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
            ...this.name,
            ...this.email,
            ...this.subject,
            ...this.message
        }, process.env.REACT_APP_PUBLIC_KEY).then((res)=>{
            if (res.status === 200 && res.text === "OK"){
                this.setState({
                    ...this.state,
                    loading: false,
                    resMessage: "Message Sent!"
                })
            }
        })
    }


    //render
    render() {
        return (
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", height: "100%", width: "auto", mt: 5}}>
                <Card sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "70%", height: "auto"}}>
                    <Container
                        sx={{p:3}}
                        maxWidth={"sm"}>
                        <Spacer x={0} y={1.5}/>
                        <Text h1={true} style={{position: 'relative', left: 10}}>Contact</Text>
                        <Spacer x={0} y={1.75}/>
                        {/*    <Text color={"primary"}>Enter your details below to send me an email - or click <Link style={{color: "orangered"}} to={"/chat"}>here</Link> to start a thread </Text>*/}
                        {/*<Spacer x={0} y={3}/>*/}
                        <Box
                            id={"Contact-form"}
                            onSubmit={this.handleSubmit}
                            component={"form"}>
                            <Box
                                sx={{
                                    display:'flex',
                                    justifyContent: "space-between",
                                    flexDirection:{
                                        xs: "column",
                                        sm: "column",
                                        md: "row",
                                        lg: "row",
                                        xl: "row"
                                    }
                                }}>
                                <Input
                                    required={true}
                                    onBlur={this.handleNameBlur}
                                    contentLeft={<PersonOutlined/>}
                                    css={{marginInline: 5}}
                                    color={"secondary"}
                                    onChange={this.handleNameChange}
                                    aria-label={"name field"}
                                    helperText={this.state.nameError?"Name required":""}
                                    helperColor={"error"}
                                    labelPlaceholder={"Name"}/>
                                <Spacer x={0} y={1.5}/>
                                <Input
                                    required={true}
                                    onBlur={this.handleEmailBlur}
                                    helperText={this.state.emailError?"Please enter a valid email":""}
                                    helperColor={"error"}
                                    contentLeft={<MailOutlined/>}
                                    css={{marginInline: 5}}
                                    color={"secondary"}
                                    onChange={this.handleEmailChange}
                                    aria-label={"email field"}
                                    labelPlaceholder="Email"/>
                                <Spacer x={0} y={1.5}/>
                                <Input
                                    required={true}
                                    onBlur={this.handleSubjectBlur}
                                    helperText={this.state.subjectError?"Subject required":""}
                                    helperColor={"error"}
                                    contentLeft={<NotesOutlined/>}
                                    css={{marginInline: 5}}
                                    color={"secondary"}
                                    onChange={this.handleSubjectChange}
                                    aria-label={"subject field"}
                                    labelPlaceholder={"Subject"}/>
                            </Box>
                            <Spacer x={0} y={2.25}/>
                            <Box
                                sx={{display:'flex', justifyContent: "center", width: "100%", flexDirection: "column"}}>
                                <Textarea
                                    required={true}
                                    helperText={this.state.messageError?"Message required":""}
                                    helperColor={"error"}
                                    onBlur={this.handleMessageBlur}
                                    css={{marginInline: 5, fontFamily: "sans-serif"}}
                                    minRows={3}
                                    color={"secondary"}
                                    style={{width: "100%"}}
                                    labelPlaceholder={"Message"}
                                    multiple={true}/>
                            </Box>
                            <Text css={{color: "green", margin: 5}}>{this.state.resMessage}</Text>
                            <Spacer x={0} y={2}/>
                            <Box
                                sx={{
                                    display:'flex',
                                    justifyContent: "center",
                                    width: "100%",
                                }}>
                                <Button
                                    sx={{width: "98%", marginInline:0}} variant={"contained"} type={"submit"}>
                                    {this.state.loading? <TailSpin color="#00BFFF" height={30} width={30} visible={this.state?.loading}/>: "Send"}
                                </Button>
                            </Box>
                            <Spacer x={0} y={2}/>
                        </Box>
                    </Container>
                </Card>
            </Box>
        );
    }
}

Contact.propTypes = {};

export default Contact;