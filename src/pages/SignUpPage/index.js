import React, { useState } from 'react';

import { Button, Container, Input, Title } from './styles';

function SignUpPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");




    function handleLogin(e) {
        e.preventDefault();
        setIsLoading(true);
        setInputLoading("disabled")
        console.log("logou");

    }


    return <Container>
        <Title>MyWallet</Title>
        <form onSubmit={handleLogin}>

            <Input type="name"
                placeholder="nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

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
            <Input type="password"
                placeholder="senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            />
            <Button>{isLoading ?
                ("loading...") : ("inscrever")}
            </Button>
        </form>
    </Container>;
}

export default SignUpPage;