import {
  FloatingNavbar,
  NavbarList,
  NavbarLink,
  NavbarListItem,
} from "../styles/navbar/navbar.styles.tsx";

const sections: string[] = [
  "about",
  "experience",
  "photography",
  "music",
  "projects",
];

const Navbar = () => {
  return (
    <FloatingNavbar>
      <NavbarList>
        {sections.map((sec) => (
          <NavbarListItem key={sec}>
            <NavbarLink href={`#${sec}`} key={sec}>
              {sec.toUpperCase()}
            </NavbarLink>
          </NavbarListItem>
        ))}
      </NavbarList>
    </FloatingNavbar>
  );
};

export default Navbar;
