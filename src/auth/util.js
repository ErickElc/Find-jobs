import http from "../api/api";

export const setUserLocalStorage = (user) =>{
    localStorage.setItem('token', JSON.stringify(user));
}
export const getUserLocalStorage = () => {
    const json = localStorage.getItem('token');
    
    if(!json) return null;
    
    const user = JSON.parse(json);
    return user ?? null;
}
export async function loginRequest(email, password){
    try {
        const response = await http.post('/v1/users/login', { email, password });
        return response;
    } catch (error) {
        return null;
    }
}