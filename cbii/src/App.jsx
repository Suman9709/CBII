// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './Components/NavBar';
// import Leadership from './Components/Leadership';
// import Footer from './Components/Footer';
// import Team from './Components/Team';
// import MainPage from './Components/MainPage';
// import AboutPage from './Components/AboutPage'; // Create this new component
// import ProgramsPage from './Components/ProgramsPage'; // Create this new component
// import StartupsPage from './Components/StartupsPage'; // Create this new component
// import ResourcesPage from './Components/ResourcesPage'; // Create this new component
// import EventsPage from './Components/EventsPage'; // Create this new component
// import ContactPage from './Components/ContactPage'; // Create this new component
// import ApplyPage from './Components/ApplyPage'; // Create this new component

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<MainPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/programs" element={<ProgramsPage />} />
//           <Route path="/startups" element={<StartupsPage />} />
//           <Route path="/resources" element={<ResourcesPage />} />
//           <Route path="/events" element={<EventsPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/apply" element={<ApplyPage />} />
          
//           {/* Sub-routes for About section */}
//           <Route path="/about/mission" element={<AboutPage tab="mission" />} />
//           <Route path="/about/team" element={<AboutPage tab="team" />} />
//           <Route path="/about/advisory" element={<AboutPage tab="advisory" />} />
//           <Route path="/about/partnership" element={<AboutPage tab="partnership" />} />
          
//           {/* Add similar sub-routes for other sections as needed */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


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

const App = () => {
  return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />}  />
          <Route path="/about/mission&vision" element={<MissionVision />}  />
          <Route path="/about/team" element={<Team />}  />
          <Route path="/events/gallery" element={<Events />}  />
          <Route path="/apply" element={<RegistrationForm />}  />
          <Route path="/project/current" element={<Projects />}  />
          <Route path="/startups/current" element={<StartUpsPage />}  />
          <Route path="/programs/incubation" element={<IncubationPrograms />}  />
          <Route path="/incubationprogramregistration" element={<IncubationRegistrationForm />}  />
          <Route path="/incubationprogramdetails" element={<IncubationProgramDetails />}  />
          <Route path="/events/upcoming" element={<UpcomingEvents />}  />
          <Route path="/upcomingEventsDetails" element={<UpcomingEventsDetails />}  />
        </Routes>
        <Footer />
      </div>
  
  );
};

export default App;

