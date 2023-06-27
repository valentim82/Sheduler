import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Projects from './pages/Projects/Projects';
import Shedule from './pages/Shedule/Shedule';
import Clients from './pages/Clients/Clients';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme';

ReactDOM.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="projects" element={<Projects  />} />
        <Route path="shedule" element={<Shedule />} />
        <Route path="clients" element={<Clients />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
