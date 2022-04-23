import React from 'react';
import {FaFire} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import {BsXDiamondFill} from 'react-icons/bs';
import {GiCrystalize} from 'react-icons/gi';
import {IconContext} from 'react-icons/lib';
import './Pricing.css';

function Pricing() {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
            <div>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        <div className="pricing__container">
                            <Link to="/sign-up" className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <FaFire/>
                                    </div>
                                    <h3>Plastic</h3>
                                    <h4>$0.29</h4>
                                    <p>per bottle</p>
                                    <ul className="pricing__container-features">
                                        <li>Over 150 bottles recycling</li>
                                        <li>More bottles - less comission</li>
                                        <li>$450 cash limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Choose Plan
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <BsXDiamondFill/>
                                    </div>
                                    <h3>Glass</h3>
                                    <h4>$0.49</h4>
                                    <p>per glass bottle</p>
                                    <ul className="pricing__container-features">
                                        <li>Over 100 bottles recycling</li>
                                        <li>More bottles - less comission</li>
                                        <li>$500 cash limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Choose Plan
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className='pricing__container-card'>
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <GiCrystalize/>
                                    </div>
                                    <h3>Can</h3>
                                    <h4>$0.69</h4>
                                    <p>per can</p>
                                    <ul className="pricing__container-features">
                                        <li>Over 70 cans recycling</li>
                                        <li>More cans - less comission</li>
                                        <li>$700 cash limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Choose Plan
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Pricing