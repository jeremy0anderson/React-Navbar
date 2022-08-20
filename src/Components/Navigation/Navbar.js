import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Brand, Button, Container, Icon} from '../Motion/Motion';
import {MenuOutlined as Menu} from "@mui/icons-material";
import "./navbar.css";
import Drawer from "./Drawer";
import {motion} from 'framer-motion';

const Toolbar=Container,Toggle=Icon;
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
                width: 'calc(100vw - 250px)',
                x: 250
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
            zIndex: 1008,
            width: "100%",
            display: 'flex',
            height: 60,
            alignItems: 'center', justifyContent: 'center', alignContent: 'center',
            background: 'linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)',
            position: 'fixed',

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
export const items = [
    {text: "Home", to: "/"},{text: "About", to: "/about"}, {text: "Contact", to: "/contact"},{text: "Portfolio", to: "/work"}
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
        // if (this.state.open && window.innerWidth > 600) document.getElementById('off').click();
    }
    componentWillUnmount() {window.onresize=null;}
    toggleMenu(){
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
                <Container
                    style={styles(this.props).main}
                    id={"Navbar"}
                    transition={{type: "keyframes", duration: 0.2}}
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
                                onClick={this.props.onToggle}>
                            <Menu size={30} />
                        </Toggle>

                        <Container
                            style={{width: "100%"}}
                            id={"navbar-menu-noDrawer"}>
                            <ul style={{listStyleType:"none", display: 'flex', padding:0, margin:0}}>
                                {items.map((item, index)=>{
                                    return <li key={'navMenuListItem'+index} style={{paddingInline: 15,height: 50, display: "flex", alignContent:"center", alignItems:"center", justifyContent:"left"}}>
                                        <Button
                                            key={index} component={Link} style={{
                                            color:'white', textDecoration: "none", width: "100%", height: "100%", display: "flex", alignContent:"center", justifyContent: "center", alignItems:'center',
                                            zIndex:220002,
                                        }} to={item.to}>{item.text}</Button>
                                    </li>
                                })}
                            </ul>
                        </Container>
                        {/*<Link to={"/"} style={{ textDecoration:"none", color: 'white', display: 'flex', width: 150}}>Jeremy Anderson</Link>*/}
                    </Toolbar>

        {/*<ul style={{listStyleType:"none", display: 'flex', flexDirection:"column", padding:0, margin:0, justifyContent:"center", alignItems:"center", alignContent: "center"}}>*/}
        {/*    {items.map((item, index)=>{*/}
        {/*        return (*/}
        {/*            <li onClick={(e)=>{*/}
        {/*                e.preventDefault();*/}
        {/*                this.toggleMenu()*/}
        {/*            }}*/}
        {/*                key={'navMenuListItem'+index}*/}
        {/*                style={{*/}
        {/*                    // borderTop: "0.5px solid white",*/}
        {/*                    // borderBottom: "0.5px solid white",*/}
        {/*                    width: "100%", height: 240/items.length,*/}
        {/*                    display: "flex", alignContent:"center",*/}
        {/*                    alignItems:"center", justifyContent:"center"}}>*/}
        {/*                {item.text}*/}
        {/*            </li>*/}
        {/*        )*/}
        {/*    })}*/}
        {/*</ul>*/}

                </Container>

        );
    }
}

Nav.propTypes = {
    drawerAnchor: PropTypes.oneOf(opts).isRequired,
};


export default Nav;
