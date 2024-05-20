import { ReactElement } from "react";

export const Subtitle = ({ text }: { text: string }): ReactElement => {
  return (
    <div className="container mx-auto flex items-center">
      <div className={"hidden md:block"}>
        <div className="bg-[#5C83E7] rounded-3xl h-3 w-3 md:h-6 md:w-6 mr-6"></div>
      </div>
      <h2 className="font-bold text-2xl md:text-3xl ml-6 md:ml-0">{text}</h2>
    </div>
  );
};
