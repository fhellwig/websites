import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { App } from './app.js';
//import './stylesheets/styles.scss';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
