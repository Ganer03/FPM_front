import { ReactElement, ReactNode } from "react";

export const ContainerLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return (
    <div className={"container py-8 px-4 lg:px-12 mx-auto"}>{children}</div>
  );
};
