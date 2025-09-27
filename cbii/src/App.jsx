// App.jsx
import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrolltoTop from "./Components/ScrolltoTop";
import ScrollToHashElement from "./Components/ScrollToHashElement";
import MainPage from "./Components/MainPage";
import About from "./Components/About";
import MissionVision from "./Components/MissionVision";
import Team from "./Components/Team";
import RegistrationForm from "./Components/RegistrationForm";
import Projects from "./Components/Projects";
import IncubationPrograms from "./Components/IncubationPrograms";
import IncubationRegistrationForm from "./Components/IncubationRegistrationForm";
import IncubationProgramDetails from "./Components/IncubationProgramDetails";
import StartUpsPage from "./Components/StartUpsPage";
import Managements from "./Components/Managements";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ExpertMentors from "./Pages/ExpertMentors";
import EventsPage from "./Pages/EventsPage";
import EventsDetails from "./Pages/EventsDetails";
import UpcomingEvents from "./Pages/UpcomingEvents";
import Ideathon from "./Components/Ideathon";
import Hackathon from "./Components/Hackathon";
import Sciencechampionship from "./Components/Sciencechampionship";
import DepartmentProject from "./Pages/DepartmentEvents";


const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrolltoTop />
      <ScrollToHashElement />

      {/* Navbar fixed height assumption: ~64px */}
      <NavBar />

      {/* Main content area */}
      <main className="flex-grow pt-20 px-1">
        {/* pt-20 = padding top to push content below navbar */}
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />

      },
      {
        path: "/about", element: < About />
      },
      {
        path: "/about/mission&vision", element: <MissionVision />
      },
      { path: "/about/team", element: <Team /> },
      { path: "/about/managements", element: <Managements /> },
      { path: "/about/expertmentor", element: <ExpertMentors /> },
      // { path: "/events/gallery", element: <Events /> },
      { path: "/apply", element: <RegistrationForm /> },
      { path: "/project/current", element: <Projects /> },
      { path: "/startups/current", element: <StartUpsPage /> },
      { path: "/programs/incubation", element: <IncubationPrograms /> },
      { path: "/incubationprogramregistration", element: <IncubationRegistrationForm /> },
      { path: "/incubationprogramdetails", element: <IncubationProgramDetails /> },

      {
        path: "/events/upcoming",
        element: <UpcomingEvents />,
      },
      {
        path: "/events/upcoming/ideathon",
        element: <Ideathon />, // Renders Ideathon page separately
      },
      {
        path: "/events/upcoming/hackathon",
        element: <Hackathon />, // Renders Hackathon page separately
      },
      {path:'/event/upcoming/shivatech', element:<DepartmentProject/>},
      {path:'/event/upcoming/sciencechampioship', element:<Sciencechampionship/>},
      { path: "/events/gallery", element: <EventsPage /> },
      { path: "/events/pastevents/:id", element: <EventsDetails /> },
      // { path: "/events/upcommingevents/:id", element: <UpcommingEventsDetails /> },
      // { path: "/upcomingEventForm", element: <UpcommngEventsForm /> },
    ]
  }
])

const App = () => {
  return (
    <>

      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default App;
