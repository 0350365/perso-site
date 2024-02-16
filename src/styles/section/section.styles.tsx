import React from "react";
import styled from "styled-components";

export const SectionContentWrapper = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  return (
    <section className="relative pl-40 m-0 text-white box-border">
      {children}
    </section>
  );
};

styled.section`
  position: relative;
  padding-left: 12%;
  color: white;
  margin: 0;
  box-sizing: border-box;
`;

export const SectionHeader = styled.div`
  position: relative;
  font-family: "Computer Modern Serif";
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration-thickness: 2%;
  top: 1.5rem;
`;
