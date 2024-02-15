import styled from "styled-components";
import { SectionContentWrapper } from "../styles/section/section.styles";
import { SectionHeader } from "../styles/section/section.styles";
import { WorkExperience } from "./WorkExperience";

const ExperienceContentWrapper = styled.div`
  position: relative;
  margin-top: 5rem;
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
              company="Conversance"
              title="Full-Stack Developer"
              start="Jan 2024"
              end="Apr 2024"
              location="Waterloo, ON"
            />
            <WorkExperience
              company="DRW"
              title="Software Developer Intern"
              start="May 2023"
              end="Aug 2023"
              location="Montreal, QC"
            />
            <WorkExperience
              company="MappedIn"
              title="Software Developer Co-op"
              start="Sept 2022"
              end="Dec 2022"
              location="Remote"
            />
            <WorkExperience
              company="DRW"
              title="Software Developer Intern"
              start="Jan 2022"
              end="Apr 2022"
              location="Montreal, QC"
            />
          </ExperienceContentWrapper>
        </SectionContentWrapper>
      </section>
    </>
  );
};

export default Experience;
