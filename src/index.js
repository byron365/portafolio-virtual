import React from 'react';
import { createRoot } from 'react-dom/client';
import { MainApp } from './Components/MainApp';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<MainApp/>)

