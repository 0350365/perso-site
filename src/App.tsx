import "./App.css";
import "./styles/section.css";
import Experience from "./components/Experience";
import Photography from "./components/Photography";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div id="sectionWrapper">
        <About />
        <Experience />
        <Photography />
        <section id="music"></section>
        <section id="projects"></section>
      </div>
    </>
  );
}

export default App;
