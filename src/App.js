import React,{Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Components from './Components';
import {motion} from 'framer-motion';
import AnimatedText from "./Components/Motion/AnimatedTxt";
import Contact from "./Components/Pages/Contact/Contact";

const {Nav, Container, Button, Home, Card} = Components;
function App(props){
    return(
        <Container>
            <Nav drawerAnchor={"top"}/>
            <Container
                style={{position: "fixed", width: "100vw", height: "100vh", top: 60, background: 'rgb(45, 45, 45)'}}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                    </Routes>

            </Container>
        </Container>
    )
}
export default App;