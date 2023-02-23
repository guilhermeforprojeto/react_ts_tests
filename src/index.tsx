import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/css/style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <App />
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
