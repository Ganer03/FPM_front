"use client"
import {ReactElement} from "react";
import {INewDTO} from "../INewDTOInterface";
import {ContainerLayout} from "@/entities";
import {NewsListElements} from "@/widgets/NewsPage/NewsListElements/NewsListElements";
import {NewsListFirst} from "../NewsListFirst/NewsListFirst";
import css from "@/widgets/Department/AboutDepartments/aboutdepartments.module.css";

interface FilteredNewsListProps {
    news: INewDTO[];
    activeButtons: string[];
}

export const FilteredNewsList= ({news}: {news: INewDTO[]}): ReactElement => {
    if (news.length === 0) {
        return <div>No news found.</div>;
    }

    return (
        <>
                <NewsListFirst news={news[0]} key={0}/>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {news.map((item, index) => (
                        <div className={`${index === 0 ? 'block lg:hidden' : ''}`} >
                            <NewsListElements news={item} key={index}/>
                        </div>
                    ))}
                </div>
        </>
    );
};