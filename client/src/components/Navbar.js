import React, {useContext, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {FaRecycle} from 'react-icons/fa'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Container, Nav, Button} from 'react-bootstrap';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

const Navbar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
        history.push("/")
    }

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className='navbar'>
                    <div className='navbar-container container'>
                        <Link to={HOME_ROUTE} className='navbar-logo' onClick={closeMobileMenu}>
                            <FaRecycle
                                className='navbar-icon'/>
                            QazRecycle
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/getStarted' className="nav-links" onClick={closeMobileMenu}>
                                    Get Started
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/market' className="nav-links" onClick={closeMobileMenu}>
                                    Market
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/aboutUs' className="nav-links" onClick={closeMobileMenu}>
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item nav-item-btn">
                                {user.isAuth ?
                                    <Nav className="ms-auto">
                                        <Button variant={'light'} style={{fontSize: 20.8}}
                                                className={"ms-5"}
                                                onClick={() => history.push(ADMIN_ROUTE)}
                                        >
                                            My Account
                                        </Button>
                                        <Button variant={'light'} style={{fontSize: 20.8}}
                                                className={"ms-3"}
                                                onClick={() => logout()}
                                        >
                                            Sign Out
                                        </Button>
                                    </Nav>
                                    :
                                    <Nav className="ms-auto border-light">
                                        <Button variant={'light'} style={{fontSize: 20.8}}
                                                onClick={() => history.push(LOGIN_ROUTE)}
                                        >
                                            Sign Up
                                        </Button>
                                    </Nav>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
})

export default Navbar