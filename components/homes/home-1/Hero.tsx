"use client";
import AnimateRotation from "@/components/animation/AnimateRotation";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import VideoModal from "@/components/common/VideoModal";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="mxd-section mxd-hero-section mxd-hero-fullheight">
        <div className="mxd-hero-01">
          <div className="mxd-hero-01__wrap loading-wrap">
            {/* top group */}
            <div className="mxd-hero-01__top">
              <div className="mxd-hero-01__title-wrap">
                {/* title images */}
                <div className="mxd-hero-01__images mxd-floating-img">
                  <div className="hero-01-image image-01 mxd-floating-img__item loading__fade">
                    <Image
                      className="mxd-pulse"
                      alt="Hero Image"
                      src="/img/hero/01_hero-img.webp"
                      width={700}
                      height={687}
                    />
                  </div>
                  <div className="hero-01-image image-02 mxd-floating-img__item loading__fade">
                    <Image
                      className="mxd-move"
                      alt="Hero Image"
                      src="/img/hero/02_hero-img.webp"
                      width={700}
                      height={798}
                    />
                  </div>
                  <div className="hero-01-image image-03 mxd-floating-img__item loading__fade">
                    <Image
                      className="mxd-rotate"
                      alt="Hero Image"
                      src="/img/hero/03_hero-img.webp"
                      width={700}
                      height={704}
                    />
                  </div>
                </div>
                {/* title marquee */}
                <div className="mxd-hero-01__marquee loading__item">
                  <VelocityMarquee className="marquee marquee-right--gsap">
                    {/* single item */}
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div
                        key={index}
                        className="marquee__item item-regular text"
                      >
                        <p>tech</p>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 80 80"
                          fill="currentColor"
                        >
                          <path
                            fill="currentColor"
                            d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                      c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                      c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                      C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                      c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                      s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                      c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                      "
                          />
                        </svg>
                        {/* <Image class="inject-me" src="/img/icons/20x20-rayo-star.svg" alt="Divider Icon"> */}
                      </div>
                    ))}
                  </VelocityMarquee>
                </div>
                {/* title text */}
                <h1 className="hero-01-title">
                  <span className="hero-01-title__row loading__item">
                    <em className="hero-01-title__item">Design,</em>
                    <em className="hero-01-title__item title-item-transparent">
                      tech
                    </em>
                  </span>
                  <span className="hero-01-title__row loading__item">
                    <em className="hero-01-title__item title-item-image">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 20 20"
                      >
                        <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                      </svg>
                      {/* <Image class="inject-me" src="/img/icons/20x20-rayo-star.svg" alt="Divider Icon"> */}
                    </em>
                    <em className="hero-01-title__item">and some magic</em>
                  </span>
                </h1>
              </div>
            </div>
            {/* bottom group */}
            <div className="mxd-hero-01__bottom">
              <div className="mxd-hero-01__data-wrap">
                <div className="mxd-hero-01__dash-line dash-line loading__fade" />
                <div className="mxd-hero-01__data-btn loading__fade">
                  <a
                    href="#projects"
                    className="btn-rotating btn-rotating-120-160"
                  >
                    {/* SVG rotating text */}
                    <AnimateRotation
                      as="svg"
                      version="1.1"
                      id="scrollDown"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 160 160"
                      xmlSpace="preserve"
                      className="btn-rotating__text animate-rotation"
                      value={360}
                    >
                      <defs>
                        <path
                          id="textPath"
                          d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                        />
                      </defs>
                      <g>
                        <use xlinkHref="#textPath" fill="none" />
                        <text>
                          {/* button text here!!! */}
                          <textPath xlinkHref="#textPath">
                            Scroll for More * Scroll for More * Scroll for More
                            *
                          </textPath>
                        </text>
                      </g>
                    </AnimateRotation>
                    {/* image */}
                    <Image
                      className="btn-rotating__image"
                      alt="Object"
                      src="/img/icons/300x300_obj-btn-01.webp"
                      width={300}
                      height={300}
                    />
                  </a>
                </div>
                <div className="mxd-hero-01__data-descr loading__fade">
                  <p className="t-bright">
                    We are a creative digital agency specializing in innovative
                    design and cutting-edge development.
                  </p>
                </div>
                <div className="mxd-hero-01__data-socials loading__fade">
                  <ul>
                    <li>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 80"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                    c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                    c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                    C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                    c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                    s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                    c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                    "
                        />
                      </svg>
                      <a href="https://dribbble.com/" target="_blank">
                        Dribbble
                      </a>
                    </li>
                    <li>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 80"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                    c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                    c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                    C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                    c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                    s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                    c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                    "
                        />
                      </svg>
                      <a href="https://www.behance.net/" target="_blank">
                        Behance
                      </a>
                    </li>
                    <li>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 80"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                    c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                    c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                    C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                    c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                    s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                    c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                    "
                        />
                      </svg>
                      <a href="https://www.instagram.com/" target="_blank">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mxd-hero-01__video-wrap loading__item">
                <video
                  className="mxd-hero-01__video"
                  preload="auto"
                  autoPlay
                  loop
                  muted
                  poster="video/540x310_video-01.webp"
                >
                  <source type="video/mp4" src="video/540x310_video-01.mp4" />
                  <source type="video/webm" src="video/540x310_video-01.webm" />
                  <source type="video/ogv" src="video/540x310_video-01.ogv" />
                </video>
                <div className="mxd-hero-01__video-btn">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="btn btn-round btn-round-medium btn-accent slide-right anim-no-delay showreel-trigger"
                  >
                    <i className="ph-fill ph-play" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal
        videoSrc="https://vimeo.com/65036292"
        open={isOpen}
        setOpen={setIsOpen}
      />
    </>
  );
}
