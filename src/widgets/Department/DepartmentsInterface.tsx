export interface IDepartmentsDTO {
    slug: string;
    title: string;
    about: string;
    educational_activities: string;
    scientific_activities: string;
    advantages: string[];
    task: IDepartmentTask;
    image: ImageDepartmentDto[];
    head_departments: IDepartmentHead;
    teachers: IDepartmentTeachers[];
}

export interface ImageDepartmentDto {
    image: string;
}

export interface IDepartmentTask {
    name: string;
    description: string;
}

export interface IDepartmentTeachers {
    fio: string;
    post: string;
    image: string;
    link: string;
}

export interface IDepartmentHead {
    fio: string;
    post: string;
    email: string;
    phone_number: string;
    seniority: number;
    link: string;
    image: string;
    cabinet: string;
}