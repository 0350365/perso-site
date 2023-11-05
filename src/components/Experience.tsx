import styled from "styled-components";
import { SectionContentWrapper } from "../styles/section/section.styles";
import { SectionHeader } from "../styles/section/section.styles";

const ExperienceContentWrapper = styled.div`
  position: relative;
  margin-top: 3%;
`;
const Experience = () => {
  return (
    <>
      <section id="experience">
        <SectionContentWrapper>
          <SectionHeader>EXPERIENCE</SectionHeader>
          <ExperienceContentWrapper>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            aliquam, quam dicta deleniti atque ipsum!
          </ExperienceContentWrapper>
        </SectionContentWrapper>
      </section>
    </>
  );
};

export default Experience;
