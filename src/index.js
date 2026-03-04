import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDom.createRoot (document.getElementById('root'));
root.render(
<AuthContextProvider>
    <React.StrictMode>
        <App/>
    </React.StrictMode>
</AuthContextProvider>

);