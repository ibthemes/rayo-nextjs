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

    // CRITICAL: Update ScrollTrigger on RAF for smoother iOS performance
    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
    };

    // Don't use scrollerProxy on iOS - causes jank
    if (!isIOS) {
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
    }

    // Use lenis.on for scroll updates
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Refresh ScrollTrigger after layout changes
    const handleRefresh = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    window.addEventListener("resize", handleRefresh);

    // Initial refresh for iOS
    if (isIOS) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }

    return () => {
      window.removeEventListener("resize", handleRefresh);
      if (!isIOS) {
        ScrollTrigger.scrollerProxy(document.body, {});
      }
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
        lerp: isIOS ? 0.08 : 0.1, // Slower, smoother for iOS
        duration: isIOS ? 1.5 : 1.2, // Longer duration reduces jank
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: isIOS ? 1.2 : 2, // Gentler touch
        syncTouch: true,
        syncTouchLerp: isIOS ? 0.08 : 0.1, // Match lerp value
        infinite: false,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    />
  );
}
