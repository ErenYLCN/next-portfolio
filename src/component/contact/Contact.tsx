"use client";

import React from "react";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

import { useActiveSectionHandler } from "@/core/hook/active-section-handler/useActiveSectionHandler";

import SectionHeading from "../section-heading/SectionHeading";

const MAIL = "yalcineren97@gmail.com";

function Contact() {
  const { ref } = useActiveSectionHandler({ name: "Contact" });

  return (
    <motion.section
      ref={ref}
      id={"contact"}
      className={"mb-20 sm:mb-28 scroll-mt-28 w-[min(100%, 38rem)] text-center"}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading title={"contact me"} />

      <p className={"text-gray-700 -mt-6"}>
        {"Contact me directly at "}
        <a className={"underline"} href={`mailto:${MAIL}`}>
          {MAIL}
        </a>
        {" or using this form:"}
      </p>

      <form className={"mt-10 flex flex-col gap-2"}>
        <input
          type={"email"}
          className={`h-14 rounded-lg outline-black px-4`}
          placeholder={"Your email"}
        />
        <textarea
          className={"h-52 my-3 rounded-lg outline-black border-black p-4"}
          placeholder={"Your message"}
        />
        <button
          type={"submit"}
          className={`group relative flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
          bg-black text-white rounded-full outline transition-all focus:scale-110 hover:scale-110
          hover:bg-gray-950 active:scale-105`}
        >
          {"Submit"}
          <FaPaperPlane
            className={`text-xs opacity-70 transition-all group-hover:translate-x-1
            group-hover:-translate-y-1`}
          />
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
