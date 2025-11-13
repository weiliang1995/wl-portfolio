import { useState, useEffect } from "react";
import Section from "./components/Section";
import About from "./components/Section/About";
import { NavTitle } from "./utils/enum";
import throttle from "lodash.throttle";
import Navbar from "./components/Navbar";
import Experience from "./components/Section/Experience";
import Education from "./components/Section/Education";
import Contact from "./components/Section/Contact";

function App() {
  
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsTop(window.scrollY === 0);
    }, 100)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Navbar isTop={isTop} />
      <div className="px-12 py-6 w-full flex flex-col justify-center items-center">
        <Section id={NavTitle.About} className="h-dvh">
          <About />
        </Section>
        <Section id={NavTitle.Experience}>
          <Experience />
        </Section>
        <Section id={NavTitle.Education}>
          <Education />
        </Section>
        <Section id={NavTitle.Contact}>
          <Contact />
        </Section>
      </div>
    </>
  );
}

export default App;
