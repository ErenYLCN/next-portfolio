"use client";

import React, { Fragment } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { useThemeContext } from "@/core/context/theme/ThemeContext";
import { useActiveSectionHandler } from "@/core/hook/active-section-handler/useActiveSectionHandler";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/core/lib/data";

import SectionHeading from "../section-heading/SectionHeading";

function Experience() {
  const { ref } = useActiveSectionHandler({ name: "Experience" });
  const { theme } = useThemeContext();

  return (
    <section
      ref={ref}
      id={"experience"}
      className={"mb-28 scroll-mt-28 sm:mb-40 text-center"}
    >
      <SectionHeading title={"my experience"} />

      <VerticalTimeline lineColor={""}>
        {experiencesData.map((experience, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className={"font-semibold capitalize"}>{experience.title}</h3>
              <p className={"font-normal !mt-0"}>{experience.location}</p>
              <p className={"!mt-1 !font-normal text-gray-700 dark:text-white/75"}>
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
