import {ReactElement} from "react";
import {Avatar, Link} from "@nextui-org/react";
import {AvatarIcon} from "@nextui-org/react";
import {IDepartmentTeachers} from "@/widgets/Department/DepartmentsInterface";

export const DepartmentsTeachersCard = ({ teachers }: {teachers: IDepartmentTeachers}): ReactElement => {
    return (
        <>
            <Link href={teachers.link} className={"hover:color-[#5C83E7] flex gap-x-3 items-start"}>
                    <Avatar
                        showFallback
                        isBordered
                        radius="full"
                        color="primary"
                        className="w-16 h-16 md:w-24 md:h-24 text-large flex-shrink-0"
                        src={teachers.image}
                        fallback={
                            <AvatarIcon/>
                        }
                    />
                    <div>
                        <div className={"mb-2 text-xl lg:text-xl xl:text-2xl text-zinc-800 flex hover:text-[#5C83E7]"}>
                            {teachers.fio}
                        </div>
                        <div className={"lg:mb-8 text-sm lg:text-medium text-zinc-800 font-light"}>
                            {teachers.post}
                        </div>
                    </div>
            </Link>
        </>
    );
};