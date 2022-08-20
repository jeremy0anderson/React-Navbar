import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as M from '@mui/material';
import {Container, Card} from "../../Motion/Motion";
import {Text} from "@nextui-org/react";
import skillsArr, {Skills} from "./Skills";
import LogoFn from '../../Logo/Logo';

class About extends Component {
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
                style={{display: 'grid',gridTemplate: "auto auto auto /  auto ", overflow: 'scroll'}}>
               <Text h2>Languages & Frameworks</Text>
               <Card
                   sx={{p: 5, overflow: "visible", display: 'flex', justifyContent:'center', alignContent: 'center'}}>
                   <Skills skillSet={skillsArr.languages}/>
               </Card>
               <Text h2>Backend</Text>
               <Card
                   sx={{p: 5, overflow: "visible", display: 'flex', justifyContent:'center', alignContent: 'center'}}>
                   <Skills skillSet={skillsArr.backEnd}/>
               </Card>
               <Text h2>Frontend</Text>
               <Card
                   sx={{p: 5, overflow: "visible", display: 'flex', justifyContent:'center', alignContent: 'center'}}>
                   <Skills skillSet={skillsArr.frontEnd}/>
               </Card>
           </Container>
        );
    }
}


export default About;
