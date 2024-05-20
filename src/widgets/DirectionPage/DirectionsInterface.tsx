export interface IDirectionDTO {
    buttonText: string;
    directions: IDirection[];
}

export interface IDirection {
    title: string;
    subjects: string[];
    text: string;
    forms: string[];
    code: string;
    image: string;
    budget_places: number,
    paid_places: number,
    passing_score: number,
    tuition_fees: string,
    about: string,
    list_about: string[],
    list_career: string[],
    feedback: IDirectionFeedback,
    reasons: string[],
    title_padesh: string
}

export interface IDirectionFeedback {
    name: string,
    text: string
}
