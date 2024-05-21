"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { projectsData } from "@/core/lib/data";

type ProjectsListItemProps = (typeof projectsData)[number];

function ProjectsListItem({
  title,
  description,
  tags,
  imageUrl,
}: ProjectsListItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.li
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className={`group relative bg-gray-100 max-w-[42rem] border border-black/5 
      overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 rounded-sm`}
    >
      <div
        className={`pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col 
        h-full group-even:ml-auto`}
      >
        <h3 className={"text-2xl font-semibold"}>{title}</h3>
        <p className={"mt-2 leading-relaxed text-gray-700"}>{description}</p>
        <ul className={"flex flex-wrap mt-4 gap-2 sm:mt-auto"}>
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`bg-black/[0.7] text-white px-3 py-1 text-[0.7rem] uppercase tracking-wider 
              rounded-full`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        className={`absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
        group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3
        group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2`}
        src={imageUrl}
        alt={`${title} image`}
        width={480}
      />
    </motion.li>
  );
}

export default ProjectsListItem;
