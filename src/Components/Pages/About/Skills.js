import * as M from "@mui/material";
import React from "react";
import {Card} from '../../Motion/Motion'

const frontEnd = [
    {
        skill: 'React',
        link: 'https://cdn.svgporn.com/logos/react.svg',
    },
    {
        skill: 'MUI',
        link: 'https://cdn.svgporn.com/logos/material-ui.svg'
    },
    {
        skill: 'Framer Motion',
        link: 'https://cdn.svgporn.com/logos/framer.svg'
    },
    {
        skill: 'HTML5',
        link: 'https://cdn.svgporn.com/logos/html-5.svg',
    },
    {
        skill: 'CSS3',
        link: 'https://cdn.svgporn.com/logos/css-3.svg',
    },
    {
        skill: 'jQuery',
        link: 'https://cdn.svgporn.com/logos/jquery.svg',
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
        skill: 'Socket.io client',
        link: 'https://cdn.svgporn.com/logos/socket.io.svg'
    },

]

const backEnd = [
    {
        skill: "Sequelize",
        link: "https://cdn.svgporn.com/logos/sequelize.svg"
    },
    {
        skill: 'Socket.io',
        link: 'https://cdn.svgporn.com/logos/socket.io.svg'
    },
    {
        skill: 'Express',
        link: 'https://cdn.svgporn.com/logos/express.svg',
    },
    {
        skill: 'Node',
        link: 'https://cdn.svgporn.com/logos/nodejs.svg',
    },
    {
        skill: 'Apollo',
        link: 'https://cdn.svgporn.com/logos/apollostack.svg'
    },
]
const languages= [
    {
        skill: 'Javascript',
        link: 'https://cdn.svgporn.com/logos/javascript.svg',
    },

    {
        skill: 'SQL [MySQL]',
        link: 'https://cdn.svgporn.com/logos/mysql.svg',
    },
    {
        skill: 'NoSQL[MongoDB]',
        link: 'https://cdn.svgporn.com/logos/mongodb.svg'
    },
    {
        skill: 'GraphQL',
        link: 'https://cdn.svgporn.com/logos/graphql.svg'
    },

]
const editors=[
    {
        skill: 'WebStorm',
        link: 'https://cdn.svgporn.com/logos/webstorm.svg'
    },
    {
        skill: 'VS Code',
        link: 'https://cdn.svgporn.com/logos/visual-studio-code.svg'
    },

]
const skillsArr = {
    languages,
    editors,
    frontEnd,
    backEnd
    }
;

export function Skills(props){
    return (
        <div style={{display: 'flex', flexWrap: "wrap", overflow: "visible"}}>
        {props.skillSet.map(({skill, link}, index)=>{
                return(
                    <Card
                        whileHover={{scale: 1.3}}
                        transition={{type: "spring"}}
                        style={{
                            background: "rgb(157,157,157)",
                            position: "relative",
                            padding: 10, margin:5,width: 70, height: 70, display: 'inline-flex', flexDirection: 'column', justifyContent:"center", alignContent:"center", alignItems: "center",}}
                        key={skill}>
                        <img key={skill+"img"} src={link} alt={skill} width={50} height={50}/>
                        <M.Typography key={skill+"txt"} variant={"subtitle2"}>{skill}</M.Typography>
                    </Card>
                )
            })}
        </div>
    )
}
export default skillsArr;