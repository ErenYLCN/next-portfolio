"use client";

import React from "react";

import { useActiveSectionHandler } from "@/core/hook/active-section-handler/useActiveSectionHandler";
import { projectsData } from "@/core/lib/data";

import ProjectsListItem from "./list-item/ProjectsListItem";
import SectionHeading from "../section-heading/SectionHeading";

function Projects() {
  const { ref } = useActiveSectionHandler({ name: "Projects" });

  return (
    <section ref={ref} id={"projects"} className={"mb-28 scroll-mt-28 text-center"}>
      <SectionHeading title={"my projects"} />

      <ul>
        {projectsData.map((project, index) => (
          <ProjectsListItem key={index} {...project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
