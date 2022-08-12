import {motion} from 'framer-motion';
import {Container} from '../Motion/Motion';
import PropTypes from "prop-types";
import {Component} from "react";

class Drawer extends Component{
    constructor(props) {
        super(props);
    }
    static Left = (props) =>(
        <Container
            style={{position: "absolute", background: "darkgray", height: "100vh", x:0, zIndex: 1001, overflow:"hidden"}}
            animate={{width: props.open?250:0}}
            transition={{duration: 0.2, bounce:2}}>
            {props.children}
        </Container>
    )
    static Right = (props) =>(
        <Container
            style={{position: "absolute", background: "darkgray", height: "100vh", right:0, zIndex: 1001, overflow: "hidden"}}
            animate={{width: props.open?250:0}}
            transition={{bounce:2, duration: 0.2}}>
            {props.children}
        </Container>
    )
    static Top = (props) =>(
        <Container
            initial={false}
            style={{position: "absolute", y: 60, background: "darkgray", width: "100vw", zIndex: 1001, overflow:"hidden"}}
            animate={{height: props.open?180:0}}
            transition={{}}>
            {props.children}
        </Container>
    )
    render(){
        let toRender;
        switch(this.props.anchor){
            case "left":
                return toRender = <Drawer.Left {...this.props}/>
            case "right":
                return toRender = <Drawer.Right {...this.props}/>
            case "top":
                return toRender = <Drawer.Top {...this.props}/>
        }
        return toRender
    }

}

Drawer.propTypes ={
    open: PropTypes.bool.isRequired,
    anchor: PropTypes.string.isRequired
}
export default Drawer;
