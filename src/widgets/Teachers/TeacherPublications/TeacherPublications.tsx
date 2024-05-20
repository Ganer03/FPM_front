"use client"
import Image from "next/image";
import { ReactElement, useState } from "react";
import {ContainerLayout, SubtitleLayout} from "@/entities";
import { stringifyDate } from "@/utils";

export interface ITeacherPublication {
    date: Date | string | number;
    name: string;
    link: string;
}

export const TeacherPublications = ({publications}: { publications: ITeacherPublication[] }): ReactElement => {
    const [showAllPublications, setShowAllPublications] = useState(false);
    const formattedDate = publications.map((item) => stringifyDate(item.date));

    return (
        <>
            <SubtitleLayout text={"Основные публикации"}>
                <ContainerLayout>
                        <div className={`transition-all delay-200 h-auto overflow-hidden ${showAllPublications ? 'max-h-[1000px] ease-in ' : ' max-h-[200px] ease-out opacity-80'}`}>
                            <div className={"grid grid-cols-1 gap-2 sm:gap-10"}>
                                {publications.map((item, key) => (
                                    <a key={key} href={item.link} className={"flex flex-col-reverse shadow-medium sm:shadow-none sm:flex-row sm:items-start bg-white rounded-xl sm:rounded-none sm:bg-opacity-0 p-4 sm:p-0"}>
                                        <div className={"sm:w-[200px] text-end sm:text-start pt-2 sm:pt-0"}>
                                            {formattedDate[key]}
                                        </div>
                                        <div className={"text-md lg:text-xl font-normal w-full"}>
                                            {item.name}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <button onClick={() => setShowAllPublications(!showAllPublications)} className="flex mt-4 text-md lg:text-xl font-medium items-center">
                            {showAllPublications ? 'Скрыть' : 'Показать еще'}
                            <svg className={`ml-2 w-6 h-6 transition-all delay-200 ${showAllPublications ? 'rotate-45 ' : ' rotate-0'}`} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#5C83E7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set-Filled" transform="translate(-466.000000, -1089.000000)" fill="#5C83E7"> <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z" id="plus-circle"> </path> </g> </g> </g></svg>
                        </button>
                </ContainerLayout>
            </SubtitleLayout>
        </>
    );
};
