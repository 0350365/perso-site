import { SectionContentWrapper } from "../styles/section/section.styles";

export default function About() {
  return (
    <SectionContentWrapper id="about">
      <div className="w-1/2 h-full flex flex-col justify-center">
        <div className="w-max">Based in Montreal, QC.</div>
        <div className="mt-10">
          Mathematics, programming, Full-Stack development and AI/ML/DL.
          networking, data analysis, statistical modeling and inference, LLMs,
          web design, UI/UX, and many others.
        </div>
      </div>
    </SectionContentWrapper>
  );
}
