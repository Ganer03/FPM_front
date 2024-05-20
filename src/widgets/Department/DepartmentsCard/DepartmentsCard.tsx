import Image from "next/image";
import { ReactElement } from "react";
import {ContainerLayout, HeadingTextLayout} from "@/entities";
import {IDepartmentHead} from "@/widgets/Department/DepartmentsInterface";

export const DepartmentsCard = ({ departments }: {departments: IDepartmentHead}): ReactElement => {
    return (
        <>
                <ContainerLayout>
                    <HeadingTextLayout text={"Кафедра информационных технологий"}>
                    <div className={"flex flex-col-reverse md:flex-row"}>
                        <div className={"lg:w-2/3 2xl:w-3/4 md:w-3/5 bg-white md:mr-4 lg:mr-8 shadow-medium rounded-b-xl md:rounded-md p-5 md:p-8 lg:p-10 xl:p-16"}>
                            <a href={departments.link} className={"mb-2 text-xl md:text-xl lg:text-2xl xl:text-3xl text-zinc-800 flex items-center hover:text-[#5C83E7]"}>
                                <div className={"pr-2"}>
                                    {departments.fio}
                                </div>
                                <svg className={"h-[1.2rem]"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5c83e7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" stroke="#5c83e7" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#5c83e7" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                            </a>
                            <div className={"mb-6 lg:mb-8 text-sm lg:text-medium text-zinc-800 font-light"}>
                                {departments.post}
                            </div>
                            <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-5 lg:gap-y-8"}>
                                <div className={"flex items-center text-md break-all lg:text-xl text-zinc-800"}>
                                    <svg className={"h-[1.5rem] lg:h-[2rem] pr-2"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10" stroke="#5c83e7" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#5c83e7" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111" stroke="#5c83e7" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    {departments.phone_number}
                                </div>
                                <div className={"flex items-center text-md break-all lg:text-xl text-zinc-800 md:justify-end lg:justify-normal"}>
                                    <svg className={"h-[1.5rem] lg:h-[2rem] pr-2"} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="M20.5,1.5H3.5A.5.5,0,0,0,3,2V21.5H2.5a.5.5,0,0,0,0,1h19a.5.5,0,0,0,0-1H21V2A.5.5,0,0,0,20.5,1.5ZM6,21.5V4.5H18v17Zm13,0V4a.5.5,0,0,0-.5-.5H5.5A.5.5,0,0,0,5,4V21.5H4V2.5H20v19Z" fill="rgb(92, 131, 231)"></path><path d="M10,7.5a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,1,0V8A.5.5,0,0,0,10,7.5Z" fill="rgb(92, 131, 231)" ></path><path d="M13,7.5A1.5,1.5,0,0,0,11.5,9v1a1.5,1.5,0,0,0,3,0V9A1.5,1.5,0,0,0,13,7.5Zm.5,2.5a.5.5,0,0,1-1,0V9a.5.5,0,0,1,1,0Z" fill="rgb(92, 131, 231)" ></path><path d="M16.5,14.5h-1a.5.5,0,0,0,0,1h1a.5.5,0,0,0,0-1Z" fill="#000000"></path></svg>
                                    Аудитория: {departments.cabinet}
                                </div>
                                <div className={"flex items-center text-md break-all lg:text-xl text-zinc-800"}>
                                    <svg className={"h-[1.5rem] lg:h-[2rem] pr-2"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#5c83e7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#5c83e7" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
                                    {departments.email}
                                </div>
                            </div>
                        </div>
                        <div className={"w-full md:w-2/5 lg:w-1/3 2xl:w-1/4"}>
                            <Image
                                className={"w-full md:w-max[28rem] max-h-[700px] h-full md:max-h-[500px] object-cover rounded-t-xl md:rounded-md shadow-medium"}
                                unoptimized={true}
                                src={departments.image}
                                alt={departments.fio}
                                height={150}
                                width={250}
                            />
                        </div>
                    </div>
                    </HeadingTextLayout>
                </ContainerLayout>
        </>
    );
};