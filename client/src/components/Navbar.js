import React, {useContext, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {FaRecycle} from 'react-icons/fa'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Button} from 'react-bootstrap';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';
import {HOME_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Navbar = observer(() => {
    const {user} = useContext(Context)
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
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/idea' className="nav-links" onClick={closeMobileMenu}>
                                    Idea
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {user.isAuth ?
                                    <NavLink to='/auth' className="btn-link m-lg-auto" style={{color: 'white'}}>
                                        <Button variant={"outline-light"}>Admin Panel</Button>
                                        <Button variant={"outline-light"} className="">Sign In</Button>
                                    </NavLink>
                                    :
                                    <NavLink to='/auth' className="btn-link m-lg-auto" style={{color: 'white'}}>
                                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Sign Up</Button>
                                    </NavLink>
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