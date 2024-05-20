"use client"
import {ReactElement, useEffect, useState} from "react";
import {ContainerLayout, SubtitleLayout} from "@/entities";
import React from "react";
import {Button} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import css from "./aboutdepartments.module.css";
import {IDepartmentsDTO} from "@/widgets/Department/DepartmentsInterface";

export const AboutDepartments = ({ about_departments }: {about_departments: IDepartmentsDTO}): ReactElement => {
    const [aboutText, setAboutText] = useState(about_departments.about);
    const [activeButton, setActiveButton] = useState(1);
    const [animateText, setAnimateText] = useState(false);

    const handleAboutChange = (newText : string, buttonId: number) => {
        if (buttonId != activeButton) {
            setAnimateText(true); // Включаем флаг анимации
            setAboutText(newText);
            setActiveButton(buttonId);

            // Отключаем анимацию через 500ms
            setTimeout(() => {
                setAnimateText(false);
            }, 500);
        }
    };

    useEffect(() => {
        if (animateText) {
            // После завершения анимации (через 500 мс) выключаем флаг анимации
            const animationTimeout = setTimeout(() => {
                setAnimateText(false);
            }, 500);

            return () => clearTimeout(animationTimeout);
        }
    }, [animateText]);

    return (
        <>
            <SubtitleLayout text={"О кафедре"}>
                <ContainerLayout>
                    <div className={"flex lg:flex-row flex-col-reverse"}>
                        <div className={`text-md lg:text-xl font-normal lg:w-3/4 lg:mr-8 ${animateText ? css.textAnimation : ''}`}>
                            {aboutText}
                        </div>
                        <div className={"lg:w-1/4 flex lg:flex-col flex-row flex-wrap gap-y-3 gap-x-3 lg:mb-0 mb-5"}>
                            <Button fullWidth={true}  onClick={() =>handleAboutChange(about_departments.about, 1)} radius={"md"} className={`bg-white md:w-2/5 lg:w-full text-black shadow-lg ${activeButton === 1 ? css.active : ''}`}>
                                О кафедре
                            </Button>
                            <Button fullWidth={true} onClick={() =>handleAboutChange(about_departments.educational_activities, 2)} radius={"md"} className={`bg-white md:w-2/5 lg:w-full text-black shadow-lg ${activeButton === 2 ? css.active : ''}`}>
                                Образовательная деятельность
                            </Button>
                            <Button fullWidth={true} radius={"md"} onClick={() =>handleAboutChange(about_departments.scientific_activities, 3)} className={`bg-white md:w-2/5 lg:w-full text-black shadow-lg ${activeButton === 3 ? css.active : ''}`}>
                                Научная деятельность
                            </Button>
                            <Link href="kit/history" className={"md:w-2/5 lg:w-full w-full"}>
                                <Button fullWidth={true} radius={"md"} className="bg-white text-black shadow-lg">
                                    История кафедры
                                </Button>
                            </Link>
                        </div>
                    </div>
                </ContainerLayout>
            </SubtitleLayout>
        </>
    );
};