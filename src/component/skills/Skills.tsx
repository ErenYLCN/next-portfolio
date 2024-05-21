"use client";

import { skillsData } from "@/core/lib/data";
import React from "react";
import SectionHeading from "../section-heading/SectionHeading";
import { useActiveSectionHandler } from "@/core/hook/active-section-handler/useActiveSectionHandler";
import { motion } from "framer-motion";

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

      <ul
        className={"flex flex-wrap justify-center text-lg text-gray-800 gap-3"}
      >
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className={"bg-white border border-black/10 rounded-xl px-5 py-3"}
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
