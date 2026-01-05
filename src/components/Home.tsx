import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { SectionContentWrapper } from "../styles/section/section.styles";
import img from "../assets/images/me.jpg";

const Home = () => {
  return (
    <SectionContentWrapper>
      <div
        id="home"
        className="relative h-full w-full grid grid-cols-2 items-center"
      >
        <div className="h-full flex flex-col justify-center gap-4 md:ml-16">
          <div className=" text-5xl w-max top-40 font-cms">Jun Chao Yang</div>
          <em className="font-cms text-lg h-min">
            University of Waterloo // Computational Mathematics & Statistics
          </em>
        </div>
        <div className="h-full flex">
          <div className="hidden lg:block h-[220%] relative ml-20">
            <img
              className="sticky top-1/2 transform -translate-y-1/2 rounded-lg max-h-[70vh] h-auto object-contain"
              src={img}
            />
          </div>
          <div
            className="hidden lg:block relative text-sm text-cyan-900 text-end w-min font-pxn bottom-[15%]"
            style={{ writingMode: "vertical-rl" }}
          >
            picture by{" "}
            <span className="transition-colors hover:text-sky-800 cursor-pointer">
              <a href="https://www.instagram.com/nailuj_may" target="_blank">
                @nailuj_may
              </a>
            </span>
          </div>
          <div className="h-screen flex flex-col justify-center gap-8 grow mx-4">
            <a
              href="https://www.linkedin.com/in/junchao-y/"
              target="_blank"
              className="flex justify-center"
            >
              <LinkedInLogoIcon className="scale-125 cursor-pointer hover:text-sky-500 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/jun_chao.yang/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center"
            >
              <InstagramLogoIcon className="scale-125 cursor-pointer hover:text-sky-500 transition-colors" />
            </a>
            <a
              href="https://github.com/0350365"
              target="_blank"
              className="flex justify-center"
            >
              <GitHubLogoIcon className="scale-125 cursor-pointer hover:text-sky-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </SectionContentWrapper>
  );
};

export default Home;
