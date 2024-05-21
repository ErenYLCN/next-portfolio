"use client";

import React, { Fragment } from "react";

import SectionHeading from "../section-heading/SectionHeading";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { useActiveSectionHandler } from "@/core/hook/active-section-handler/useActiveSectionHandler";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/core/lib/data";

function Experience() {
  const { ref } = useActiveSectionHandler({ name: "Experience" });

  return (
    <section ref={ref} id={"experience"} className={"mb-28 scroll-mt-28"}>
      <SectionHeading title={"my experience"} />

      <VerticalTimeline lineColor={""}>
        {experiencesData.map((experience, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={experience.date}
              icon={experience.icon}
            >
              <h3 className={"font-semibold capitalize"}>{experience.title}</h3>
              <p className={"font-normal !mt-0"}>{experience.location}</p>
              <p className={"!font-normal !mt-1 text-gray-700"}>
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
