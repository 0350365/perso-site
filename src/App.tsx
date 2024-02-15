import Experience from "./components/Experience";
import Photography from "./components/Photography";
import About from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div id="sectionWrapper">
        <div className="absolute top-0 left-0 m-0 p-0, w-full h-full bg-default blur-3xl opacity-35" />
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
