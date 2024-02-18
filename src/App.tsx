import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar />
      <div className="absolute w-full flex flex-col left-0 top-0">
        <div className="absolute top-0 left-0 m-0 p-0, w-full h-full bg-default blur-3xl opacity-35" />
        <Home />
        <About />
        <Experience />
        {/* <Photography />
        <section id="music"></section>
        <section id="projects"></section> */}
      </div>
    </>
  );
}

export default App;
