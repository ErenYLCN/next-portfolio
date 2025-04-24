"use client";

import React from "react";

import { motion } from "framer-motion";

import { useActiveSectionHandler } from "@/core/hook/active-section-handler/useActiveSectionHandler";

import SectionHeading from "../section-heading/SectionHeading";

function About() {
  const { ref } = useActiveSectionHandler({ name: "About", threshold: 0.75 });

  return (
    <motion.section
      ref={ref}
      id={"about"}
      className={"mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading title={"About Me"} />

      <p className={"mb-3"}>
        {"I graduated from "}
        <span className={"font-medium"}>{"Bilkent University"}</span>
        {" with a major in "}
        <span className={"font-medium"}>{"Computer Science"}</span>
        {", and since then, I've worked on multiple "}
        <span className={"font-medium"}>{"large-scale applications"}</span>
        {" across various domains, with a particular focus on "}
        <span className={"font-medium underline italic"}>
          {"blockchain technology and fin-tech"}
        </span>
        {
          ". My professional journey has not only honed my technical skills but also allowed me to "
        }
        <span className={"font-medium"}>{"mentor interns"}</span>
        {
          ", sharing my knowledge and fostering the next generation of developers. I'm passionate about staying at the forefront of technology, continuously exploring new tools and methodologies to enhance my work."
        }
      </p>
      <p>
        {"Currently, I am expanding my skill set by learning "}
        <span className={"font-medium underline italic"}>
          {"full stack development with ExpressJS"}
        </span>
        {", aiming to broaden my expertise and take on more comprehensive projects."}
      </p>
    </motion.section>
  );
}

export default About;
