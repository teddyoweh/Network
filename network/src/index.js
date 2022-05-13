import React from 'react';
<<<<<<< HEAD:src/index.tsx
import ReactDOM from 'react-dom'; 
import App from './App';
=======
import ReactDOM from 'react-dom/client';
 
import App from './components/app/App';
>>>>>>> 17a1ede4728bf55474d7034742c4ca7b47ab771f:network/src/index.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
