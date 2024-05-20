import { ReactElement } from "react";

export const HeadingText = ({ text }: { text: string }): ReactElement => {
    return (
        <div className="container mx-auto flex items-center text-left justify-start mb-8 md:mb-12">
            <h2 className="font-bold text-2xl md:text-3xl ml-0 md:ml-0 lg:text-5xl">{text}</h2>
        </div>
    );
};
