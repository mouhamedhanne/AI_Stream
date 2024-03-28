import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-6xl h-full m-auto">{children}</div>;
}
