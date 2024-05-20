import { ReactElement } from "react";
import {ContainerLayout, HeadingTextLayout} from "@/entities";
import {IDirection} from "../DirectionsInterface";
import {DirectionsText} from "@/widgets";
import {Chip} from "@nextui-org/react";

export const DirectionsCard = ({ directions }: {directions: IDirection}): ReactElement => {
    return (
        <>
            <ContainerLayout>
                <HeadingTextLayout text={directions.title}>
                    <div className={"flex flex-col-reverse lg:flex-row "}>
                        <div className={"lg:w-2/3 2xl:w-3/4 w-full lg:mr-8"}>
                            <div className={"w-full h-auto mt-10"}>
                                <DirectionsText directions={directions}/>
                            </div>
                        </div>
                        <div className={"w-full lg:w-1/3 2xl:w-2/5 bg-white shadow-medium rounded-xl md:rounded-md p-5 md:p-8 lg:p-10 h-fit"}>
                            <div className={"mb-5 text-xl md:text-xl lg:text-2xl xl:text-3xl text-zinc-800 flex items-center font-semibold"}>
                                    О направлении
                            </div>
                            <div className={"grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1"}>
                                <div>
                                    <div className={"text-zinc-600 text-sm lg:text-medium font-medium mb-2"}>
                                        Код направления
                                    </div>
                                    <div className={"text-md lg:text-xl font-semibold"}>
                                        {directions.code}
                                    </div>
                                </div>
                                <div>
                                    <div className={"text-zinc-600 text-sm lg:text-medium font-medium mb-2"}>
                                        Форма обучения
                                    </div>
                                    <div className={"text-md lg:text-xl font-semibold"}>
                                        {directions.forms[0]}
                                    </div>
                                </div>
                                <div>
                                    <div className={"text-zinc-600 text-sm lg:text-medium font-medium mb-2"}>
                                        Вступительные экзамены
                                    </div>
                                    <div className={"text-md lg:text-xl font-semibold"}>
                                        {directions.subjects.map((item, key) => {
                                            return (
                                                <div key={key}>
                                                    {item}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <div className={"text-zinc-600 text-sm lg:text-medium font-medium mb-2"}>
                                        Бюджетных мест
                                    </div>
                                    <div className={"text-md lg:text-xl font-semibold"}>
                                        {directions.budget_places}
                                    </div>
                                </div>
                                <div>
                                    <div className={"text-zinc-600 text-sm lg:text-medium font-medium mb-2"}>
                                        Мест с оплатой обучения
                                    </div>
                                    <div className={"text-md lg:text-xl font-semibold"}>
                                        {directions.paid_places}
                                    </div>
                                </div>
                                <div>
                                    <div className={"text-zinc-600 text-sm lg:text-medium font-medium mb-2"}>
                                        Проходной балл в 2023 году
                                    </div>
                                    <div className={"text-md lg:text-xl font-semibold"}>
                                        {directions.passing_score}
                                    </div>
                                </div>
                                <div>
                                    <div className={"text-zinc-600 text-sm lg:text-medium font-medium mb-2"}>
                                        Стоимость обучения
                                    </div>
                                    <div className={"text-md lg:text-xl font-semibold"}>
                                        {directions.tuition_fees} руб. за год (2024)
                                    </div>
                                </div>
                                <div>
                                    <Chip variant="bordered" size="lg" className={"text-black  border-[#5C83E7] hover:border-black cursor"}>
                                        Предметы курса
                                    </Chip>
                                </div>
                            </div>
                        </div>
                    </div>
                </HeadingTextLayout>
            </ContainerLayout>
        </>
    );
};