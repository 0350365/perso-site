import styled from "styled-components";

const VerticalDivider = styled.div`
  height: 8em;
  width: 1px;
  background-color: #ffffff2a; /* You can adjust the color as needed */
`;

export const Divider = () => {
  return <VerticalDivider />;
};
