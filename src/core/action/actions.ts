"use server";


import { Resend } from "resend";

import {
  MAIL_ADDRESS,
  MAX_MAIL_ADDRESS_LENGTH,
  MAX_MESSAGE_LENGTH,
} from "@/core/lib/constant";
import { getErrorMessage, validateString } from "@/core/util/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailAction = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server side validation
  if (validateString(senderEmail, MAX_MAIL_ADDRESS_LENGTH)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (validateString(message, MAX_MESSAGE_LENGTH)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: MAIL_ADDRESS,
      subject: "New message from your portfolio",
      reply_to: senderEmail as string,
      text: message as string,
      // TODO: uncomment this after fixing renderToString issue
      // react: React.createElement(ContactFormEmail, {
      //   message: message as string,
      //   senderEmail: senderEmail as string,
      // }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data }
};
