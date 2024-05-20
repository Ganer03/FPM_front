"use client";
import Image from "next/image";
import fpmLogo from "../../../public/fpm_logo.svg";
import Link from "next/link";
import { Menu } from "@/features/Menu/Menu";
import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import React, { ReactElement } from "react";
import { LangSelector, SearchInput } from "@/features";

const Links = (): ReactElement => {
  return (
    <>
      <Link href={"/enrollee"}>Абитуриентам</Link>
      <Link href={"/departments"}>Кафедры</Link>
      <Link href={"/projects"}>Проекты</Link>
      <Link href={"/contacts"}>Контакты</Link>
      <Link href={"/students"}>Студентам</Link>
      <Link href={"/platform"}>
        <Chip
          size={"lg"}
          classNames={{
            base: "bg-fpmPrimary text-white",
          }}
        >
          ПЛАТФОРМА
        </Chip>
      </Link>
    </>
  );
};

export const Header = (): ReactElement => {
  return (
    <header className="py-4 lg:sticky top-0 w-full z-50">
      <div className={"flex lg:hidden justify-between px-4"}>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] select-none"
          src={fpmLogo}
          alt="FPM Logo"
          height={80}
          priority
        />
        <Menu className={"bg-zinc-100 w-full drop-shadow-md py-6 px-8"}>
          <div className={"flex flex-col gap-8 justify-between h-full"}>
            <div className={"flex flex-col gap-6 py-4 font-medium text-xl"}>
              <Image
                className="relative select-none mb-6"
                src={fpmLogo}
                alt="FPM Logo"
                height={80}
                priority
              />
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Accordion 1"
                >
                  <div>afasf</div>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Accordion 2"
                >
                  <div>afsafs</div>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Accordion 3"
                >
                  <div>afsafs</div>
                </AccordionItem>
              </Accordion>
            </div>
            <div className={"flex flex-col gap-5 font-medium text-xl"}>
              <div className={"duration-500"}>
                <a href="tel:+79612199578">+7 (861) 219-95-78</a>
              </div>
              <div className={"duration-500"}>
                <a href="tel:+79186840333">+7 (918) 684-03-33</a>
              </div>
            </div>
          </div>
        </Menu>
      </div>
      <div
        className={
          "hidden lg:flex flex-nowrap justify-between items-center z-50 relative drop-shadow-md backdrop-blur-md mx-auto container gap-4 w-full border-b border-gray-300 bg-white/60 px-8 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl lg:border"
        }
      >
        <div className="logo flex justify-start w-auto">
          <a href="/">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] select-none"
              src={fpmLogo}
              alt="FPM Logo"
              height={80}
              priority
            />
          </a>
        </div>
        <div className="flex items-center justify-around gap-6 text-md xl:text-lg">
          <Links />
        </div>
        <div className="tools grid grid-cols-2 gap-4">
          <SearchInput />
          <LangSelector />
        </div>
      </div>
    </header>
  );
};
