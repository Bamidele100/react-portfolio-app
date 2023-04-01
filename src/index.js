import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./styles/Navbar.css";
import "./styles/Home.css";
import "./styles/Portfolio.css";
import "./styles/Footer.css"
import "./styles/Contact.css";
import "./styles/Portfolio.css";
import "./styles/Resume.css"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
