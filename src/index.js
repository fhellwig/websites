import { createRoot } from 'react-dom/client';
import { getApp } from './app-selector.js';
import './styles.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(getApp());
