import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import governanceImg from "../../../public/governance.png";
import peraImg from "../../../public/pera.png";
import unwrapitImg from "../../../public/unwrapit.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Pera Wallet",
    description:
      "The leading wallet app of Algorand ecosystem. I was responsible for building Discover section, a web app that is injected into the native Android and iOS apps.",
    tags: ["React", "Typescript", "SASS", "Context API", "WebView"],
    imageUrl: peraImg,
  },
  {
    title: "Governance Platform",
    description:
      "A web app for voting on proposals in the Algorand ecosystem. I was responsible for implementing latest features and maintaining the app.",
    tags: ["React", "Typescript", "SASS", "Context API", "Algo SDK"],
    imageUrl: governanceImg,
  },
  {
    title: "Unwrapit",
    description:
      "Digital gifting platform for people and companies. I developed some of the latest features and maintained the app.",
    tags: ["React", "Typescript", "SASS", "Context API", "Framer Motion"],
    imageUrl: unwrapitImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Nuxt.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Redux",
  "Context API",
  "Zustand",
  "Express",
] as const;
