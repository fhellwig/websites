import 'modern-css-reset';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.js';
import './styles.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
