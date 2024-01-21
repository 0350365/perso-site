import Experience from "./components/Experience";
import Photography from "./components/Photography";
import About from "./components/About";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-image: url(../src/assets/images/me.jpg);
  filter: blur(200px) opacity(0.25);
`;

function App() {
  return (
    <>
      <Navbar />
      <div id="sectionWrapper">
        <Background />
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
