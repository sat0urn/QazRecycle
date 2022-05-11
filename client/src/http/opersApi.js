import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const fetchUsers = async () => {
    return $host.get('/api/users')
}