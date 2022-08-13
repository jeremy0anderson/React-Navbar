import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as M from '@mui/material';
import * as I from '@mui/icons-material';
import {Button, Container} from "../../Motion/Motion";
import {motion} from "framer-motion";
import pfp from '../../../assets/images/pfp.jpg';
import skillsArr, {Skills} from "./Skills";
import {Link} from "react-router-dom";
import AnimatedText from "../../Motion/AnimatedTxt";




const AvatarRef = React.forwardRef((props, ref)=>{
    return <img src={props.src} alt={props.alt} ref={ref} {...props}/>
}), Avatar = motion(AvatarRef);
const CardRef = React.forwardRef((props, ref)=>{
    return(<M.Card ref={ref} {...props}/>)
}), Card = motion(M.Card);

const Box = Container;



class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false,
            replay: true,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    handleReplay = () => {
        this.setState({
            ...this.state,
            replay:!this.state.replay
        });
        setTimeout(() => {
            this.setState({
                ...this.state,
                replay:true
            });
        }, 600);
    }
    render() {
        const placeholderText = [
            { type: "heading1", text: "Hi," },
            { type: "heading1", text: "I'm Jeremy,"},
            { type: "paragraph", text: "[ Full-stack Web Developer |"},
            { type: "paragraph", text: "Salt Lake City, UT ]"}

        ];

        const container = {
            visible: {
                transition: {
                    staggerChildren: 0.045
                }
            }
        };

        // Quick and dirt for the example
        return (
            <Container
                id={"Home"}
                style={{
                    position: 'absolute',
                    height: "100%",
                    width: "100%",
                    display: 'flex', justifyContent: "center",alignItems: "center",
                    flexDirection: "column"
            }}
                transition={{}}
                animate={{}}>
                <Box
                    style={{
                        top:0,
                        borderRadius: "50%",
                        height: 150, width: 150,
                        margin:15,
                        position: "absolute",
                        zIndex: 10000,
                    }}
                    transition={{}}
                    animate={{}}>
                    <Avatar
                        style={{ margin:0, borderRadius: "50%", boxShadow: "2px 2px 18px 0 rgba(15, 15, 15, 0.8)"}}
                        src={pfp} alt={"avatar"} width={150} height={150}/>
                </Box>
                {/*<Container*/}
                {/*    id={"info-card"}*/}
                {/*    dragConstraints={{bottom: 350, top: 40, left: 0, right: 0}}*/}
                {/*    dragMomentum={false}*/}
                {/*    dragElastic={{bottom: 1, left: 0, right: 0, top: 0}}*/}
                {/*    drag={"y"}*/}
                {/*    style={{*/}
                {/*        gridArea: "second",*/}
                {/*        zIndex: 1001,*/}
                {/*        margin: 15,*/}
                {/*        position: "relative",*/}
                {/*        height: 300,*/}
                {/*        color: "white",*/}
                {/*        width: "60%",*/}
                {/*        x: 0,*/}
                {/*        y:10,*/}
                {/*        borderRadius: 15,*/}
                {/*        background: 'rgba(35, 35, 35, 1)',*/}
                {/*        padding: 10,*/}
                {/*        boxShadow: "2px 2px 18px 0 rgba(15, 15, 15, 0.8)",*/}
                {/*        display: 'flex', justifyContent: "center", alignContent: "center", alignItems: "center",*/}
                {/*        flexDirection: "column"*/}
                {/*    }}*/}
                {/*    layout*/}
                {/*    animate={{y: this.state.open?350:10}}*/}
                {/*    whileHover={{scale: 1.011}}*/}
                {/*    transition={{type: "spring", bounce: 0.3}}>*/}
                    <Card
                        style={{zIndex: 1000, display: 'flex', position: 'absolute', width: "80%", height: 250, top: 90, padding: 25, justifyContent: "center", alignItems: 'center', alignContent: "center"}}>
                        <Container
                            style={{position: "absolute", y: 0, zIndex: 1000, height: "100%", margin: 10}}
                            // className="App"
                            initial="hidden"
                            // animate="visible"
                            animate={this.state.replay ? "visible" : "hidden"}
                            variants={container}>
                            <div
                                style={{position: "relative", top:0, width: 320, margin:0}}
                                className="container">
                                {placeholderText.map((item, index) => {
                                    return <AnimatedText {...item} key={index} />;
                                })}
                            </div>
                        </Container>
                    </Card>
                {/*</Container>*/}
                <Container
                    style={{display: 'flex', gridArea: "third", position: "relative", height: 90, flexWrap: "wrap"}}>
                    {skillsArr.map(({skill, link}, index)=>{
                        return(
                            <Card
                                animate={{}}
                                whileHover={{scale: 1.5}}
                                whileTap={{scale: 1.5}}
                                transition={{duration: 0.2}}
                                style={{padding: 10, margin:5,width: 50, display: 'flex', flexDirection: 'column', justifyContent:"center", alignContent:"center", alignItems: "center",}}
                                key={skill}>
                                <img key={skill+"img"} src={link} alt={skill} width={50} height={50}/>
                                <M.Typography key={skill+"txt"} variant={"caption"}>{skill}</M.Typography>
                            </Card>
                        )
                    })}
                </Container>
            </Container>
        );
    }
}

Home.propTypes = {};

export default Home;
