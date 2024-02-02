import styled from "styled-components";

const ExperienceContainer = styled.div`
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 1.4rem;
  margin-top: 1.5rem;
`;

const HRule = styled.hr`
  width: 100%;
  grid-column: 1/4;
  height: 1px;
  border: none;
  background-color: #ffffff28;
`;

export const WorkExperience = ({
  company,
  title,
  start,
  end,
  location: city,
}: {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
}) => {
  return (
    <ExperienceContainer>
      <div>
        <span style={{ fontWeight: "lighter" }}>{`${title} @ `}</span>
        <span style={{ fontWeight: 600 }}>{company}</span>
      </div>
      <div style={{ fontWeight: "lighter" }}>{city}</div>
      <div style={{ fontWeight: "lighter" }}>
        {start} - {end}
      </div>
      <HRule />
    </ExperienceContainer>
  );
};
