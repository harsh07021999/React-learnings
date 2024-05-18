import { ReactNode, useContext } from "react";
import { LevelContext } from "./test-context";

export const Head = ({ children }: { children: ReactNode }) => {
  const level = useContext(LevelContext);
  console.log(level);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    default:
      return <h6>"lol"</h6>;
  }
};
