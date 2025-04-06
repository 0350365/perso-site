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
      className={cn(
        "relative h-[100vh] w-full pl-10 md:pl-[10%] m-0 text-white box-border",
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
};

export const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sticky font-cms text-2xl font-medium decoration-[2%] top-0 z-10">
      {children}
    </div>
  );
};
