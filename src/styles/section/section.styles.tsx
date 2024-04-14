import React from "react";
import styled from "styled-components";
import { cn } from "@/lib/utils";

interface SectionContentWrapperProps {
  children: React.JSX.Element;
  className?: string;
  id?: string;
}
export const SectionContentWrapper = ({
  children,
  className,
  id,
}: SectionContentWrapperProps) => {
  return (
    <section
      className={cn("relative pl-40 m-0 text-white box-border", className)}
      id={id}
    >
      {children}
    </section>
  );
};

export const SectionHeader = styled.div`
  position: relative;
  font-family: "Computer Modern Serif";
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration-thickness: 2%;
  top: 1.5rem;
`;
