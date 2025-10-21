"use client";
import ReactLenis, { useLenis } from "lenis/react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisSmoothScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const isIOS =
      typeof window !== "undefined" &&
      /iPad|iPhone|iPod/.test(navigator.userAgent);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    lenis.on("scroll", ScrollTrigger.update);

    const handleRefresh = () => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    window.addEventListener("resize", handleRefresh);

    if (isIOS) {
      lenis.on("scroll", () => {
        requestAnimationFrame(() => ScrollTrigger.update());
      });
    }

    return () => {
      window.removeEventListener("resize", handleRefresh);
      ScrollTrigger.scrollerProxy(document.body, {});
      document.body.style.overflow = "";
    };
  }, [lenis]);

  const isIOS =
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <ReactLenis
      root
      options={{
        lerp: isIOS ? 0.15 : 0.1,
        duration: isIOS ? 1.0 : 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: isIOS ? 1.5 : 2,
        syncTouch: true,
        syncTouchLerp: isIOS ? 0.15 : 0.1,
        infinite: false,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    />
  );
}
