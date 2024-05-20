import {HeadingText} from "@/entities";
import { ReactElement, ReactNode } from "react";

export const HeadingTextLayout = ({children, text,}: {
    children: ReactNode;
    text: string;
}): ReactElement => {
    return (
        <>
            <HeadingText text={text} />
            {children}
        </>
    );
};
