"use client"
import Image from "next/image";
import { ReactElement, useState } from "react";
import { ContainerLayout } from "@/entities";
import { stringifyDate } from "@/utils";

export interface ITeacherDTO {
    fio: string;
    name_sys: string;
    post: string;
    link: string;
    image: string;
    subjects_taught: string[];
    publications: ITeacherPublication[];
    work_experience: number;
    departments_work: string;
}

export interface ITeacherPublication {
    date: Date | string | number;
    name: string;
    link: string;
}

export const TeacherCard = ({ teacher, name }: { teacher: ITeacherDTO, name: string }): ReactElement => {
    const [showAllSubjects, setShowAllSubjects] = useState(false);
    const [showAllPublications, setShowAllPublications] = useState(false);
    const formattedDate = teacher.publications.map((item) => stringifyDate(item.date));

    return (
        <>
            <ContainerLayout>
                <div className={"flex flex-col-reverse md:flex-row"}>
                    <div className={"lg:w-2/3 2xl:w-3/4 md:w-3/5 bg-white md:mr-4 lg:mr-8 shadow-medium rounded-b-xl md:rounded-md p-5 md:p-8 lg:p-10 xl:p-16"}>
                        <div className={"mb-2 text-xl md:text-xl lg:text-2xl xl:text-3xl text-zinc-800 flex items-center"}>
                            <div className={"pr-2"}>
                                {teacher.fio}
                            </div>
                        </div>
                        <div className={"mb-6 lg:mb-8 text-sm lg:text-medium text-zinc-800 font-light"}>
                            {teacher.post}
                        </div>
                        <div className={"grid grid-cols-1 gap-y-5 lg:gap-y-8"}>
                            <div className={"flex text-md lg:text-xl text-zinc-800 text-wrap"}>
                                <svg className={"h-[1.5rem] lg:h-[2rem] pr-2"} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.5,1.5H3.5A.5.5,0,0,0,3,2V21.5H2.5a.5.5,0,0,0,0,1h19a.5.5,0,0,0,0-1H21V2A.5.5,0,0,0,20.5,1.5ZM6,21.5V4.5H18v17Zm13,0V4a.5.5,0,0,0-.5-.5H5.5A.5.5,0,0,0,5,4V21.5H4V2.5H20v19Z" fill="rgb(92, 131, 231)"></path><path d="M10,7.5a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,1,0V8A.5.5,0,0,0,10,7.5Z" fill="rgb(92, 131, 231)" ></path><path d="M13,7.5A1.5,1.5,0,0,0,11.5,9v1a1.5,1.5,0,0,0,3,0V9A1.5,1.5,0,0,0,13,7.5Zm.5,2.5a.5.5,0,0,1-1,0V9a.5.5,0,0,1,1,0Z" fill="rgb(92, 131, 231)" ></path><path d="M16.5,14.5h-1a.5.5,0,0,0,0,1h1a.5.5,0,0,0,0-1Z" fill="#000000"></path></svg>
                                {name}
                            </div>
                            <div className={"flex text-md lg:text-xl text-zinc-800 text-wrap"}>
                                <svg className={"h-[1.5rem] lg:h-[2rem] pr-2"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z" stroke="#5C83E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13" stroke="#5C83E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.4 15V9" stroke="#5C83E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                Направления подготовки: {teacher.departments_work}
                            </div>
                            <div className={"flex text-md lg:text-xl text-zinc-800 lg:justify-normal text-wrap"}>
                                <svg className={"h-[1.5rem] lg:h-[2rem] pr-2"} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#5C83E7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g> <path className="st0"d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308 c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"></path><path className="st0" d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659 c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"></path><path className="st0" d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695 h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35 c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899 c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"></path> </g> </g></svg>
                                Стаж: {teacher.work_experience} лет
                            </div>
                        </div>
                    </div>
                    <div className={"w-full md:w-2/5 lg:w-1/3 2xl:w-1/4"}>
                        <Image
                            className={"w-full md:w-max[28rem] max-h-[700px] h-full md:max-h-[500px] object-cover rounded-t-xl md:rounded-md shadow-medium"}
                            unoptimized={true}
                            src={teacher.image}
                            alt={teacher.fio}
                            height={150}
                            width={250}
                        />
                    </div>
                </div>
            </ContainerLayout>
        </>
    );
};
