import {
    AboutDepartments,
    DepartmentsCard, DepartmentsTeachers, DepartmentSlider,
    Footer,
    Header,
} from "@/widgets";
import { CONSTANTS } from "@/app/constants";
import { ReactElement } from "react";

export const DepartmentsKitPage = (): ReactElement => {
    return (
        <>
            <Header />
            <DepartmentsCard departments={CONSTANTS.departments[0].head_departments}/>
            <AboutDepartments about_departments={CONSTANTS.departments[0]}/>
            <DepartmentSlider image={CONSTANTS.departments[0].image}/>
            <DepartmentsTeachers departments={CONSTANTS.departments[0]}/>
            <Footer />
        </>
    );
};