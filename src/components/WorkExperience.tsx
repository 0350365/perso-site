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
    <>
      {" "}
      <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>{company} </span>
      <span style={{ fontWeight: "lighter", fontSize: "1.2rem" }}>
        - {title}{" "}
      </span>
      <span style={{ fontWeight: "lighter", fontSize: "1.2rem" }}>
        - {start} - {end}
      </span>
    </>
  );
};
