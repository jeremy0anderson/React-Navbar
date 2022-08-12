import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as M from '@mui/material';
import * as I from '@mui/icons-material';
import {Button, Container} from "../../Motion/Motion";
import {motion} from "framer-motion";
import pfp from '../../../assets/images/pfp.jpg';
import skillsArr, {Skills} from "./Skills";
import {Link} from "react-router-dom";




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
            open: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    render() {
        return (
            <Container
                id={"Home"}
                style={{
                    position: 'relative',
                    height: "100%",
                    width: "100%",
                    display: 'flex', justifyContent: "center",
                    flexDirection: "column"
            }}
                transition={{}}
                animate={{}}>
                <Box
                    style={{
                        top:10,
                        borderRadius: "50%",
                        height: 150, width: 150,
                        margin:15,
                        position: "relative",
                        gridArea: "first"
                    }}
                    transition={{}}
                    animate={{}}>
                    <Avatar
                        style={{ margin:0, borderRadius: "50%", boxShadow: "2px 2px 18px 0 rgba(15, 15, 15, 0.8)"}}
                        src={pfp} alt={"avatar"} width={150} height={150}/>
                </Box>
                <Container
                    id={"info-card"}
                    dragConstraints={{bottom: 350, top: 40, left: 0, right: 0}}
                    dragMomentum={false}
                    dragElastic={{bottom: 1, left: 0, right: 0, top: 0}}
                    drag={"y"}
                    style={{
                        gridArea: "second",
                        zIndex: 1001,
                        margin: 15,
                        position: "relative",
                        height: 300,
                        color: "white",
                        width: "60%",
                        x: 0,
                        y:10,
                        borderRadius: 15,
                        background: 'rgba(35, 35, 35, 1)',
                        padding: 10,
                        boxShadow: "2px 2px 18px 0 rgba(15, 15, 15, 0.8)",
                        display: 'flex', justifyContent: "center", alignContent: "center", alignItems: "center",
                        flexDirection: "column"
                    }}
                    layout
                    animate={{y: this.state.open?350:10}}
                    whileHover={{scale: 1.011}}
                    transition={{type: "spring", bounce: 0.3}}>
                        <M.Box sx={{display: 'flex', justifyContent: "center", alignContent: "center",
                            flexDirection: "column" }}>
                            <M.Typography
                                sx={{width: "100%"}}
                                variant={"h4"}>Hi,</M.Typography>
                            <br/>
                            <M.Typography variant={"h5"}>I'm Jeremy,</M.Typography>
                            <br/>
                            <M.Typography variant={"h6"}>Web developer</M.Typography>
                            <M.Typography variant={"overline"}>[ Full stack | Salt Lake City, UT ]</M.Typography>
                            <br/>
                            {/*<M.Typography color={"primary"} variant={"button"}>React.js | Node.js | Express.js | GraphQL </M.Typography>*/}
                        </M.Box>
                        <Button
                            onClick={()=>this.setState({...this.state,open:!this.state.open})}
                            style={{width: 40, height: 40, borderRadius: "50%", border: 'none'}}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            animate={{rotate: this.state.open?180:0}}
                            transition={{}}>
                            <I.ArrowDownward/>
                        </Button>
                </Container>
                <Container
                    style={{display: 'flex', gridArea: "third", position: "relative", height: 90, flexWrap: "wrap"}}>
                    {skillsArr.map(({skill, link}, index)=>{
                        return(
                            <Card
                                animate={{}}
                                whileHover={{scale: 1.5}}
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
