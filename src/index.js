import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../src/sidebar/Sidebar.css'
import '../src/navbar/Navbar.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

