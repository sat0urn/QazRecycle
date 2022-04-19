import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import AppRouter from "./components/AppRouter";
import {Component} from "react";
import {HOME_ROUTE} from "./utils/consts";
 
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
                <Route path={HOME_ROUTE} exact />
            </BrowserRouter>
        )
    }
}



export default App;
