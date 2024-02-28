import { SectionContentWrapper } from "../styles/section/section.styles";

export default function About() {
  return (
    <SectionContentWrapper id="about">
      <div className="w-1/2 h-full flex flex-col justify-center font-light text-xl font-pxn">
        <div className="w-max">Based in Montreal, QC.</div>
        <div className="mt-10">
          Mathematics, programming, full-stack development, AI/ML/DL, LLMs,
          networking, data analysis, statistical modeling and inference, and
          UI/UX, to name a few.
        </div>
        <div className="mt-10">
          I also play guitar (classical and electric), do photography and
          videography, and produce{" "}
          <a
            className="transition-colors text-cyan-200 hover:text-sky-400 cursor-pointer"
            href="https://open.spotify.com/artist/4jZIgo54jrpEdUWQbpRUGH"
            target="_blank"
          >
            music
          </a>{" "}
          as hobbies :D
        </div>
      </div>
    </SectionContentWrapper>
  );
}
