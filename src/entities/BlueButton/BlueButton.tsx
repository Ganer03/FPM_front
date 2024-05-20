"use client";
import { MouseEventHandler, ReactElement } from "react";
import Link from "next/link";
import cn from "classnames";

interface IProps {
  href?: string;
  text: string;
  className?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
}

export const BlueButton = ({
  href,
  text,
  className,
  onClick,
  disabled,
}: IProps): ReactElement => {
  return href ? (
    <Link href={href}>
      <span
        className={cn(
          "bg-[#5C83E7] select-none z-10 hover:bg-[#4d72e5] text-white duration-500 rounded-2xl drop-shadow-md font-semibold",
          className,
        )}
      >
        {text}
      </span>
    </Link>
  ) : (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer text-center select-none z-10 relative text-white duration-500 rounded-2xl drop-shadow-md font-semibold
             ${className} ${disabled ? "bg-zinc-400" : "bg-[#5C83E7] hover:bg-[#4d72e5]"} `}
    >
      {text}
    </button>
  );
};
