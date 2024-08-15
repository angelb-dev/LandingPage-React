import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeContainer />
  </StrictMode>
);