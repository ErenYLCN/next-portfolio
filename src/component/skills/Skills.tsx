"use client";

import React from "react";

import { motion } from "framer-motion";

import { useActiveSectionHandler } from "@/core/hook/active-section-handler/useActiveSectionHandler";
import { skillsData } from "@/core/lib/data";

import SectionHeading from "../section-heading/SectionHeading";

const FADE_IN_VARIANTS = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.06,
    },
  }),
};

function Skills() {
  const { ref } = useActiveSectionHandler({ name: "Skills" });

  return (
    <section
      ref={ref}
      id={"skills"}
      className={`mb-28 max-w-[48rem] scroll-mt-28 text-center`}
    >
      <SectionHeading title={"my skills"} />

      <ul className={"flex flex-wrap justify-center text-lg text-gray-800 gap-3"}>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className={
              "bg-white dark:bg-white/10 dark:text-white/80 borderBlack rounded-xl px-5 py-3"
            }
            variants={FADE_IN_VARIANTS}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
