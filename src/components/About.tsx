import styled from "styled-components";
import { SectionContentWrapper } from "../styles/section/section.styles";

const NameMain = styled.p`
  position: relative;
  font-size: 6.5em;
  width: max-content;
  line-height: 1em;
  font-family: "Computer Modern Serif";
`;

const NameSubHeading = styled.em`
  font-size: 1.5em;
  font-weight: 300;
  font-family: "Computer Modern Serif";
`;

const AboutContent = styled.div`
  position: relative;
  top: 5em;
  font-size: 1.1rem;
  width: 80vw;
  font-family: "Proxima Nova Condensed";
`;

const About = () => {
  return (
    <>
      <section id="about">
        <SectionContentWrapper>
          <NameMain>Jun Chao Yang</NameMain>
          <NameSubHeading>
            4th year student at the University of Waterloo in Computational
            Mathematics & Statistics
          </NameSubHeading>
          <AboutContent>
            Hi! I'm Jun Chao and I'm in my fourth year of pursuing a Bachelor's
            of Mathematics degree in{" "}
            <b>Computational Mathematics and Statistics</b> at the{" "}
            <b> University of Waterloo </b>. <br />
            <br />
            I'm enthusiastic about
            <b>
              {" "}
              mathematics, programming, Full-Stack development and AI/ML/DL
            </b>
            . Throughtout my internships and academics, I've worked on{" "}
            <b>
              networking, data analysis, statistical modeling and inference,
              LLMs, web design, UI/UX,{" "}
            </b>
            and many others . <br />
            <br />
            As a team player with a strong aptitude for quick learning and
            problem-solving, I thrive on embracing challenges and exploring new
            technologies to work with. My passion lies in teamwork where we can
            collectively support eachother into achieving our goals.
            <br />
            <br />
            Besides work and school, I also enjoy doing photography,
            videography, music production, and playing guitar :D
          </AboutContent>
        </SectionContentWrapper>
      </section>
    </>
  );
};

export default About;
