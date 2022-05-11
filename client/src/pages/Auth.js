import React, {useContext, useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap"
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useHistory, useLocation} from "react-router-dom"
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {

    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [city, setCity] = useState('')
    const [passConfirm, setPassConfirm] = useState('')

    const click = async () => {
        try {
            if (isLogin || (passConfirm === password)) {
                let data;
                if (isLogin) {
                    data = await login(email, password);
                } else {
                    data = await registration(name, surname, city, email, password)
                }
                user.setUser(user)
                user.setIsAuth(true)
                history.push(ADMIN_ROUTE);
            }
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    {isLogin ?
                        <>
                            <Form.Control
                                className="mt-3"
                                placeholder="Enter your email..."
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Enter your password..."
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                            />
                        </>
                        :
                        <>
                            <Form.Control
                                className="mt-3"
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Surname"
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Enter your email..."
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Enter your password..."
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="Confirm the password..."
                                value={passConfirm}
                                onChange={e => setPassConfirm(e.target.value)}
                                type="password"
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="City *"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </>
                    }
                    <Row className="d-flex justify-content-between mt-3 ps-2 pe-3">
                        {isLogin ?
                            <div>
                                Do not have an account? <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
                            </div>
                            :
                            <div>
                                Have an account? <NavLink to={LOGIN_ROUTE}>Sign in!</NavLink>
                            </div>
                        }
                        <Button
                            className="mt-3"
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? "Sign In" : "Sign Up"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth;