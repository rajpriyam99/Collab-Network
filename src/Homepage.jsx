/* eslint-disable no-undef */
import './App.css'
import Navbar from './components/navBar'
import MainHead from './components/mainHead'
import Section from './components/section'
import ChooseRole from './components/chooseRole'
import AboutUs from './components/aboutUs'
import Footer from './components/footer'
import { Element } from 'react-scroll';
import { useRef } from 'react';

function Homepage() {
  // eslint-disable-next-line no-undef
  const mainHeadRef = useRef(null);
  const sectionRef = useRef(null);
  const chooseRoleRef = useRef(null);
  const aboutUsRef = useRef(null);
  // Function to handle smooth scrolling to a section
  const handleScrollTo = (id) => {
    scroll.scrollTo({
      id,
      smooth: true,
      duration: 500, // Adjust duration as needed
      offset: -50, // Optional offset to adjust scroll position (e.g., account for navbar height)
    });
  };
  return (
    <>
      {/* Render Element components before their children */}
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
    </>
  );
}

export default Homepage
