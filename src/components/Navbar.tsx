import { useEffect, useState } from "react";
import { Divider } from "../styles/navbar/navbar.styles.tsx";
import { cn } from "@/lib/utils.ts";
const sections: string[] = [
  "home",
  "about",
  "experience",
  // "photography",
  // "music",
  // "projects",
];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Uses user's scroll position to determine which section the user is on
  const getCurrentSection = () => {
    if (scrollPosition < window.innerHeight * (1 / 2)) return "home";
    if (scrollPosition <= window.innerHeight * (3 / 2)) return "about";
    if (scrollPosition <= window.innerHeight * 2.5) return "experience";
    return "experience";
  };

  return (
    <nav className="fixed h-full top-0 left-4 z-50 flex flex-col items-center justify-around">
      <Divider />
      <ul className="list-none pl-0 flex flex-col gap-7 h-max">
        {sections.map((sec) => (
          <li
            key={sec}
            className=" m-0 text-sm font-hairline flex justify-center"
          >
            <a
              href={`#${sec}`}
              className={cn(
                "inline-block no-underline font-light transition-colors duration-500 hover:text-sky-500 w-max",
                getCurrentSection() === sec
                  ? "text-violet-400 "
                  : "text-gray-500"
              )}
              style={{ writingMode: "vertical-rl" }}
            >
              {sec}
            </a>
          </li>
        ))}
      </ul>
      <Divider />
    </nav>
  );
};

export default Navbar;
