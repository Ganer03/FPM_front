import {
    NewsListPage,
    Footer,
    Header, NewsItem
} from "@/widgets";
import { CONSTANTS } from "@/app/constants";
import { ReactElement } from "react";
import {ContainerLayout} from "@/entities";

export const NewsItemPage = ( {id}: {id : number} ): ReactElement => {
    if (CONSTANTS.news.length < id){
        return (
            <>
                <Header />
                <ContainerLayout>
                    Нет такой новости
                </ContainerLayout>
                <Footer/>
            </>
        )
    }
    return (
        <>
            <Header />
            <NewsItem news={CONSTANTS.news[id]}/>
            <Footer/>
        </>
    );
};