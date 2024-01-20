import styled from "styled-components";
import { SectionContentWrapper } from "../styles/section/section.styles";
import { SectionHeader } from "../styles/section/section.styles";

const ExperienceContentWrapper = styled.div`
  position: relative;
  margin-top: 3%;
  font-family: "Proxima Nova Condensed";
`;
const Experience = () => {
  return (
    <>
      <section id="experience">
        <SectionContentWrapper>
          <SectionHeader>EXPERIENCE</SectionHeader>
          <ExperienceContentWrapper>
            <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>DRW </span>
            <span style={{ fontWeight: "lighter", fontSize: "1.2rem" }}>
              - Software Developer Intern{" "}
            </span>
            <span style={{ fontWeight: "lighter", fontSize: "1.2rem" }}>
              - May 2023 - Aug 2023
            </span>
          </ExperienceContentWrapper>
        </SectionContentWrapper>
      </section>
    </>
  );
};

export default Experience;
