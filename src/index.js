import React from 'react';

import { createRoot } from 'react-dom/client';
import store from './pages/store';

import App from './App';
import "./index.css"; // Ensure this CSS file exists

const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);