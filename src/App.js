import React,{Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Components from './Components';
import {motion} from 'framer-motion';
import AnimatedText from "./Components/Motion/AnimatedTxt";
import Contact from "./Components/Pages/Contact/Contact";
import About from "./Components/Pages/About/About";

const {Nav, Container, Button, Home, Card} = Components;
function App(props){
    return(
        <Container>
            <Nav drawerAnchor={"left"}/>
            <Container
                style={{position: "fixed", width: "100%", height: "100%", top: 60, background: 'rgb(245, 245, 245)', overflow: "scroll"}}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"/about"} element={<About/>}/>
                    </Routes>

            </Container>
        </Container>
    )
}
export default App;