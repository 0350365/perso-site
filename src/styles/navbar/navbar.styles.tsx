import styled from "styled-components";

export const FloatingNavbar = styled.nav`
  position: fixed;
  height: 100%;
  top: 0;
  left: 1%;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const NavbarList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: fit-content;
`;

export const NavbarListItem = styled.li`
  height: 3em;
  margin: 0;
  font-size: 1rem;
  font-weight: 100;
  display: flex;
  justify-content: center;
`;

export const NavbarLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #ffffff97; /* Customize the text color */
  font-weight: 300;
  transition: color 0.3s ease;
  &:hover {
    color: #5d577b; /* Change the color on hover */
  }
`;

const VerticalDivider = styled.div`
  height: 8em;
  width: 1px;
  background-color: #ffffff42; /* You can adjust the color as needed */
`;

export const Divider = () => {
  return <VerticalDivider />;
};
