"use client"
import React, {ReactElement, useEffect, useState} from "react";
import {NewsSearchInput} from "../NewsSearchInput/NewsSearchInput";
import {FilteredNewsList} from "@/widgets/NewsPage/NewsList/FilteredNewsList";
import {useSearchParams} from "next/navigation";
import {INewDTO} from "../INewDTOInterface";
import {ContainerLayout} from "@/entities";

export const NewsListPage = ({ news }: {news: INewDTO[]}): ReactElement => {
    const [activeButtons, setActiveButtons] = useState<string[]>([]);
    const searchParams = useSearchParams();
    useEffect(() => {
        if (searchParams && searchParams.get('params')) {
            const paramsValue = searchParams.get('params');
            if (paramsValue) {
                const decodedParams = decodeURIComponent(paramsValue);
                const selectedButtons = decodedParams.split(':::');
                setActiveButtons(selectedButtons);
            }
        }
    }, [searchParams]);

    const handleFilterChange = (selectedButtons: string[]) => {
        setActiveButtons(selectedButtons);
    };

    const filteredNews = news.filter((item) =>
        activeButtons.length === 0 ? true : activeButtons.includes(item.type)
    );

    return (
        <>
            <ContainerLayout>
                <NewsSearchInput onFilter={activeButtons} onFilterChange={handleFilterChange}/>
                <FilteredNewsList news={filteredNews} />
            </ContainerLayout>
        </>
    );
};