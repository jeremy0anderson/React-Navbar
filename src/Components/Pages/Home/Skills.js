import * as M from "@mui/material";
import React from "react";
import {motion} from "framer-motion";
import {Container} from "../../Motion/Motion";

const skillsArr = [
    {
        skill: 'HTML5',
        link: 'https://cdn.svgporn.com/logos/html-5.svg',
    },
    {
        skill: 'CSS3',
        link: 'https://cdn.svgporn.com/logos/css-3.svg',
    },
    {
        skill: 'Javascript',
        link: 'https://cdn.svgporn.com/logos/javascript.svg',
    },
    {
        skill: 'jQuery',
        link: 'https://cdn.svgporn.com/logos/jquery.svg',
    },
    {
        skill: 'MySQL',
        link: 'https://cdn.svgporn.com/logos/mysql.svg',
    },
    {
        skill: 'Express',
        link: 'https://cdn.svgporn.com/logos/express.svg',
    },
    {
        skill: 'React',
        link: 'https://cdn.svgporn.com/logos/react.svg',
    },
    {
        skill: 'Node',
        link: 'https://cdn.svgporn.com/logos/nodejs.svg',
    },
    {
        skill: 'Handlebars',
        link: 'https://cdn.svgporn.com/logos/handlebars.svg',
    },
    {
        skill: 'Bulma',
        link: 'https://cdn.svgporn.com/logos/bulma.svg',
    },
    {
        skill: 'Socket.io',
        link: 'https://cdn.svgporn.com/logos/socket.io.svg'
    },
    {
        skill: 'MUI',
        link: 'https://cdn.svgporn.com/logos/material-ui.svg'
    },
    {
        skill: 'WebStorm',
        link: 'https://cdn.svgporn.com/logos/webstorm.svg'
    },
    {
        skill: 'MongoDB',
        link: 'https://cdn.svgporn.com/logos/mongodb.svg'
    },
    {
        skill: 'Apollo',
        link: 'https://cdn.svgporn.com/logos/apollostack.svg'
    },
    {
        skill: 'GraphQL',
        link: 'https://cdn.svgporn.com/logos/graphql.svg'
    },
    {
        skill: 'Git',
        link: 'https://cdn.svgporn.com/logos/git-icon.svg',
    }];

const CardRef = React.forwardRef((props, ref)=>{
    return <M.Card ref={ref} {...props}/>
}), Card = motion(CardRef);


export function Skills(props){
    return (
        <div style={{display: 'flex', flexWrap: "wrap"}}>
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
        </div>
    )
}
export default skillsArr;