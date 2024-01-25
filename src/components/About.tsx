import styled from "styled-components";
import { SectionContentWrapper } from "../styles/section/section.styles";
import { useEffect, useState } from "react";

const NameMain = styled.p`
  position: absolute;
  font-size: 3rem;
  width: max-content;
  line-height: 1rem;
  font-family: "Computer Modern Serif";
  margin-bottom: 0;
  top: 35%;
`;

const NameSubHeading = styled.em`
  position: relative;
  display: grid;
  font-size: 1.2rem;
  font-family: "Computer Modern Serif";
  height: min-content;
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
  const [docHeight, setDocHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    addEventListener("resize", (e: Event) => {
      const window = e.currentTarget as Window;
      const height = window.innerHeight;
      setDocHeight(height);
    });
  }, []);

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
          <ImageStyles
            src="src/assets/images/me.jpg"
            height={`${docHeight * 0.8}px`}
          />
        </div>
      </SectionContentWrapper>
    </>
  );
};

export default About;
