import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';


import { Button, Container, Input, Title } from './styles';

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");




    function handleLogin(e) {
        e.preventDefault();
        setIsLoading(true);
        setInputLoading("disabled")
        const promise = axios.post('http://localhost:5000/login', {
            email: email,
            password: password,
        });
        promise.then(response => {
            navigate('/main');
        })

    }
    return <Container>
        <Title>MyWallet</Title>
        <form onSubmit={handleLogin}>
            <Input type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="email"
                disabled={inputLoading}
            />

            <Input type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="senha"
                disabled={inputLoading}
            />

            <Button>{isLoading ?
                ("loading...") : ("entrar")}
            </Button>
        </form>

    </Container>;
}

export default LoginPage;