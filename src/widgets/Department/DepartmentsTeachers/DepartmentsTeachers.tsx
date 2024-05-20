import React, {ReactElement} from "react";
import {ContainerLayout, SubtitleLayout} from "@/entities";
import {DepartmentsTeachersCard} from "@/widgets";
import {Link} from "@nextui-org/react";
import {IDepartmentsDTO} from "@/widgets/Department/DepartmentsInterface";

export const DepartmentsTeachers = ({ departments }: {departments: IDepartmentsDTO}): ReactElement => {
    return (
        <>
            <SubtitleLayout text={"Сотрудники"}>
                <ContainerLayout>
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start"}>
                        {departments.teachers.map((item, index) => (
                            <DepartmentsTeachersCard teachers={item} key={index} />
                        ))}
                    </div>
                    <Link href={"teachers/" + departments.slug} className={"flex mt-4 justify-center"}>
                        <div className={" mr-4 text-xl lg:text-xl xl:text-2xl text-zinc-800 flex items-center hover:text-[#5C83E7]"}>
                            Все сотрудники кафедры
                        </div>
                        <div
                            className={`duration-500 bg-[#5C83E7] hover:bg-[#4d72e5] hover:scale-110 h-10 w-10 rounded-[50%] flex justify-center items-center`}
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
                    </Link>
                </ContainerLayout>
            </SubtitleLayout>
        </>
    );
};