"use client";
import useGsapScrollScaleAnimations from "@/hooks/useGsapScrollScaleAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function InitScroll() {
  useEffect(() => {
    // Configure ScrollTrigger for better mobile performance
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true,
    });

    // Refresh after config
    ScrollTrigger.refresh();
  }, []);

  useGsapScrollScaleAnimations();

  return null;
}
