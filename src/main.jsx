import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastProvider } from "react-toast-master";
import App from './App';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/lineicons/lineicons.css';
import './assets/css/main.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);

