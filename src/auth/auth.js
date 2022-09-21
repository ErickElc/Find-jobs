import { createContext, useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";
import http from "../api/api";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const User = getUserLocalStorage();
        if(User){
            setUser(User);
        }
    },[]);
    async function verifyLoggin(){
        const User = getUserLocalStorage();
        try {
            await http.post('/v2/free',{
                token: User?.token
            })
            return console.log('logado');
        } catch (error) {
            router('/login');
        }
    }
    async function authenticate( email, password){
        const response = await loginRequest(email, password);
        const payload = {token: response?.data, email};
        setUser(payload);
        setUserLocalStorage(payload);
        return response?.status;
    }
    function logout(){
        setUser(null);
        localStorage.removeItem('token');
        router.push('/login');
    }
    return (
        <AuthContext.Provider value={{ ...user, verifyLoggin, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}