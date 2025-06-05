// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';
import About from './Components/About';
import MissionVision from './Components/MissionVision';
import Team from './Components/Team';
import Events from './Components/Events';
import RegistrationForm from './Components/RegistrationForm';
import Projects from './Components/Projects';
import IncubationPrograms from './Components/IncubationPrograms';
import IncubationRegistrationForm from './Components/IncubationRegistrationForm';
import IncubationProgramDetails from './Components/IncubationProgramDetails';
import UpcomingEvents from './Components/UpcomingEvents';
import StartUpsPage from './Components/StartUpsPage';
import UpcomingEventsDetails from './Components/UpcomingEventsDetails';
import UpcommngEventsForm from './Components/UpcommngEventsForm';
import ScrolltoTop from './Components/ScrolltoTop';
import ScrollToHashElement from './Components/ScrollToHashElement';
import PageNotFound from './Components/PageNotFound';

const App = () => {
  return (
    <div>
      <ScrolltoTop />
      <ScrollToHashElement />
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/mission&vision" element={<MissionVision />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/events/gallery" element={<Events />} />
        <Route path="/apply" element={<RegistrationForm />} />
        <Route path="/project/current" element={<Projects />} />
        <Route path="/startups/current" element={<StartUpsPage />} />
        <Route path="/programs/incubation" element={<IncubationPrograms />} />
        <Route path="/incubationprogramregistration" element={<IncubationRegistrationForm />} />
        <Route path="/incubationprogramdetails" element={<IncubationProgramDetails />} />
        <Route path="/events/upcoming" element={<UpcomingEvents />} />
        <Route path="/upcomingEventsDetails" element={<UpcomingEventsDetails />} />
        <Route path="/upcomingEventForm" element={<UpcommngEventsForm />} />
        <Route path="/about/advisory" element={<PageNotFound />} />
        <Route path="/programs/challenges" element={<PageNotFound />} />
        <Route path="/programs/mentorship" element={<PageNotFound />} />
        <Route path="/startups/alumni" element={<PageNotFound />} />
        <Route path="/startups/success-stories" element={<PageNotFound />} />
        <Route path="/events/webinars" element={<PageNotFound />} />

      </Routes>
      <Footer />
    </div>

  );
};

export default App;

