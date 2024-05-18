import React, { ReactNode } from "react";
import { LevelContext } from "./test-context";

interface SectionsProps {
  level: number;
  children?: ReactNode;
}

export const Sections: React.FC<SectionsProps> = ({ level, children }) => {
  return (
    <section style={{ border: "1px solid black" }}>
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
};
