"use client";
import { useRef, useState, ReactNode, MouseEvent, ReactElement } from "react";
import { CloseIcon, MenuIcon } from "@/shared/icons";
import cn from "classnames";

export const Menu = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): ReactElement => {
  const [isOpen, setOpen] = useState(false);
  const menuOuterRef = useRef(null);
  const handleClose = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ): void => {
    if (event.target === menuOuterRef.current) setOpen(false);
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>
        <MenuIcon width={50} />
      </div>
      <div
        ref={menuOuterRef}
        id={"close-btn"}
        className={cn(
          "w-full h-full fixed z-40 top-0 duration-400 ease-out right-full",
          isOpen && "translate-x-full",
        )}
        onClick={handleClose}
      >
        <div className={`z-50 h-full relative float-right ${className}`}>
          <div
            onClick={() => setOpen(false)}
            className={"absolute top-2 right-1 opacity-80"}
          >
            <CloseIcon width={80} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
