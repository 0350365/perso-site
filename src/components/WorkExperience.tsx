import styled from "styled-components";
const ExperienceContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  font-size: 1.4rem;
  margin-top: 1.5rem;
  transition: background-color 1s;
  padding-bottom: 1rem;
  & div {
    width: fit-content;
  }
`;

const HRule = styled.hr`
  padding: 0;
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
    <>
      <ExperienceContainer>
        <div>
          <div className="font-bold">{company}</div>
          <div className="font-extralight">{`${title} `}</div>
        </div>
        <div className="font-extralight flex items-center">{city}</div>
        <div className="font-extralight flex items-center">
          {start} - {end}
        </div>
        <HRule />
      </ExperienceContainer>
    </>
  );
};
