import {
    ABOUT_US_ROUTE,
    ADMIN_ROUTE, AUTH_ROUTE, GET_STARTED_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE, MARKET_ROUTE,
    REGISTRATION_ROUTE,
} from "./utils/consts";
import Market from './pages/Market'
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Auth from "./pages/Auth"
import Admin from "./pages/Admin"
import GetStarted from "./pages/GetStarted";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ABOUT_US_ROUTE,
        Component: AboutUs
    },
    {
        path: MARKET_ROUTE,
        Component: Market
    },
    {
        path: GET_STARTED_ROUTE,
        Component: GetStarted
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
]