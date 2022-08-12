import Nav from "./Navigation/Navbar";
import {Container, Button} from './Motion/Motion';
import {Fragment} from "react";

function App(props){
    return(
        <Fragment>
            <Nav drawerAnchor={'top'}/>
            <Container
                style={{position: 'absolute', width: "100vw", height: "calc(100vh - 60px)", top: 60, background: "lightgray"}}>

            </Container>
        </Fragment>
    )
}
export default App;