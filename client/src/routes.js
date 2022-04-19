import {
    ABOUT_ROUTE,
    ADMIN_ROUTE, AUTH_ROUTE,
    HOME_ROUTE, IDEA_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE, SERVICES_ROUTE,
} from "./utils/consts";
import About from './pages/About'
import Home from "./pages/Home";
import Services from "./pages/Services";
import Idea from "./pages/Idea";
import Auth from "./pages/Auth"
import Admin from "./pages/Admin"

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
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    },
    {
        path: IDEA_ROUTE,
        Component: Idea
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