import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App';
//import './index.css';

// Create the root of your application
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the App component
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);