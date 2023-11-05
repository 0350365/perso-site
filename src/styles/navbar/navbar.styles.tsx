import styled from "styled-components";

export const FloatingNavbar = styled.nav`
  position: fixed;
  top: 2%;
  right: 2%;
  z-index: 9999;
`;

export const NavbarList = styled.ul`
  list-style: none;
  padding-left: 1em;
  display: flex;
  flex-direction: row;
  gap: 1em;
  width: fit-content;
`;

export const NavbarListItem = styled.li`
  height: 3em;
  margin: 0;
  font-size: 10pt;
  font-weight: 100;
`;

export const NavbarLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #1e1d1e; /* Customize the text color */
  font-weight: bold;
  transition: color 0.3s ease;
  &:hover {
    color: #818181; /* Change the color on hover */
  }
`;
