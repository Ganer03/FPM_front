import React, {ReactElement} from "react";
import Image from "next/image";
import {INewDTO} from "../INewDTOInterface";
import {stringifyDate} from "@/utils";
import {Chip, Link} from "@nextui-org/react";

export const NewsListFirst = ({ news }: {news: INewDTO}): ReactElement => {
    const formattedDate = stringifyDate(news.date);


    return (
        <>
            <Link href={'/news/' + news.key_number} className={"hidden lg:block bg w-full mb-4"}>
                <div className={"flex w-full h-[400px] xl:h-[450px] bg-white rounded-xl"}>
                    <div className={"h-full w-[50%] box-border"}>
                        <Image
                            width={1200}
                            alt={news.title}
                            height={900}
                            unoptimized={true}
                            className={`w-full h-full object-cover rounded-s-xl`}
                            src={news.image}/>
                    </div>
                    <div className={"p-14 flex flex-col gap-y-4 relative w-[50%]"}>
                        <Chip
                            size="md"
                        >
                            {news.type}
                        </Chip>
                        <h2 className="text-xl md:text-xl lg:text-2xl text-zinc-800 hover:text-[#5C83E7] line-clamp-2">{news.title}</h2>
                        <p className="text-sm lg:text-medium text-zinc-800 font-light whitespace-pre-line lg:line-clamp-5">{news.description}</p>
                        <div className={"bottom-8 flex gap-x-6 absolute text-black"}>
                            <div> {formattedDate}</div>
                            <div className={"flex gap-x-1 items-center"}>
                                <svg viewBox="0 0 24 24" className={"h-6 w-6"} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3.5" stroke="#222222"></circle> <path d="M21 12C21 12 20 4 12 4C4 4 3 12 3 12" stroke="#222222"></path> </g></svg>
                                {news.views}
                            </div>
                        </div>
                            <div>
                                <div
                                    className={`absolute duration-500 bottom-7 right-12 bg-[#5C83E7] z-10 hover:bg-[#4d72e5] hover:scale-110 h-12 w-12 rounded-[50%] flex justify-center items-center`}
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.447 2.04983C17.447 1.33937 16.8711 0.763436 16.1606 0.763437L4.58312 0.763437C3.87267 0.763437 3.29673 1.33937 3.29673 2.04983C3.29673 2.76028 3.87267 3.33622 4.58312 3.33622L14.8742 3.33622L14.8742 13.6273C14.8742 14.3378 15.4502 14.9137 16.1606 14.9137C16.8711 14.9137 17.447 14.3378 17.447 13.6273L17.447 2.04983ZM2.49116 17.5385L17.0702 2.95944L15.251 1.14021L0.671928 15.7193L2.49116 17.5385Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>
                    </div>
                </div>
            </Link>
        </>
    );
};