import { SectionContentWrapper } from "../styles/section/section.styles";
const Home = () => {
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
          <div className="h-[280%] relative left-32 flex w-2/3">
            <img
              className="sticky top-[10%] rounded-lg max-h-[80vh]"
              src="src/assets/images/me.jpg"
            />
          </div>
        </div>
      </SectionContentWrapper>
    </>
  );
};

export default Home;
