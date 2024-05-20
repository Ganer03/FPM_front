import Image from "next/image";
import { stringifyDate } from "@/utils";
import { ReactElement } from "react";

export interface INewDTO {
  title: string;
  type: string;
  text: string;
  description: string;
  image: string;
  views: number;
  date: Date | string | number;
  key_number: number;
}

export const NewCard = (card: INewDTO): ReactElement => {
  const formattedDate = stringifyDate(card.date);

  return (
    <div
      className={`relative flex flex-col justify-between bg-white dark:bg-zinc-100  dark:text-zinc-800 w-[300px] h-full p-6 rounded-xl drop-shadow-md duration-700`}
      key={card.title}
    >
      <div className="newCard mb-12">
        <div className={"w-full h-[150px] flex justify-center items-center"}>
          <Image
            src={card.image}
            alt={card.title}
            height={150}
            width={300}
            unoptimized={true}
            className={`rounded-xl drop-shadow-md max-h-[150px]`}
          />
        </div>
        <br />
        <div className="line-clamp-4">
          <b>{card.title}</b>
        </div>
      </div>
      <div className="bottom-4 text-zinc-800 absolute newCard">
        {formattedDate}
      </div>
      <a
        href="#"
        className={`absolute duration-500 bottom-4 right-4 bg-[#5C83E7] z-10 hover:bg-[#4d72e5] hover:scale-110 h-12 w-12 rounded-[50%] flex justify-center items-center`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.447 2.04983C17.447 1.33937 16.8711 0.763436 16.1606 0.763437L4.58312 0.763437C3.87267 0.763437 3.29673 1.33937 3.29673 2.04983C3.29673 2.76028 3.87267 3.33622 4.58312 3.33622L14.8742 3.33622L14.8742 13.6273C14.8742 14.3378 15.4502 14.9137 16.1606 14.9137C16.8711 14.9137 17.447 14.3378 17.447 13.6273L17.447 2.04983ZM2.49116 17.5385L17.0702 2.95944L15.251 1.14021L0.671928 15.7193L2.49116 17.5385Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
};
