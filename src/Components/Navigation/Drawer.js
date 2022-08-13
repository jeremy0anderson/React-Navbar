import {Container} from '../Motion/Motion';
import PropTypes from "prop-types";
import {Component} from "react";

class Drawer extends Component{
    static Left = (props) =>(
        <Container
            style={{position: "fixed",borderRight: props.open?"0.5px solid darkslategray":"none", background: "rgb(25, 25, 25)", height: "100vh", x:0, zIndex: 1001, overflow:"hidden", opacity: 0}}
            animate={{width: props.open?250:0,opacity: props.open?1:0}}
            transition={{duration: 0.2, bounce:2}}>
            {props.children}
        </Container>
    )
    static Right = (props) =>(
        <Container
            style={{position: "fixed",borderLeft: props.open?"0.5px solid darkslategray":"none", background: "rgb(25, 25, 25)", height: "100vh", right:0, zIndex: 1001, overflow: "hidden" , opacity: 0}}
            animate={{width: props.open?250:0,opacity: props.open?1:0}}
            transition={{}}>
            {props.children}
        </Container>
    )
    static Top = (props) =>(
        <Container
            initial={false}
            style={{borderBottom: props.open?"0.5px solid darkslategray":"none",position: "fixed", y: 60, background: "rgb(25, 25, 25)", width: "100vw", zIndex: 1001, overflow:"hidden",  opacity: 0}}
            animate={{height: props.open?180:0, opacity: props.open?1:0}}
            transition={{duration: 0.2}}>
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
            default: return toRender = <p>Drawer anchor required</p>
        }
        return toRender
    }

}

Drawer.propTypes ={
    open: PropTypes.bool.isRequired,
    anchor: PropTypes.string.isRequired
}
export default Drawer;
