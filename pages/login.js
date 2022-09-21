import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../src/auth/useAuth";
import { ContainerForm, Form } from "../src/styles/components";

export default function LoginPage(){
    const auth = useAuth();
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    async function SubmitForm(e){
        e.preventDefault();
        try {
            const loginRequest = await auth.authenticate(inputs.email, inputs.password);
            if(loginRequest.status === 202){
                console.log(loginRequest.data);
            }

        } catch (error) {
            alert('Email ou senha incorretos!');
        }
    }
    return(
        <ContainerForm>
            <Form onSubmit={SubmitForm}>
                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    type="email"
                    value={inputs.email}
                    onChange={e => setInputs({...inputs, email: e.target.value})}            
                />
                <TextField 
                    id="outlined-basic" 
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={inputs.password}
                    onChange={e => setInputs({...inputs, password: e.target.value})}    
                />
                <Button variant="contained" type='submit'>Entrar</Button>
            </Form>
        </ContainerForm>
    )
}