import { ReactElement } from "react";
import {ContainerLayout, HeadingTextLayout} from "@/entities";
import Link from "next/link";

export interface IContactsDto {
    phone_number: string[];
    email: string;
    address: string;
    work_schedule: string;
    vk: string;
    tg: string;
    youtube: string;
}

export const Contacts = ({ contacts }: {contacts: IContactsDto}): ReactElement => {
    return (
        <>
                <ContainerLayout>
                    <HeadingTextLayout text={"Контакты"}>
                    <div className={"mb-8 flex flex-col md:flex-row gap-4 sm:gap-20 lg:gap-40 xl:gap-80 text-center sm:text-start"}>
                        <div className={"lg:max-w-[24%] md:min-w-[24%] lg:min-w-fit flex flex-col sm:flex-row md:flex-col sm:gap-32 md:gap-0"}>
                            <div className={"flex flex-col gap-4 mb-4"}>
                                <div className={"text-[#9d9d9d] text-xl duration-700 font-medium"}>
                                    Телефон
                                </div>
                                <div className={"text-medium font-bold whitespace-pre-line"}>
                                    {contacts.phone_number.map((value, index)=> {
                                        return value + "\n"
                                    })}
                                </div>
                            </div>
                            <div className={"flex flex-col gap-4"}>
                                <div className={"text-[#9d9d9d] text-xl duration-700 font-medium"}>
                                    Email:
                                </div>
                                <div className={"text-medium font-bold"}>
                                    {contacts.email}
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-col sm:flex-row gap-5 sm:gap-20 xl:gap-40"}>
                        <div className={"flex gap-4 lg:max-w-[44%] sm:max-w-[35%] flex-col"}>
                            <div className={"text-[#9d9d9d] text-xl duration-700 font-medium"}>
                                Адрес и график работы
                            </div>
                            <div className={"text-medium font-bold"}>
                                {contacts.address}
                            </div>
                            <div className={"text-medium font-bold whitespace-pre-line leading-8"}>
                                {contacts.work_schedule}
                            </div>
                        </div>
                        <div className={"flex flex-col lg:justify-between sm:max-w-[44%] items-center sm:items-start"}>
                            <div className={"flex flex-col gap-4 text-[#9d9d9d] text-xl duration-700 font-medium mb-8 lg:mb-0 items-center sm:items-start"}>
                            Мы в интернете
                                <div className={"flex gap-x-3 items-center md:items-start"}>
                                    <Link
                                        href={contacts.vk}
                                        target={"_blank"}
                                        className={"hover:fill-[#5c83e7]"}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 48 48"><path d="M45.763,35.202c-1.797-3.234-6.426-7.12-8.337-8.811c-0.523-0.463-0.579-1.264-0.103-1.776 c3.647-3.919,6.564-8.422,7.568-11.143C45.334,12.27,44.417,11,43.125,11l-3.753,0c-1.237,0-1.961,0.444-2.306,1.151 c-3.031,6.211-5.631,8.899-7.451,10.47c-1.019,0.88-2.608,0.151-2.608-1.188c0-2.58,0-5.915,0-8.28 c0-1.147-0.938-2.075-2.095-2.075L18.056,11c-0.863,0-1.356,0.977-0.838,1.662l1.132,1.625c0.426,0.563,0.656,1.248,0.656,1.951 L19,23.556c0,1.273-1.543,1.895-2.459,1.003c-3.099-3.018-5.788-9.181-6.756-12.128C9.505,11.578,8.706,11.002,7.8,11l-3.697-0.009 c-1.387,0-2.401,1.315-2.024,2.639c3.378,11.857,10.309,23.137,22.661,24.36c1.217,0.12,2.267-0.86,2.267-2.073l0-3.846 c0-1.103,0.865-2.051,1.977-2.079c0.039-0.001,0.078-0.001,0.117-0.001c3.267,0,6.926,4.755,8.206,6.979 c0.368,0.64,1.056,1.03,1.8,1.03l4.973,0C45.531,38,46.462,36.461,45.763,35.202z"></path></svg>
                                    </Link>
                                    <Link
                                        href={contacts.tg}
                                        target={"_blank"}
                                        className={"hover:fill-[#5c83e7]"}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 48 48"><path d="M5.83,23.616c12.568-5.529,28.832-12.27,31.077-13.203c5.889-2.442,7.696-1.974,6.795,3.434 c-0.647,3.887-2.514,16.756-4.002,24.766c-0.883,4.75-2.864,5.313-5.979,3.258c-1.498-0.989-9.059-5.989-10.7-7.163 c-1.498-1.07-3.564-2.357-0.973-4.892c0.922-0.903,6.966-6.674,11.675-11.166c0.617-0.59-0.158-1.559-0.87-1.086 c-6.347,4.209-15.147,10.051-16.267,10.812c-1.692,1.149-3.317,1.676-6.234,0.838c-2.204-0.633-4.357-1.388-5.195-1.676 C1.93,26.43,2.696,24.995,5.83,23.616z"></path></svg>
                                    </Link>
                                    <Link
                                        href={contacts.youtube}
                                        target={"_blank"}
                                        className={"hover:fill-[#5c83e7]"}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 50 50"><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path></svg>
                                    </Link>
                                </div>
                            </div>
                            <div className={"text-center font-medium border-b-1 border-black hover:text-[#5c83e7] hover:border-[#5c83e7] cursor-pointer w-fit"}>
                                СКАЧАТЬ МЕДИА-КИТ
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={"w-full h-full min-h-[500px]"}
                            style={{ position: "relative", overflow: "hidden" }}
                        >
                            <a
                                href="https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps"
                                style={{
                                    color: "#eee",
                                    fontSize: "12px",
                                    position: "absolute",
                                    top: "0",
                                }}
                            >
                                Краснодар
                            </a>
                            <a
                                href="https://yandex.ru/maps/35/krasnodar/house/stavropolskaya_ulitsa_149/Z0AYdgRhSEMGQFpvfXxweHpgYA==/?ll=39.032787%2C45.019446&utm_medium=mapframe&utm_source=maps&z=16.6"
                                style={{
                                    color: "#eee",
                                    fontSize: "12px",
                                    position: "absolute",
                                    top: "14px",
                                }}
                            >
                                Ставропольская улица, 149 на карте Краснодара — Яндекс Карты
                            </a>
                            <iframe
                                className={"w-full h-full min-h-[500px]"}
                                src="https://yandex.ru/map-widget/v1/?ll=39.032787%2C45.019446&mode=whatshere&whatshere%5Bpoint%5D=39.031161%2C45.019634&whatshere%5Bzoom%5D=17&z=16.6"
                                style={{ position: "relative" }}
                            ></iframe>
                        </div>
                    </div>
            </HeadingTextLayout>
                </ContainerLayout>
        </>
    );
};