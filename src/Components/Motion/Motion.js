import {forwardRef} from "react";
import {motion} from 'framer-motion';
import {Card as NCard} from '@nextui-org/react';
import * as M from '@mui/material';


const ContainerRef = forwardRef((props, ref)=>{
    return (<div ref={ref} {...props}/>)
}), Container = motion(ContainerRef);
const ButtonRef = forwardRef((props, ref)=>{
    return (<button ref={ref} {...props}/>)
}), Button = motion(ButtonRef);
const CardRef = forwardRef((props, ref)=>{
    return (<M.Card ref={ref}{...props}/>)
}), Card = motion(CardRef);


export {Container, Button, Card}