"use client";
import { languages } from "@/language";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import { ReactElement, useMemo } from "react";

export const LangSelector = (): ReactElement => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = useMemo(() => {
    const code = pathname.split("/")[1];
    return languages[code];
  }, [pathname]);

  return (
    <Dropdown
      backdrop={"blur"}
      classNames={{
        content: "min-w-[150px]",
      }}
    >
      <DropdownTrigger>
        <div className="font-bold text-lg select-none">
          {currentLanguage.localCode}
        </div>
      </DropdownTrigger>
      <DropdownMenu
        variant={"flat"}
        color={"primary"}
        aria-label={"Выбор языка"}
      >
        {Object.entries(languages).map(([key, language]) => (
          <DropdownItem
            textValue={language.localCode}
            key={key}
            onClick={() => {
              router.push(`/${key}/${pathname.split("/").slice(2).join("/")}`);
            }}
            startContent={
              <Avatar
                alt={language.slug}
                className={"w-7 h-7"}
                src={`https://flagcdn.com/${language.imgCode}.svg`}
              />
            }
          >
            <span className={"font-bold text-lg select-none px-1"} key={key}>
              {language.localCode}
            </span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
