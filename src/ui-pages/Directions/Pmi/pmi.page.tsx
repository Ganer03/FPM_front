import {
    DirectionsCard,
    Footer,
    Header,
} from "@/widgets";
import { CONSTANTS } from "@/app/constants";
import { ReactElement } from "react";

export const DirectionsPmiPage = (): ReactElement => {
    return (
        <>
            <Header />
            <DirectionsCard directions={CONSTANTS.directions[0].directions[0]}/>
            <Footer />
        </>
    );
};