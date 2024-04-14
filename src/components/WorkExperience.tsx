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
      <div className="w-[90%] grid grid-cols-3 justify-around text-2xl mt-6 transition-colors duration-1000 pb-4 [&_div]:w-fit">
        <div>
          <div className="font-bold">{company}</div>
          <div className="font-extralight">{`${title} `}</div>
        </div>
        <div className="font-extralight flex items-center">{city}</div>
        <div className="font-extralight flex items-center">
          {start} - {end}
        </div>
        <hr className="p-0 w-full col-start-1 col-end-4 h-[1px] border-none bg-gray-700" />
      </div>
    </>
  );
};
