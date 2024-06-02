
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MissionAndValues from './components/MissionAndValues';
import InstitutionsSearch from './components/InstitutionsSearch';
import CampaignsHighlight from './components/CampaignsHighlight';
import DonorRegistrationForm from './components/DonorRegistrationForm';
import InstitutionRegistrationForm from './components/InstitutionRegistrationForm';
import DonorProfile from './components/DonorProfile';
import InstitutionProfile from './components/InstitutionProfile';
import CreateCampaign from './components/CreateCampaign';
import OnlineDonation from './components/OnlineDonation';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission-and-values" element={<MissionAndValues />} />
            <Route path="/institutions-search" element={<InstitutionsSearch />} />
            <Route path="/campaigns-highlight" element={<CampaignsHighlight />} />
            <Route path="/donor-registration-form" element={<DonorRegistrationForm />} />
            <Route path="/institution-registration-form" element={<InstitutionRegistrationForm />} />
            <Route path="/donor-profile" element={<DonorProfile />} />
            <Route path="/institution-profile" element={<InstitutionProfile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/online-donation" element={<OnlineDonation />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

