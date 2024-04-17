import React from "react";
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

export const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative font-cms text-2xl font-medium decoration-[2%] top-6">
      {children}
    </div>
  );
};
