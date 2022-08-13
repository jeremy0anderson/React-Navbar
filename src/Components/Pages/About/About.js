import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as M from '@mui/material';
import {Container, Card} from "../../Motion/Motion";
import skillsArr from "../Home/Skills";

const Skills = () => (
    <Container
        style={{display: 'flex', position: "absolute", flexWrap: "wrap", justifyContent: "center", alignItems: "center", alignContent: "center", top: 60}}>
        {skillsArr.map(({skill, link}, index)=>{
            return(
                <Card
                    animate={{}}
                    whileHover={{scale: 1.2, zIndex: 2000}}
                    whileTap={{scale: 1.2}}
                    transition={{type: "spring", duration: 0.1}}
                    style={{padding: 10, margin:5,width: 80, display: 'flex', flexDirection: 'column', justifyContent:"center", alignContent:"center", alignItems: "center",}}
                    key={skill}>
                    <img key={skill+"img"} src={link} alt={skill} width={50} height={50}/>
                    <M.Typography key={skill+"txt"} variant={"caption"}>{skill}</M.Typography>
                </Card>
            )
        })}
    </Container>
)

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
            <>
              <Skills/>
            </>
        );
    }
}

About.propTypes = {};

export default About;
