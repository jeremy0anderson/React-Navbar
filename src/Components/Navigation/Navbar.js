import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {Button,Container} from '../Motion/Motion';
import {MenuOutlined as Menu} from "@mui/icons-material";
import * as M from '@mui/material';
import "./navbar.css";
import Drawer from "./Drawer";

const Toolbar=Container,Toggle=Button;
const opts=['left', 'right', 'top'];
const config = (state)=>[
//left
    [
        {
            ...state,
            open: false,
            animateProps: {
                width: "100vw",
                x: 0
            }
        },
        {
            ...state,
            open: true,
            animateProps: {
                width: '100vw',
                x: 0
            }
        }
    ],
//right
    [
        {
            ...state,
            open: false,
            animateProps: {
                width: "100vw",
                x: 0
            }

        },
        {
            ...state,
            open: true,
            animateProps: {
                width: "100vw",
                x: 0
            }
        },
    ],
//top
    [
        {
            ...state,
            open: false,
            animateProps: {
                width: "100vw",
                height: 60,
                x: 0,
                y: 0
            }
        },
        //open
        {
            ...state,
            open: true,
            animateProps: {
                width: "100vw",
                height: 60,
                x: 0,
                y: 0
            }
        }
    ]
];
///////////////////////////
///////////////////////////

const styles =(props)=> (
    {
        main: {
            zIndex: 900,
            width: "100%",
            display: 'flex',
            height: 60,
            alignItems: 'center', justifyContent: 'center', alignContent: 'center',
            background: "linear-gradient(to right top, #3a009b, #38009d, #35009f, #3200a1, #2f00a3, #2b009f, #26009b, #220097, #1c008c, #170081, #110077, #0b006c)",
            position: 'fixed'
        },
        toggle: {
            position:'absolute',
            justifyContent: 'center', alignItems: 'center', alignContent: 'center',
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "white"
        },
        toolbar: {
            zIndex: 1000,
            marginInline: 15,
            height:60,
            width: "100%",
            display: 'flex',
            alignItems: 'center', justifyContent: props.drawerAnchor==="left"?"right":"left", alignContent: 'center',

        }
    }
)
const items = [
    <Link style={{color:'white', textDecoration: "none", width: "100%", height: "100%", display: "flex", alignContent:"center", justifyContent: "center", alignItems:'center'}} to={"/"}>Home</Link>,
    <Link style={{color:'white', textDecoration: "none", width: "100%", height: "100%", display: "flex", alignContent:"center", justifyContent: "center", alignItems:'center'}} to={"about"}>About</Link>,
    <Link style={{color:'white', textDecoration: "none", width: "100%", height: "100%", display: "flex", alignContent:"center", justifyContent: "center", alignItems:'center'}} to={"contact"}>Contact</Link>
]
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false,
            animateProps: {
                width: this.state?.open?"calc(100vw - 250px)":"100vw",
                x: this.state?.open?250:0
            },
        }
        this.toggleMenu=this.toggleMenu.bind(this);
    }

    componentDidMount() {}
    shouldComponentUpdate(nextProps, nextState) {return this.state!==nextState || this.props!==nextProps;}
    componentDidUpdate(prevProps, prevState) {
        if (this.state.open && window.innerWidth > 600) document.getElementById('off').click();
    }
    componentWillUnmount() {window.onresize=null;}
    toggleMenu(){
        let index = opts.indexOf(this.props.drawerAnchor);
        for (let i = 0; i < opts.length; i++) {
            if (this.props.drawerAnchor === opts[i] && this.state.open){
                this.setState(config(this.state)[i][0])
                break;
            }
            if (this.props.drawerAnchor === opts[i] && !this.state.open) {
                this.setState(config(this.state)[i][1]);
                break;
            }
        }
    }
    render() {
        window.onresize=(e)=>{
            for (let i = 0; i < opts.length; i++) {
                if (this.props.drawerAnchor===opts[i]&&e.currentTarget.innerWidth >= 600 && this.state.open)
                    this.setState(config(this.state)[i][0])
            }
        }
        return (
            <>
                <Container
                    style={styles(this.props).main}
                    id={"Navbar"}
                    transition={{bounce:0, duration: 0.2}}
                    animate={this.state.animateProps}>

                    <Toolbar id={"navbar-toolbar"}
                             style={styles(this.props).toolbar}
                             transition={{}}
                             animate={{}}>
                        <Toggle style={styles(this.props).toggle}
                                id={"navbar-drawer-toggle"}
                                transition={{}}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.8}}
                                onClick={this.toggleMenu}>
                            <Menu size={30} />
                        </Toggle>
                        <Container
                            style={{width: "100%"}}
                            id={"navbar-menu-noDrawer"}>
                            <ul style={{listStyleType:"none", display: 'flex', padding:0, margin:0}}>
                                {items.map((item, index)=>{
                                    return (
                                        <li key={'navMenuListItem'+index} style={{paddingInline: 15,height: 50, display: "flex", alignContent:"center", alignItems:"center", justifyContent:"left"}}>
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>
                        </Container>
                        {/*<Link to={"/"} style={{ textDecoration:"none", color: 'white', display: 'flex', width: 150}}>Jeremy Anderson</Link>*/}
                    </Toolbar>
                </Container>
                <Drawer
                    open={this.state.open}
                    anchor={this.props.drawerAnchor}>
                        <ul style={{listStyleType:"none", display: 'flex', flexDirection:"column", padding:0, margin:0, justifyContent:"center", alignItems:"center", alignContent: "center"}}>
                            {items.map((item, index)=>{
                                return (
                                    <li onClick={(e)=>{
                                        e.preventDefault();
                                        this.toggleMenu()
                                    }}
                                        key={'navMenuListItem'+index}
                                        style={{
                                            // borderTop: "0.5px solid white",
                                            // borderBottom: "0.5px solid white",
                                            width: "100%", height: 180/items.length,
                                            display: "flex", alignContent:"center",
                                            alignItems:"center", justifyContent:"center"}}>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                </Drawer>

            </>
        );
    }
}

Nav.propTypes = {
    drawerAnchor: PropTypes.oneOf(opts).isRequired,
};


export default Nav;
