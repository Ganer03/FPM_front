import {
    NewsListPage,
    Footer,
    Header
} from "@/widgets";
import { CONSTANTS } from "@/app/constants";
import { ReactElement } from "react";

export const NewsPage = (): ReactElement => {
    return (
        <>
            <Header />
            <NewsListPage news={CONSTANTS.news}/>
            <Footer/>
        </>
    );
};