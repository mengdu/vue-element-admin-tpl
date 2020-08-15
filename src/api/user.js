import http from '../utils/http'

export const login = (username, password) => {
    return http.post('/login', {
        username,
        password
    })
}
