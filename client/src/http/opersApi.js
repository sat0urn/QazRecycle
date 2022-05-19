import {$authHost, $host} from "./index";

export const fetchUsers = async () => {
    return $host.get('/api/users')
}