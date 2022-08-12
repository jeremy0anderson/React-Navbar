import {forwardRef} from "react";
import {motion} from 'framer-motion';


const ContainerRef = forwardRef((props, ref)=>{
    return (<div ref={ref} {...props}/>)
}), Container = motion(ContainerRef);
const ButtonRef = forwardRef((props, ref)=>{
    return (<button ref={ref} {...props}/>)
}), Button = motion(ButtonRef);



export {Container, Button}