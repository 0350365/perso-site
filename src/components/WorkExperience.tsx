import styled from "styled-components";

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const WorkExperience = ({
  company,
  title,
  start,
  end,
}: {
  company: string;
  title: string;
  start: string;
  end: string;
}) => {
  return (
    <ExperienceContainer>
      <div style={{ fontWeight: 600, fontSize: "1.4rem" }}>{company} </div>
      <div style={{ fontWeight: "lighter", fontSize: "1.4rem" }}>{title}</div>
      <div style={{ fontWeight: "lighter", fontSize: "1.4rem" }}>
        {start} - {end}
      </div>
    </ExperienceContainer>
  );
};
