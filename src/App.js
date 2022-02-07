import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './assets/GlobalStyles';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/mainPage';
import SignUpPage from './pages/SignUpPage';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>

        </BrowserRouter>

    );
}

export default App;