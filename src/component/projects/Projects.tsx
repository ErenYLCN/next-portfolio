"use client";

import React from "react";
import SectionHeading from "../section-heading/SectionHeading";
import { projectsData } from "@/core/lib/data";
import ProjectsListItem from "./list-item/ProjectsListItem";
import { useActiveSectionHandler } from "@/core/hook/active-section-handler/useActiveSectionHandler";

function Projects() {
  const { ref } = useActiveSectionHandler({ name: "Projects" });

  return (
    <section ref={ref} id={"projects"} className={"scroll-mt-28"}>
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
