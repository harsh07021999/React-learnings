import { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
  return <button type="submit">{children}</button>;
};
