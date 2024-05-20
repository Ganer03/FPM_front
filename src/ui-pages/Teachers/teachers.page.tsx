import {
    Footer,
    Header, TeacherCard, TeacherPublications, TeacherSubjects,
} from "@/widgets";
import { CONSTANTS } from "@/app/constants";
import {ReactElement} from "react";
import {notFound} from "next/navigation";

export const TeachersPage = ({ params }: { params: { slug: string } }): ReactElement => {
    const teacher = CONSTANTS.teachers.kit.teachers.map((item, key) => {
                if (item.name_sys == params.slug[1]) {
                    return item;
                }
            }
        ).filter((item) => item != undefined)[0]
    const find = ["kvt", "kit", 'kmm', 'kpm', 'kadii'].map((item, key) => {
            if (item === params.slug[0]) {
                return true;
            }
            return false;
        }
    ).filter((item) => item != false)[0]
    if (find == undefined) {
        return notFound()
    }
    else {
        if (teacher == undefined){
            return notFound()
        }
    }
    return (
        <>
            <Header />
            <TeacherCard teacher={teacher} name={CONSTANTS.teachers.kit.name}/>
            <TeacherSubjects teacher={teacher.subjects_taught}/>
            <TeacherPublications publications={teacher.publications}/>
            <Footer/>
        </>
    );
};