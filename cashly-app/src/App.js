import React from 'react';
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Navbar from'./components/Navbar'; 
import UserDetails from './pages/UserDetails';
import Calculators from './pages/Calculators';
import LenderQualifier from './pages/LenderQualifier';
import Notes from './pages/Notes';
import CashlyCopilot from './pages/CashlyCopilot';
import TechServices from './pages/TechServices';
import Resources from './pages/Resources';
import OAuthCallback from './components/OAuthCallBack'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';


function App() {
  return (
    <Router>
    <CssBaseline />
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>} /> 
      <Route path="/dashboard" exact element={<Dashboard/>} />
      <Route path="/user-details" element={<UserDetails/>} />
      <Route path="/calculators" element={<Calculators/>} />
      <Route path="/lender-qualifier" element={<LenderQualifier/>} />
      <Route path="/notes" element={<Notes/>} />
      <Route path="/cashly-copilot" element={<CashlyCopilot/>} />
      <Route path="/tech-services" element={<TechServices/>} />
      <Route path="/resources" element={<Resources/>} />
      <Route path="/oauth/callback" element={<OAuthCallback/>} />
      
    </Routes>
  </Router>
);
}

export default App;
