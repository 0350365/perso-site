import styled from "styled-components";
import { SectionContentWrapper } from "../styles/section/section.styles";
import { SectionHeader } from "../styles/section/section.styles";
import { WorkExperience } from "./WorkExperience";

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
            <WorkExperience
              company="DRW"
              title="Software Developer Intern"
              start="May 2023"
              end="Aug 2023"
            />
          </ExperienceContentWrapper>
        </SectionContentWrapper>
      </section>
    </>
  );
};

export default Experience;
