import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Components from './Components';
import Contact from "./Components/Pages/Contact/Contact";
const {Nav, Container, Button, Home} = Components;

function App(props){
    return(
        <Fragment>
            <Nav drawerAnchor={'right'}/>
            <Container
                style={{position: "fixed", width: "100vw", height: "100vh", top: 60, background: 'rgb(45, 45, 45)'}}>
                    <Routes>
                        <Route path={"/contact"} element={<Contact/>}/>
                    </Routes>

            </Container>
        </Fragment>
    )
}
export default App;