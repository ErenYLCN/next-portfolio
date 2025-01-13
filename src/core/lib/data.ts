import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaWallet, FaMoneyBill } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";

import forinvestImg from "../../../public/forinvest.png";
import gesumeImg from "../../../public/gesume.png";
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
    title: "Graduated from Bilkent University",
    location: "Ankara, Turkey",
    description:
      "Graduated in 4 years. I immediately found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Forte ArGe, Ankara, Turkey",
    description:
      "I worked as a full stack developer, mainly using Angular, Java Spring and MySQL. I worked on a project called FiloSoft, a vehicle management company for large companies.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Front-end Developer",
    location: "Hipo, Toronto, Canada",
    description:
      "I worked as a front-end developer, mainly using React, TypeScript and SASS. Built & maintained many large scale applications and implemented, tested reusable UI components.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "Front-end Developer",
    location: "Pera Wallet, Lisbon, Portugal",
    description:
      "Implemented the Discover section of the Pera Wallet app, a web app that is injected into the native Android and iOS apps. I was one of the main developers of Discover.",
    icon: React.createElement(FaWallet),
    date: "2022 - 2023",
  },
  {
    title: "Front-end Developer",
    location: "Yopaat, Netherlands",
    description:
      "Currently implementing Gèsume, a social media-like platform for people in need of a job via graphical resume feature. Project uses Nuxt3 and Laravel.",
    icon: React.createElement(FaComputer),
    date: "2023 - 2024",
  },
  {
    title: "Front-end Developer",
    location: "ForInvest, Istanbul, Turkey",
    description:
      "Currently working on one of the leading Fin-Tech companies of Turkey with lots of investment solutions provided using more than 500 terabytes of growing market data. Projects are mostly React and Vue projects⁠",
    icon: React.createElement(FaMoneyBill),
    date: "2024 - current",
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
  {
    title: "Gèsume",
    description:
      "A social media-like platform for people in need of a job via graphical resume feature. Project uses Nuxt3 and Laravel.",
    tags: ["Nuxt.js", "Javascript", "Tailwind", "Laravel"],
    imageUrl: gesumeImg,
  },
  {
    title: "ForInvest",
    description:
      "Projects and widgets provided to companies using real-time market data provided by socket connections.",
    tags: ["Nuxt.js", "Vue.js", "React.js", "Java Spring"],
    imageUrl: forinvestImg,
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
  "Three.js",
  "Redux",
  "Context API",
  "Zustand",
  "Express",
] as const;
