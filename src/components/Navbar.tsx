import styled from "styled-components";

const FloatingNavbar = styled.nav`
  position: fixed;
  top: 0;
  height: 100%;
  width: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const NavbarList = styled.ul`
  list-style: none;
  padding-left: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: fit-content;
`;

const NavbarListItem = styled.li`
  height: 3em;
  margin: 0;
`;

const NavbarLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #1e1d1e; /* Customize the text color */
  font-weight: bold;
  transition: color 0.3s ease;
  &:hover {
    color: #818181; /* Change the color on hover */
  }
`;

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
