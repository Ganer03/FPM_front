"use client";
import { DirCard, IDirection } from "./DirCard";
import { Accordion, AccordionItem, Tab, Tabs } from "@nextui-org/react";
import { ContainerLayout, SubtitleLayout } from "@/entities";
import { ReactElement } from "react";

export interface IDirectionDTO {
  buttonText: string;
  directions: IDirection[];
}

export const Directions = ({
  directions,
}: {
  directions: IDirectionDTO[];
}): ReactElement => {
  return (
    <SubtitleLayout text={"Направления подготовки"}>
      <ContainerLayout>
        <Tabs
          size={"lg"}
          classNames={{
            tabList: "bg-white",
            cursor: "bg-fpmPrimary",
          }}
          color={"primary"}
          className={"pb-4 font-semibold"}
          variant={"light"}
          aria-label={"Направления"}
          radius={"lg"}
        >
          {directions.map(({ buttonText }, index) => (
            <Tab key={index} title={buttonText}>
              <Accordion
                variant="splitted"
                className={"px-0"}
                defaultExpandedKeys={["0"]}
              >
                {directions[index].directions.map((item, index) => (
                  <AccordionItem
                    startContent={
                      <div className="text-[#3364E2] text-2xl font-semibold col-span-1">{`0${index + 1}`}</div>
                    }
                    indicator={
                      <div className={"text-md lg:text-xl font-light"}>
                        {item.code}
                      </div>
                    }
                    title={
                      <span
                        className={
                          "text-md md:text-lg break-all lg:text-xl text-zinc-800"
                        }
                      >
                        {item.title}
                      </span>
                    }
                    key={index}
                    disableIndicatorAnimation={true}
                    aria-label={item.title}
                  >
                    <DirCard card={item} key={index} />
                  </AccordionItem>
                ))}
              </Accordion>
            </Tab>
          ))}
        </Tabs>
      </ContainerLayout>
    </SubtitleLayout>
  );
};
