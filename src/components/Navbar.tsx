import {
  FloatingNavbar,
  NavbarList,
  NavbarLink,
  NavbarListItem,
  Divider,
} from "../styles/navbar/navbar.styles.tsx";

const sections: string[] = [
  "home",
  "experience",
  // "photography",
  // "music",
  // "projects",
];

const Navbar = () => {
  return (
    <FloatingNavbar>
      <Divider />
      <NavbarList>
        {sections.map((sec) => (
          <NavbarListItem key={sec}>
            <NavbarLink href={`#${sec}`} key={sec}>
              {sec}
            </NavbarLink>
          </NavbarListItem>
        ))}
      </NavbarList>
      <Divider />
    </FloatingNavbar>
  );
};

export default Navbar;
