/* eslint-disable no-undef */
import './App.css'
// import Navbar from './components/navBar'
// import MainHead from './components/mainHead'
// import Section from './components/section'
// import ChooseRole from './components/chooseRole'
// import AboutUs from './components/aboutUs'
// import Footer from './components/footer'
// import { Element } from 'react-scroll';
// import { useRef } from 'react';
// import { useState } from 'react';
import Register from './Register';
import Homepage from './Homepage';
import Application from './Application';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  // // eslint-disable-next-line no-undef
  // const mainHeadRef = useRef(null);
  // const sectionRef = useRef(null);
  // const chooseRoleRef = useRef(null);
  // const aboutUsRef = useRef(null);
  // const registerRef = useRef(null);
  // // Function to handle smooth scrolling to a section
  // const handleScrollTo = (id) => {
  //   scroll.scrollTo({
  //     id,
  //     smooth: true,
  //     duration: 500, // Adjust duration as needed
  //     offset: -50, // Optional offset to adjust scroll position (e.g., account for navbar height)
  //   });
  // };
  // const [currentPage, setCurrentPage] = useState('Homepage');

  // const handleNavigateTo = (page) => {
  //   setCurrentPage(page);
  // };
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/application" element={<Application/>} />
      </Routes>
    </Router>
      {/* {currentPage === 'Homepage' && (
        <Homepage onRegisterClick={() => handleNavigateTo('Register')} />
      )}
      {currentPage === 'Register' && (
        <Register onBack={() => handleNavigateTo('Homepage')} />
      )}
      {currentPage === 'Application' && (
        <Application onBack={() => handleNavigateTo('Homepage')} />
      )} */}
      {/* Render Element components before their children
      <Navbar onScrollTo={handleScrollTo} />
      <Element id="mainHead" ref={mainHeadRef}>
        <MainHead />
      </Element>
      <Element id="section" ref={sectionRef}>
        <Section />
      </Element>
      <Element id="chooseRole" ref={chooseRoleRef}>
        <ChooseRole />
      </Element>
      <Element id="aboutUs" ref={aboutUsRef}>
        <AboutUs />
      </Element>
      <Footer />
      <Element id='register' ref={registerRef}>
          <Register />
      </Element> */}
    </>
  );
}

export default App
