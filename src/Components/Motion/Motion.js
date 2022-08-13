import {forwardRef} from "react";
import {motion} from 'framer-motion';
import {Card as NCard} from '@nextui-org/react';


const ContainerRef = forwardRef((props, ref)=>{
    return (<div ref={ref} {...props}/>)
}), Container = motion(ContainerRef);
const ButtonRef = forwardRef((props, ref)=>{
    return (<button ref={ref} {...props}/>)
}), Button = motion(ButtonRef);
const CardRef = forwardRef((props, ref)=>{
    return (<NCard ref={ref}{...props}></NCard>)
}), Card = motion(CardRef);


export {Container, Button, Card}