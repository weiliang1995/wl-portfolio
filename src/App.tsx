import "./App.css";

function App() {
  const onNavClick = (id) => {};
  return (
    <>
      <nav className="bg-amber-400 px-12 py-6 flex items-center justify-between">
        <div>My Portfolio</div>
        <div className="flex gap-4">
          <span
            className="hover:text-amber-100 active:hover:text-amber-200 hover:cursor-pointer"
            onClick={() => onNavClick("about-me")}
          >
            About Me
          </span>
          <span
            className="hover:text-amber-100 active:hover:text-amber-200 hover:cursor-pointer"
            onClick={() => onNavClick("experience")}
          >
            Experience
          </span>
          <span
            className="hover:text-amber-100 active:hover:text-amber-200 hover:cursor-pointer"
            onClick={() => onNavClick("education")}
          >
            Education
          </span>
          <span
            className="hover:text-amber-100 active:hover:text-amber-200 hover:cursor-pointer"
            onClick={() => onNavClick("contact")}
          >
            Contact
          </span>
        </div>
      </nav>
      <section id="about-me"></section>
      <section id="experience"></section>
      <section id="education"></section>
      <section id="contact"></section>
    </>
  );
}

export default App;
