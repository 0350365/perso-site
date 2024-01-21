import styled from "styled-components";
import { SectionContentWrapper } from "../styles/section/section.styles";

const NameMain = styled.p`
  position: absolute;
  font-size: 3rem;
  width: max-content;
  line-height: 1rem;
  font-family: "Computer Modern Serif";
  margin-bottom: 0;
  top: 32%;
`;

const NameSubHeading = styled.em`
  position: relative;
  display: grid;
  font-size: 1.2rem;
  font-family: "Computer Modern Serif";
  line-height: 10px;
  height: min-content;
  top: -3rem;
  grid-column: 1 / 1;
`;

const AboutContent = styled.div`
  position: relative;
  top: 42%;
  font-size: 1.1rem;
  width: 75vw;
  font-family: "Proxima Nova Condensed";
`;

const ImageStyles = styled.img`
  position: relative;
  left: 10%;
  border-radius: 1rem;
`;

const About = () => {
  return (
    <>
      <SectionContentWrapper>
        <div id="about">
          <NameMain>Jun Chao Yang</NameMain>
          <NameSubHeading>
            University of Waterloo // Computational Mathematics & Statistics
          </NameSubHeading>

          {/* <AboutContent>
          <b> Mathematics, programming, Full-Stack development and AI/ML/DL</b>.
          networking, data analysis, statistical modeling and inference, LLMs,
          web design, UI/UX, and many others . <br />
          <br />
        </AboutContent> */}
          <ImageStyles src="src/assets/images/me.jpg" height={"700px"} />
        </div>
      </SectionContentWrapper>
    </>
  );
};

export default About;
