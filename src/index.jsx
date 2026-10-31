import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// earlier builds of this site registered a service worker; drop it so
// returning visitors don't keep getting served a stale cached copy
navigator.serviceWorker?.getRegistrations().then(rs => rs.forEach(r => r.unregister()));

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
