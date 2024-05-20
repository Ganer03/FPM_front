import { ReactElement } from "react";
import {NewsItemPage} from "@/ui-pages";

export default async function NewsItem({ params }: { params: { id: number } }): Promise<ReactElement> {
    return <NewsItemPage id={params.id} />;
}
