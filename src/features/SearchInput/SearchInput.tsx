"use client";
import {
  CircularProgress,
  Input,
  LinkIcon,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { SearchIcon } from "@nextui-org/shared-icons";
import { ReactElement, useEffect, useRef, useState } from "react";
import { Kbd } from "@nextui-org/kbd";

export interface ISearchResult {
  title: string;
  href: string;
}

export const SearchInput = (): ReactElement => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchValue, setSearchValue] = useState<string>();
  const searchInputRef = useRef<HTMLElement>(null);
  const [searchResult, setSearchResult] = useState<ISearchResult[] | undefined>(
    undefined,
  );
  const focus = (): void => {
    if (!searchInputRef.current) return;
    searchInputRef.current.click();
  };

  useEffect(() => {
    const result = new Array<ISearchResult>();
    if (!searchValue) return setSearchResult(result);

    setTimeout(function () {
      result.push({
        title: "Очень очень очень очень очень длинный результат поиска",
        href: "https://google.com",
      });
      result.push({
        title: "Результат поиска 2",
        href: "https://google.com",
      });
      result.push({
        title: "Результат поиска 3",
        href: "https://google.com",
      });

      return setSearchResult(result);
    }, 1000);
  }, [searchValue]);

  return (
    <>
      <div onClick={onOpen} className={"cursor-pointer px-2"}>
        <SearchIcon className={"text-2xl pointer-events-none flex-shrink-0"} />
      </div>
      <Modal
        isOpen={isOpen}
        size={"2xl"}
        placement={"center"}
        onOpenChange={() => {
          focus();
          onOpenChange();
        }}
        onClose={() => {
          setSearchValue(undefined);
          onOpenChange();
        }}
        backdrop={"blur"}
        className={"mx-4"}
        classNames={{
          header: "block p-0 shadow-inner",
          body: "p-2 pb-3 duration-500 items-center",
          closeButton: "hidden",
        }}
      >
        <ModalContent>
          <ModalHeader>
            <Input
              autoFocus={true}
              classNames={{
                inputWrapper:
                  "group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0 shadow-[0_0_15px_5px_rgba(100,100,100,0.3)]",
              }}
              value={searchValue}
              onInput={(e) => {
                setSearchResult(undefined);
                setSearchValue(e.currentTarget.value);
              }}
              placeholder={"Поиск"}
              type="text"
              startContent={
                <SearchIcon
                  className={
                    "text-2xl text-default-400 pointer-events-none flex-shrink-0"
                  }
                />
              }
              endContent={<Kbd>ESC</Kbd>}
            />
          </ModalHeader>
          {searchValue && (
            <ModalBody>
              {searchResult === undefined ? (
                <CircularProgress aria-label="Loading..." />
              ) : (
                <Listbox
                  variant={"flat"}
                  aria-label={"Результаты поиска"}
                  color={"primary"}
                  emptyContent={"Результаты не найдены!"}
                  className={searchValue ? "block" : "hidden"}
                  classNames={{
                    list: "gap-2",
                  }}
                >
                  {searchResult.map((item, index) => (
                    <ListboxItem
                      classNames={{
                        base: "bg-default/20 shadow-md",
                      }}
                      href={item.href}
                      key={index}
                      className={"py-3"}
                      endContent={<LinkIcon />}
                    >
                      <div
                        className={
                          "text-ellipsis whitespace-nowrap overflow-hidden"
                        }
                      >
                        {item.title}
                      </div>
                    </ListboxItem>
                  ))}
                </Listbox>
              )}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
