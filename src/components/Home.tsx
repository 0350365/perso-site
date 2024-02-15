import { SectionContentWrapper } from "../styles/section/section.styles";
import { useEffect, useState } from "react";
const About = () => {
  return (
    <>
      <SectionContentWrapper>
        <div
          id="home"
          className="relative h-full w-11/12 grid grid-cols-2 items-center"
        >
          <div className="h-full flex flex-col justify-center gap-4 ml-20">
            <div className=" text-5xl w-max top-40 font-cms">Jun Chao Yang</div>
            <em className="font-cms text-lg h-min">
              University of Waterloo // Computational Mathematics & Statistics
            </em>
          </div>

          {/* <AboutContent>
          <b> Mathematics, programming, Full-Stack development and AI/ML/DL</b>.
          networking, data analysis, statistical modeling and inference, LLMs,
          web design, UI/UX, and many others . <br />
          <br />
        </AboutContent> */}
          <img
            className="relative left-28 rounded-lg max-h-[80vh]"
            src="src/assets/images/me.jpg"
          />
        </div>
      </SectionContentWrapper>
    </>
  );
};

export default About;
