"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { ReactElement } from "react";

interface IPartnerDTO {
  title: string;
  image: string;
}

const Partner = ({ title, image }: IPartnerDTO): ReactElement => {
  return (
    <div
      className={
        "flex select-none gap-2 md:gap-4 items-center justify-center mx-4 py-14"
      }
    >
      <Image
        src={image}
        alt={title}
        width={50}
        height={50}
        unoptimized={true}
      />
      <span className="font-medium text-md text-zinc-800">{title}</span>
    </div>
  );
};

export const Partners = ({
  partners,
}: {
  partners: IPartnerDTO[];
}): ReactElement => {
  return (
    <Marquee autoFill={true} speed={40}>
      {partners.map((item, index) => (
        <Partner title={item.title} image={item.image} key={index} />
      ))}
    </Marquee>
  );
};
