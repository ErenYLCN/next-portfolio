"use client";

import React, { createContext, use, useState } from "react";

import { SectionTitle } from "@/core/lib/types";

export const ActiveSectionContext = createContext(
  {} as {
    activeSection: SectionTitle;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionTitle>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  }
);

export const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionTitle>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => use(ActiveSectionContext);
