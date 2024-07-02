import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className="h-screen w-full mx-auto max-w-5xl ">{children}</div>;
};

export default Container;
