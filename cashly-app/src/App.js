import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import UserDetails from './pages/UserDetails';
import Calculators from './pages/Calculators';
import LenderQualifier from './pages/LenderQualifier';
import Notes from './pages/Notes';
import CashlyCopilot from './pages/CashlyCopilot';
import TechServices from './pages/TechServices';
import Resources from './pages/Resources';


function App() {
  return (
    <Router>
    <CssBaseline />
    <Navbar />
    <Routes>
      <Route path="/user-details" component={UserDetails} />
      <Route path="/calculators" component={Calculators} />
      <Route path="/lender-qualifier" component={LenderQualifier} />
      <Route path="/notes" component={Notes} />
      <Route path="/cashly-copilot" component={CashlyCopilot} />
      <Route path="/tech-services" component={TechServices} />
      <Route path="/resources" component={Resources} />
      <Route path="/" exact component={UserDetails} />
    </Routes>
  </Router>
);
}

export default App;
