"use client";
import { ReactElement, useEffect, useRef } from "react";

interface IProps {
  text: string;
  mainText?: string;
}

export const SnakeText = ({ text, mainText }: IProps): ReactElement => {
  const snake = useRef(null);
  useEffect(() => {
    function animateStartOffset(): void {
      if (!snake.current) return;
      const element = snake.current as HTMLElement;
      const offset =
        element.getBoundingClientRect().y +
        element.getBoundingClientRect().height -
        window.scrollY;
      element.setAttribute("startOffset", offset.toString());
      element.setAttribute("opacity", "1");
    }

    animateStartOffset();
    document.addEventListener("scroll", () => {
      animateStartOffset();
    });
  }, []);
  return (
    <svg
      className={"snake hidden md:block select-none"}
      viewBox="0 60 1920 459"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transition: "startOffset 10s ease-in-out",
        margin: "0!important",
      }}
    >
      <path
        id="text-curve"
        fill="none"
        d="M1 369.502C1 369.502 214.5 135 524 135C833.5 135 1067 390.289 1369.5 373C1672 355.71 1764.5 135 2245.5 135"
      ></path>
      <text
        y="40"
        letterSpacing="-0.02em"
        fill="#2B2D33"
        fontFamily="ES Build, Matter, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;"
        fontSize="80"
      >
        <textPath
          ref={snake}
          href="#text-curve"
          fontWeight="900"
          startOffset={0}
          opacity={0}
          style={{ transition: ".8s ease-in-out" }}
        >
          <tspan style={{ fill: "var(--text-primary-color)" }}>
            {mainText}
          </tspan>
          <tspan style={{ fill: "rgb(var(--foreground-rgb))" }}>{text}</tspan>
        </textPath>
      </text>
    </svg>
  );
};
