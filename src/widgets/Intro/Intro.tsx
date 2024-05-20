import { BlueButton, ContainerLayout } from "@/entities";
import { ReactElement } from "react";

import { getDictionary } from "./dictionaries";

export const Intro = async ({
  lang,
}: {
  lang: string;
}): Promise<ReactElement> => {
  const { universityName, facultyName, subtitle, contactButtonText } =
    await getDictionary(lang);
  return (
    <>
      <ContainerLayout>
        <p className="text-2xl font-extralight tracking-[.25em]">
          {universityName}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl my-2">{facultyName}</h1>
        <br />
        <p className="font-extralight">{subtitle}</p>
        <div className="my-16 h-200px flex">
          <BlueButton
            href={"#feedback"}
            text={contactButtonText}
            className={"text-lg lg:text-2xl font-medium px-12 py-4"}
          />
          <div className="hidden md:block z-0 w-[60%] h-[2rem] bg-gradient-to-r from-[#5C83E7]"></div>
        </div>
      </ContainerLayout>
    </>
  );
};
