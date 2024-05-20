import { Subtitle } from "@/entities";
import { ReactElement, ReactNode } from "react";

export const SubtitleLayout = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}): ReactElement => {
  return (
    <>
      <Subtitle text={text} />
      {children}
    </>
  );
};
