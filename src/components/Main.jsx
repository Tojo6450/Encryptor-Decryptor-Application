import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './header';
import {Encryption} from './Encryption';
import {Decryption} from './Decryption';

const Main = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/encrypt" element={<Encryption />} />
                <Route path="/decrypt" element={<Decryption />} />
                <Route path="*" element={<Navigate to="/encrypt" />} />
            </Routes>
        
        </div>
    );
};

export default Main;
