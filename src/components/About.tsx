import { SectionContentWrapper } from "../styles/section/section.styles";

export default function About() {
  return (
    <SectionContentWrapper id="about">
      <div className="w-1/2 h-full flex flex-col justify-center font-light text-xl font-pxn">
        <div className="w-max">Based in Montreal, QC.</div>
        <div className="mt-10">
          Mathematics, programming, Full-Stack development and AI/ML/DL.
          Networking, data analysis, statistical modeling and inference, LLMs,
          UI/UX, and many others.
        </div>
        <div className="mt-10">
          I also play guitar (classical and electric), do photography and
          videography, and produce music in my spare time :D
        </div>
      </div>
    </SectionContentWrapper>
  );
}
