import { SectionContentWrapper } from "../styles/section/section.styles";
import { SectionHeader } from "../styles/section/section.styles";
import { WorkExperience } from "./WorkExperience";
const Experience = () => {
  return (
    <>
      <SectionContentWrapper id="experience" className="pt-12">
        <>
          <SectionHeader>EXPERIENCE</SectionHeader>
          <div className="relative mt-8 font-pxn h-1/2 flex flex-col justify-between">
            <WorkExperience
              company="Conversance"
              title="Full-Stack Developer"
              start="Jan 2024"
              end="Apr 2024"
              location="Waterloo, ON"
              description="Designed and implemented critical functionalities for both admins and
              users of Conversance's cutting-edge marketplace. Researched into
              training and leveraging LLMs to enhance customer experience when
              searching and placing orders."
            />
            <WorkExperience
              company="DRW"
              title="Software Developer Intern"
              start="May 2023"
              end="Aug 2023"
              location="Montreal, QC"
              description="Devised novel techniques for analyzing network data using machine
              learning algorithms and statistical methods.
              Experimented with semi-supervised learning techniques for fine-tuning LLMs on
              unbalanced datasets with few labelled data points."
            />
            <WorkExperience
              company="MappedIn"
              title="Software Developer Co-op"
              start="Sept 2022"
              end="Dec 2022"
              location="Remote"
              description="Developed critical components and functionalities for the user 
              interface of MappedIn's map editor platorm. Collaborated with the team on code 
              reviews and QA testing to ensure design and technical requirements were met."
            />
            <WorkExperience
              company="DRW"
              title="Software Developer Intern"
              start="Jan 2022"
              end="Apr 2022"
              location="Montreal, QC"
              description="Enhanced internal applications by implementing new features and 
              performance optimizations. Utilized clustering algorithms and dimensionality 
              reduction to effectively categorize and visualize tendencies in data."
            />
          </div>
        </>
      </SectionContentWrapper>
    </>
  );
};

export default Experience;
