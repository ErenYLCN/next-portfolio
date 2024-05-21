import React from "react";
import SectionHeading from "../section-heading/SectionHeading";
import { projectsData } from "@/core/lib/data";
import ProjectsListItem from "./list-item/ProjectsListItem";

function Projects() {
  return (
    <section id={"projects"} className={"scroll-mt-28"}>
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
