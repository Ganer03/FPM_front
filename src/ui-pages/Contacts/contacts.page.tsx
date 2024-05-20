import {
    Contacts,
    Footer,
    Header,
} from "@/widgets";
import { CONSTANTS } from "@/app/constants";
import { ReactElement } from "react";

export const ContactsPage = (): ReactElement => {
    return (
        <>
            <Header />
            <Contacts contacts={CONSTANTS.contacts}/>
            <Footer />
        </>
    );
};