"use client";

import {
  ElementType,
  ComponentPropsWithoutRef,
  useMemo,
  useState,
  useEffect,
} from "react";

type OwnProps = {
  text: string;
  className?: string;
  children?: React.ReactNode;
};

type PolyProps<As extends ElementType> = OwnProps &
  Omit<ComponentPropsWithoutRef<As>, keyof OwnProps | "className"> & {
    as?: As;
  };

const splitToLetters = (s: string) =>
  [...s].map((ch, i) => (
    <span key={i} className="btn-anim__letter">
      {ch.trim() === "" ? "\u00A0" : ch}
    </span>
  ));

export default function AnimatedButton<As extends ElementType = "div">(
  props: PolyProps<As> & { position?: "previous" | "next" }
) {
  const {
    as,
    className = "",
    text,
    children,
    position = "next",
    ...rest
  } = props as PolyProps<ElementType>;

  const Tag = (as || "div") as ElementType;

  const [play, setPlay] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const letters = useMemo(() => splitToLetters(text), [text]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration mismatch by rendering static content on server
  if (!isMounted) {
    return (
      <Tag className={`btn-anim ${className}`} aria-label={text} {...rest}>
        {position === "previous" ? <> {children}</> : null}
        <span className="btn-caption">
          <div className="btn-anim__block">{text}</div>
          <div className="btn-anim__block" aria-hidden="true">
            {text}
          </div>
        </span>
        {position === "next" ? <> {children}</> : null}
      </Tag>
    );
  }

  return (
    <>
      <Tag
        className={`btn-anim ${className} ${play ? "play" : ""}`}
        onMouseEnter={() => setPlay(true)}
        onAnimationEnd={() => setPlay(false)}
        onMouseLeave={() => setPlay(false)}
        aria-label={text}
        {...rest}
      >
        {position === "previous" ? <> {children}</> : null}
        <span className="btn-caption">
          <div className="btn-anim__block">{letters}</div>
          <div className="btn-anim__block" aria-hidden="true">
            {letters}
          </div>
        </span>

        {position === "next" ? <> {children}</> : null}
      </Tag>
    </>
  );
}
