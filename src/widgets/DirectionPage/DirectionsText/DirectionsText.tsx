import { ReactElement } from "react";
import {IDirection} from "../DirectionsInterface";

export const DirectionsText = ({ directions }: {directions: IDirection}): ReactElement => {
    return (
        <>
            <div className={"text-md lg:text-xl font-normal mb-10 lg:mb-16"}>
                {directions.about}
            </div>
            <div className={"mb-10 lg:mb-16"}>
                <div className={"text-2xl lg:text-4xl font-normal mb-5"}>
                    ПОСТУПАЯ НА ФКТиПМ, ТЫ
                </div>
                <div className={"flex flex-col gap-3"}>
                    {directions.list_about.map((item, key) => {
                        return (
                            <div key={key} className={"flex flex-row items-center"}>
                                <div className={"block"}>
                                    <div className="bg-[#5C83E7] rounded-3xl h-2 w-2 md:h-4 md:w-4 mr-4"></div>
                                </div>
                                <div className={"text-md lg:text-xl font-normal"}>
                                    {item}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={"mb-10 lg:mb-16"}>
                <div className={"text-2xl lg:text-4xl font-normal mb-5"}>
                    ТВОЯ БУДУЩАЯ КАРЬЕРНАЯ ТРАЕКТОРИЯ
                </div>
                <div className={"flex flex-col gap-3"}>
                    {directions.list_career.map((item, key) => {
                        return (
                            <div key={key} className={"flex flex-row items-center"}>
                                <div className={"block"}>
                                    <div className="bg-[#5C83E7] rounded-3xl h-2 w-2 md:h-4 md:w-4 mr-4"></div>
                                </div>
                                <div className={"text-md lg:text-xl font-normal"}>
                                    {item}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={"mb-10 lg:mb-16"}>
                <div className={"text-2xl lg:text-4xl font-normal mb-5 uppercase"}>
                    5 ПРИЧИН ВЫБРАТЬ {directions.title_padesh}:
                </div>
                <div className={"flex flex-col gap-3"}>
                    {directions.reasons.map((item, key) => {
                        return (
                            <div key={key} className={"flex flex-row items-center"}>
                                <div className={"block"}>
                                    <div className="bg-[#5C83E7] rounded-3xl h-2 w-2 md:h-4 md:w-4 mr-4"></div>
                                </div>
                                <div className={"text-md lg:text-xl font-normal"}>
                                    {item}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={"mb-5"}>
                <div className={"text-2xl lg:text-4xl font-normal mb-5"}>
                    ОТЗЫВ О СПЕЦИАЛЬНОСТИ
                </div>
                <div className={"text-md lg:text-xl font-normal mb-5"}>
                    {directions.feedback.text}
                </div>
                <div className={"text-md lg:text-xl font-normal flex justify-end"}>
                    {directions.feedback.name}
                </div>
            </div>
        </>
    );
};