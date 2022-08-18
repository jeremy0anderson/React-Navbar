import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Spacer, Text, Textarea, Button as NButton} from '@nextui-org/react';
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
                  // <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", height: "80%", width: "100%", p:0, left: 0}}>
                  <Card sx={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", alignSelf: "center",
                        width:{
                              xs: "90%",
                              sm: "80%",
                              md: "70%",
                              lg: "60%",
                              xl: "50%"
                        }, height: "60%", position: "absolute",
                        left:{
                              xs: "5%",
                              sm: "10%",
                              md: "15%",
                              lg: "20%",
                              xl: "25%"
                        },top: 100, overflow: "visible"}}>
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
                                                sm: "row",
                                                md: "row",
                                                lg: "row",
                                                xl: "row"
                                          }
                                    }}>
                                    <TextField
                                          variant={"outlined"}
                                          required={true}
                                          onBlur={this.handleNameBlur}
                                          sx={{marginInline: 5}}
                                          onChange={this.handleNameChange}
                                          aria-label={"name field"}
                                          type={"text"}
                                          label={"Name"}/>
                                    <Spacer x={0} y={2.5}/>
                                    <TextField
                                          variant={"outlined"}
                                          type={"email"}
                                          required={true}
                                          onBlur={this.handleEmailBlur}
                                          sx={{marginInline: 5}}
                                          color={"secondary"}
                                          onChange={this.handleEmailChange}
                                          aria-label={"email field"}
                                          label={"Email"}/>
                                    <Spacer x={0} y={1.5}/>
                                    <TextField
                                          variant={"outlined"}
                                          required={true}
                                          onBlur={this.handleSubjectBlur}
                                          sx={{marginInline: 5}}
                                          color={"secondary"}
                                          onChange={this.handleSubjectChange}
                                          aria-label={"subject-field"}
                                          label={"Subject"}
                                    />
                              </Box>
                              <Spacer x={0} y={2.25}/>
                              <Box
                                    sx={{display:'flex', justifyContent: "center", width: "100%", flexDirection: "column"}}>
                                    <TextField
                                          onChange={this.handleMessageChange}
                                          required={true}
                                          onBlur={this.handleMessageBlur}
                                          sx={{marginInline: 5, fontFamily: "sans-serif"}}
                                          minRows={5}
                                          color={"secondary"}
                                          borderWeight={"bold"}/>
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
                                          disabled={this.state.emailError || this.state.nameError || this.state.messageError || this.state.subjectError}
                                          sx={{width: "98%", marginInline:0}} variant={"contained"} type={"submit"}>
                                          {this.state.loading? <TailSpin color="#00BFFF" height={30} width={30} visible={this.state?.loading}/>: "Send"}
                                    </Button>
                              </Box>
                              <Spacer x={0} y={2}/>
                        </Box>
                  </Card>
                  // </Box>
            );
      }
}

Contact.propTypes = {};

export default Contact;