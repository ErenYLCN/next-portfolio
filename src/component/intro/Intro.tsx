"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

function Intro() {
  return (
    <section className={"mb-28 max-w-[50rem] text-center sm:mb-0"}>
      <div className={`flex items-center justify-center`}>
        <div className={"relative"}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={"/me.png"}
              alt={"sketch of Eren"}
              width={192}
              height={192}
              quality={95}
              priority
              className={`rounded-full object-cover h-24 w-24 border-[0.35rem] 
              border-white shadow-xl`}
            />
          </motion.div>

          <motion.span
            className={"absolute right-0 bottom-0 text-4xl"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 140,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            {"👋"}
          </motion.span>
        </div>
      </div>

      <motion.p
        className={`mb-10 mt-4 px-4 font-medium text-xl !leading-[1.5] sm:text-2xl`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <strong>{"Hi, I'm Eren. "}</strong>
        {"I am a "}
        <strong>{"front-end developer "}</strong>
        {"with "}
        <strong>{"5 years "}</strong>
        {"of experience. I am passionate about "}
        <strong>{"design, "}</strong>
        <strong>{"performance, "}</strong>
        {"and "}
        <strong>{"accessibility. "}</strong>
        {"My focus is "}
        <span className={"underline"}>{"React (Next.JS)."}</span>
      </motion.p>

      <motion.div
        className={
          "flex flex-col sm:flex-row gap-2 px-4 items-center justify-center font-medium"
        }
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href={"#contact"}
          className={`group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          transition`}
        >
          {"Contact me"}
          <BsArrowRight
            className={"opacity-70 group-hover:translate-x-1 transition"}
          />
        </Link>

        <a
          href={"/CV.pdf"}
          download
          className={`group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border 
          border-black/10`}
        >
          {"Download CV"}
          <HiDownload
            className={"opacity-60 group-hover:translate-y-0.5 transition"}
          />
        </a>

        <a
          href={"https://linkedin.com/in/ernylcn"}
          target={"_blank"}
          className={`bg-white px-3 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition 
          cursor-pointer border border-black/10`}
        >
          <BsLinkedin />
        </a>

        <a
          href={"https://github.com/ErenYLCN"}
          target={"_blank"}
          className={`bg-white px-3 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-[1.15] active:scale-105 transition cursor-pointer border 
          border-black/10`}
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
