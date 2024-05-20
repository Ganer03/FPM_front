"use client";
import {
  MouseEventHandler,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import $ from "jquery";
import css from "./slider.module.scss";
import cn from "classnames";
import { ChevronIcon, ChevronRightIcon } from "@nextui-org/shared-icons";

const Dot = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: MouseEventHandler;
}): ReactElement => {
  return (
    <span
      onClick={onClick}
      className={cn(
        "h-1 w-full rounded-3xl block duration-500 cursor-pointer",
        active ? "bg-[#5C83E7]" : "bg-zinc-300",
      )}
    ></span>
  );
};

const SliderButton = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick: MouseEventHandler;
  className?: string;
}): ReactElement => {
  return (
    <button
      onClick={onClick}
      className={
        "duration-500 font-semibold rounded-md ease-in-out py-3 px-7 hover:text-white hover:bg-[#5C83E7] text-zinc-800 drop-shadow-md bg-white " +
        className
      }
    >
      {children}
    </button>
  );
};

export const Slider = ({
  children,
}: {
  children: ReactNode[];
}): ReactElement => {
  const length = children.length;
  const slider = useRef(null);
  const [numOfElements, setNumOfElements] = useState(Math.min(3, length));
  const [currentSlide, setSlide] = useState(0);

  function nextSlide(step = 1): void {
    setSlide((prevState) => Math.min(prevState + step, length - numOfElements));
  }

  function prevSlide(step = 1): void {
    setSlide((prevState) => Math.max(prevState - step, 0));
  }

  function selectSlide(index: number): void {
    const target = Math.max(
      Math.min(index - (numOfElements - 1) / 2, length - numOfElements),
      0,
    );
    setSlide(target);
  }

  useEffect(() => {
    if (!slider.current) return;
    const sliderWidth = $(slider.current).outerWidth(true) as number;
    const outerWidth = $(slider.current)
      .children(".slide")
      .outerWidth(true) as number;
    setNumOfElements(Math.floor(sliderWidth / outerWidth));
    const width = currentSlide * -outerWidth;
    $(slider.current).css("transform", `translate(${width}px, 0)`);
  }, [currentSlide]);

  return (
    <div className={"container mx-auto h-full"}>
      <div className={cn("relative my-4", css.sliderBox)}>
        <div className={"overflow-hidden"}>
          <div
            ref={slider}
            className={"slider flex flex-nowrap duration-500 ease-in-out"}
          >
            {children.map((child, index) => (
              <div className={"slide mx-2 delay-700"} key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={
          "grid grid-cols-5 lg:grid-cols-10 xl:grid-cols-12 items-center justify-center gap-2 px-4"
        }
      >
        <div
          className={
            "order-2 lg:order-1 flex flex-row gap-2 col-span-3 lg:col-span-8 xl:col-span-10"
          }
        >
          {children.map((_, index) => (
            <Dot
              onClick={() => {
                selectSlide(index);
              }}
              active={
                currentSlide <= index && index < currentSlide + numOfElements
              }
              key={index}
            />
          ))}
        </div>
        <SliderButton
          className={"order-1 lg:order-2"}
          key={"0"}
          onClick={() => prevSlide(numOfElements)}
        >
          <ChevronIcon width={""} />
        </SliderButton>
        <SliderButton
          className={"order-3 lg:order-3"}
          key={"1"}
          onClick={() => nextSlide(numOfElements)}
        >
          <ChevronRightIcon width={""} />
        </SliderButton>
      </div>
    </div>
  );
};
