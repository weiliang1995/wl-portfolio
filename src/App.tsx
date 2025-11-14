import { useState, useEffect } from 'react';
import Section from './components/Section';
import About from './components/Section/About';
import { PageID } from './utils/enum';
import throttle from 'lodash.throttle';
import Navbar from './components/Navbar';
import Experience from './components/Section/Experience';
import Skill from './components/Section/Skill';
import Contact from './components/Section/Contact';
import BackToTop from './components/BackToTop';
import Cover from './components/Section/Cover';

function App() {
  const [isTop, setIsTop] = useState(window.scrollY === 0);
  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsTop(window.scrollY === 0);
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar isTop={isTop} />
      <Cover />
      <Section id={PageID.About}>
        <About />
      </Section>
      <Section id={PageID.Experience}>
        <Experience />
      </Section>
      <Section id={PageID.Skill}>
        <Skill />
      </Section>
      <Section id={PageID.Contact}>
        <Contact />
      </Section>
      {!isTop && <BackToTop />}
    </>
  );
}

export default App;
