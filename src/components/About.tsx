import { SectionContentWrapper } from "../styles/section/section.styles";

export default function About() {
  return (
    <SectionContentWrapper id="about">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center font-light text-xl font-pxn">
        <div>
          Hi! My name is Jun Chao, and I'm an undergrad student at the
          University of Waterloo.
        </div>
        <div className="mt-10">
          My studies and interests mainly revolve around probability theory,
          statistical modeling and inference, mathematical optimization,
          machine/deep learning, software development, and data analysis.
        </div>
        <div className="mt-10">
          I'm based in Montreal, QC. I play guitar (classical and electric), do
          photography and videography, and produce{" "}
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
