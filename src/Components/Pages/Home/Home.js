import React, {Component} from 'react';
import {Container} from "../../Motion/Motion";
import {motion} from "framer-motion";
import pfp from '../../../assets/images/pfp.webp';
import AnimatedText from "../../Motion/AnimatedTxt";
import {Container as NContainer, Spacer} from "@nextui-org/react";




const AvatarRef = React.forwardRef((props, ref)=>{
    return <img src={props.src} alt={props.alt} ref={ref} {...props}/>
}), Avatar = motion(AvatarRef);
// const CardRef = React.forwardRef((props, ref)=>{
//     return(<M.Card ref={ref} {...props}/>)
// }), Card = motion(CardRef);

const Box = Container;


const Circle = (props) =>{
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 0.3 + i * 0.5;
            return {
                pathLength: 1.01,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 2.5},
                    opacity: { delay, duration: 0.1 }
                }
            };
        }
    };




    return(
        <motion.svg

            width="180"
            height="180"
            viewBox="0 0 180 180"
            initial="hidden"
            animate={props.replay? "visible":"hidden"}
            style={{position: "absolute", zIndex: 1001,left: "calc(50% - 90px)", top: -10, borderRadius: "50%"}}
        >
            <motion.circle
                cx="90"
                cy="90"
                r="90"
                fill={"none"}
                strokeWidth={15}
                stroke="#ff1f48"
                variants={draw}
                custom={0}
            />
        </motion.svg>
    )
}


class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false,
            replay: true,
            circleReplay: true,
        }
        this.handleReplay=this.handleReplay.bind(this);
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
        }, 200);
    }
    handleCircleReplay = () => {
        this.setState({
            ...this.state,
            circleReplay:!this.state.circleReplay
        });
        setTimeout(() => {
            this.setState({
                ...this.state,
                circleReplay:true
            });
        }, 800);
    }

    render() {
        const placeholderText = [
            { type: "heading1", text: "Hi," },
            { type: "heading1", text: "I'm Jeremy."},
            { type: "paragraph", text: "Full-stack Web Developer | Salt Lake City, UT"}
            // { type: "paragraph", text: "Full-stack Web Developer | Salt Lake City, UT"},
            // { type: "paragraph", text: "Salt Lake City, UT ]"}

        ];

        const container = {
            visible: {
                transition: {
                    staggerChildren: 0.035
                }
            }
        };
        return (
            <div style={this.props.style}>
            <Container
                id={"Home"}
                style={{
                    position: 'relative',
                    height: "100%",
                    width: "100%",
                    display: 'flex', justifyContent: "center",alignItems: "center",
                    flexDirection: "column"
                }}
                transition={{}}
                animate={{}}>
                    <Box
                          style={{
                              top:20,
                              borderRadius: "50%",
                              height: 160, width: 160,
                              margin:10,
                              position: "absolute",
                              zIndex: 1002,
                              display: 'flex', alignItems: "center", alignContent: "center"
                          }}
                          whileTap={{scale: 0.98}}>
                        <Avatar
                              style={{ margin:0, borderRadius: "50%", boxShadow: "2px 2px 18px 2px rgba(15, 15, 15, 0.8)"}}
                              src={pfp} alt={"avatar"} width={160} height={160}/>
                        <Circle replay={true}/>
                    </Box>
                    <NContainer
                        fluid={true}
                        css={{
                            position: "absolute", top:115, height: "100%", padding:10,
                            display: 'flex', justifyContent: "center", alignItems: "middle", alignContent: "center"}}
                        xs={true}>
                        {/*<JCard style={{width: 370,zIndex: 1000, display: 'flex', position: 'absolute', justifyContent: "center", alignItems: 'middle', alignContent: "center", height: 230}}>*/}
                            <Container
                                style={{position: "relative", y: 10, zIndex: 1000, height: "100%", margin: 0, justifyContent: "center", alignItems: "middle", alignContent: "center"}}
                                // className="App"
                                initial="hidden"
                                // animate="visible"
                                animate={this.state.replay ? "visible" : "hidden"}
                                variants={container}>
                                <Box
                                    onClick={this.handleReplay}
                                    style={{display: 'flex', flexDirection: "column",
                                        width:{
                                            xs: 380,
                                            sm: 480,

                                        }
                                        ,margin:0}}
                                    className="container">
                                    <Box style={{overflow: 'wrap'}} animate={{x:5}} transition={{duration: 1}}>
                                        <AnimatedText {...placeholderText[0]} speed={"fast"}/>
                                    </Box>
                                    <Box style={{overflow: 'wrap'}} animate={{x:5, y:15}} transition={{duration: 1, delay: 0.2}}>
                                        <AnimatedText {...placeholderText[1]} speed={"slow"} />
                                    </Box>
                                    <Box style={{overflow: 'wrap', display:'flex'}} animate={{x:5, y:25}} transition={{duration: 1, delay: 0.4}}>
                                        <AnimatedText {...placeholderText[2]} speed={"fast"}/>
                                    </Box>
                                    <Container
                                        style={{x: "10%"}}
                                        transition={{duration: 1.5, type: "spring", bounce: 0.2}}
                                        animate={{x: 0}}>
                                        <Spacer x={0} y={1}/>
                                    </Container>
                                </Box>
                            </Container>
                        {/*</JCard>*/}
                    </NContainer>
            </Container>

            </div>
        );
    }
}


Home.propTypes = {};

export default Home;
