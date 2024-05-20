"use client"
import {ReactElement, useEffect, useState} from "react";
import { HeadingTextLayout } from "@/entities";
import { SearchIcon } from "@nextui-org/shared-icons";
import { Kbd } from "@nextui-org/kbd";
import { Chip, Input } from "@nextui-org/react";
import css from "./NewsSearchInput.module.css";

interface INewsSearchInputProps {
    onFilter: string[];
    onFilterChange: (selectedButtons: string[]) => void;
}

export const NewsSearchInput = ({ onFilter, onFilterChange }: INewsSearchInputProps): ReactElement => {
    const [activeButtons, setActiveButtons] = useState(onFilter);
    const [searchValue, setSearchValue] = useState<string>('');
    useEffect(() => {
        setActiveButtons(onFilter);
    }, [onFilter]);

    const handleAboutChange = (name: string) => {
        const isChipSelected = activeButtons.includes(name);
        let updatedButtons: string[];

        if (isChipSelected) {
            updatedButtons = activeButtons.filter((btnName) => btnName !== name);
        } else {
            updatedButtons = [...activeButtons, name];
        }
        setActiveButtons(updatedButtons);
        onFilterChange(updatedButtons);
        updateSearchParams(updatedButtons);
    };

    const updateSearchParams = (selectedButtons: string[]) => {
        const joinedParams = selectedButtons.join(':::');
        const url = new URL(window.location.href);
        url.searchParams.set('params', joinedParams);

        // Update the URL without encoding special characters
        window.history.replaceState(null, '', decodeURIComponent(url.toString()));
    };

    const cheap_map = ['Наука', 'Образование', 'Университет', 'Партнеры', 'Студенчество'];

    return (
            <HeadingTextLayout text={"Новости"}>
                <Input
                    autoFocus={true}
                    classNames={{
                        inputWrapper:
                            "group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0 shadow-medium mb-6",
                    }}
                    value={searchValue}
                    onInput={(e) => {
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
                    endContent={<Kbd>CLEAR</Kbd>}
                />
                <div className={'flex gap-2 mb-8 flex-wrap'}>
                    {cheap_map.map((name, index) => (
                        <Chip
                            size="lg"
                            key={index}
                            onClick={() => handleAboutChange(name)}
                            className={`${activeButtons.includes(name) ? css.active : ''}`}
                        >
                            {name}
                        </Chip>
                    ))}
                </div>
            </HeadingTextLayout>
    );
};