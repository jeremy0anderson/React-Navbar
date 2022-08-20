import React, {useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Components from './Components';
import {motion} from 'framer-motion';
import {Projects} from "./Components/Pages/Projects/Projects";
import {Button} from "./Components/Motion/Motion";
import Footer from "./Components/Footer/Footer";
const {Home, About, Contact, Drawer, items, Nav, Container, Div} = Components;
const draw = {
    hidden: { pathLength: 0, opacity: 1},
    visible: (i) => {
          const delay = 0.01+ i * 0.1;
          return {
                pathLength: 1,
                opacity: 1,
                transition: {
                      pathLength: {delay, type: "spring", duration: 0.5},
                      opacity: {delay, duration: 0.01}
                }
                
          }
    }
};


function App(props){
    const [open, setOpen] = useState(false);
    const [iopen, setIopen] = useState(false);
    const [w, setW] = useState({
          width: 40,
          height:40,
          left:0,
          top:0
    })
      const nav = useNavigate();
    function toggle(){
        setOpen(!open)
    }
    function toggleSvg(){
          setIopen(!iopen);
                // setW({
                //       width: 50,
                //       height:50,
                //       left:0,
                //       top:0
                // });
    }
    return(
        <Container>
            <Nav
                
                onToggle={toggle}
                drawerAnchor={"left"}/>
            <Drawer
                open={open}
                anchor={"top"}>
                  <ul style={{listStyleType:'none', padding: 0,margin:0, position: "relative", top:0}}>
                  {items.map(({text, to})=>{
                        return(
                              <li key={text+"listitem"}
                                    style={{margin:0,padding:0,display: 'flex', justifyContent: "center", alignContent: "center", alignItems: 'center', width: "100vw", height: 60}}>
                                    <Link
                                          key={text+"link"}
                                          style={{color: 'whitesmoke', textDecoration:'none', width: "100%"}}
                                          to={to}>
                                            <Button
                                                  onClick={toggle}
                                                  key={text+"button"} sx={{width: "100%", height: "100%", color: "whitesmoke"}}>
                                                      {text}
                                            </Button>
                                    </Link>
                              </li>
                        )
                  })}
                  </ul>
            </Drawer>
            <Div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "calc(100% - 60px)",
                    y:60,
                    overflow: "scroll",
                    // background: 'rgb(245, 245, 245)',
                }}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/about"} element={<About/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"/work"} element={<Projects/>}/>
                    </Routes>

            </Div>
    \
        </Container>
    )
}
export default App;