"use client";

import React from "react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { sendEmailAction } from "@/core/action/actions";
import { useActiveSectionHandler } from "@/core/hook/active-section-handler/useActiveSectionHandler";
import {
  MAIL_ADDRESS,
  MAX_MAIL_ADDRESS_LENGTH,
  MAX_MESSAGE_LENGTH,
} from "@/core/lib/constant";

import ContactSubmitButton from "./submit-button/ContactSubmitButton";
import SectionHeading from "../section-heading/SectionHeading";

function Contact() {
  const { ref } = useActiveSectionHandler({ name: "Contact" });

  return (
    <motion.section
      ref={ref}
      id={"contact"}
      className={"mb-20 sm:mb-28 scroll-mt-28 w-[min(100%, 38rem)] text-center"}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading title={"contact me"} />

      <p className={"text-gray-700 -mt-6 dark:text-white/80"}>
        {"Contact me directly at "}
        <a className={"underline"} href={`mailto:${MAIL_ADDRESS}`}>
          {MAIL_ADDRESS}
        </a>
        {" or using this form:"}
      </p>

      <form
        className={"mt-10 flex flex-col gap-2 dark:text-black"}
        action={contactFormAction}
      >
        <input
          type={"email"}
          name={"senderEmail"}
          className={`h-14 rounded-lg outline-black borderBlack px-4 dark:bg-white/80
            dark:focus:bg-white/100 dark:outline-none transition-all`}
          placeholder={"Your email"}
          required
          maxLength={MAX_MAIL_ADDRESS_LENGTH}
        />
        <textarea
          className={`h-52 my-3 rounded-lg outline-black borderBlack p-4 dark:bg-white/80
            dark:focus:bg-white/100 dark:outline-none transition-all`}
          name={"message"}
          placeholder={"Your message"}
          required
          maxLength={MAX_MESSAGE_LENGTH + 1}
        />

        <ContactSubmitButton />
      </form>
    </motion.section>
  );

  async function contactFormAction(formData: FormData) {
    const { error } = await sendEmailAction(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Message sent!");
  }
}

export default Contact;
