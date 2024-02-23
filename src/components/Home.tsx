import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { SectionContentWrapper } from "../styles/section/section.styles";
import img from "../assets/images/me.jpg";

const Home = () => {
  return (
    <>
      <SectionContentWrapper>
        <div
          id="home"
          className="relative h-full w-11/12 grid grid-cols-2 items-center"
        >
          <div className="h-full flex flex-col justify-center gap-4 ml-16">
            <div className=" text-5xl w-max top-40 font-cms">Jun Chao Yang</div>
            <em className="font-cms text-lg h-min">
              University of Waterloo // Computational Mathematics & Statistics
            </em>
          </div>
          <div className="h-full flex">
            <div className="h-[190%] relative left-32 flex w-2/3">
              <img
                className="sticky top-[10%] rounded-lg max-h-[80vh]"
                src={img}
              />
            </div>
            <div className="absolute h-screen flex flex-col justify-center right-20 gap-7">
              <a href="https://www.linkedin.com/in/junchao-y/" target="_blank">
                <LinkedInLogoIcon className="scale-125 cursor-pointer hover:text-sky-500 transition-colors" />
              </a>

              <a
                href="https://www.instagram.com/jun_chao.yang/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramLogoIcon className="scale-125 cursor-pointer hover:text-sky-500 transition-colors" />
              </a>
              <a href="https://github.com/0350365" target="_blank">
                <GitHubLogoIcon className="scale-125 cursor-pointer hover:text-sky-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </SectionContentWrapper>
    </>
  );
};

export default Home;
