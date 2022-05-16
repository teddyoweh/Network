import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, RouteComponentProps  } from 'react-router-dom';
import './index.css';
import App from './App';
import Discover from './routes/Discover';
import Colleges from './routes/Colleges';
import Friends from './routes/Friends';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Route>
      <Route path="/" element={<App />} />
      <Route path="Discover" element={<Discover />} />
      <Route path="Friends" element={<Friends />} />
      <Route path="Colleges" element={<Colleges />} />
    </Route>
  </BrowserRouter>
);