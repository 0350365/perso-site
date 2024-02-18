import { useEffect, useState } from "react";
import { Divider } from "../styles/navbar/navbar.styles.tsx";

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
    if (scrollPosition < window.innerHeight / 2) return "home";
    if (scrollPosition <= window.innerHeight) return "experience";
    return "home";
  };

  console.log(getCurrentSection());
  console.log(scrollPosition);

  return (
    <nav className="fixed h-full top-0 left-4 z-50 flex flex-col items-center justify-around">
      <Divider />
      <ul className="list-none pl-0 flex flex-col gap-4 w-auto">
        {sections.map((sec) => (
          <li
            key={sec}
            className=" h-12 m-0 text-sm font-hairline flex justify-center"
          >
            <a
              href={`#${sec}`}
              className="inline-block no-underline text-slate-300 font-light transition-colors duration-300 hover:text-slate-400"
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
