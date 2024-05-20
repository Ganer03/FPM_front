import {
    Abiturient,
    Footer,
    Header,
} from "@/widgets";
import { CONSTANTS } from "@/app/constants";
import { ReactElement } from "react";

export const AbiturientPage = (): ReactElement => {
    return (
        <>
            <Header />
            <Abiturient abiturient={CONSTANTS.abiturient}/>
            <Footer />
        </>
    );
};