import React, { Fragment } from "react";

import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

function ContactSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type={"submit"}
      className={`group relative flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
          bg-black text-white rounded-full outline transition-all focus:scale-110 hover:scale-110
          hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65
          dark:bg-white/10 dark:border-black/40 dark:outline-none`}
      disabled={pending}
    >
      {pending ? (
        <div className={"h-5 w-5 animate-spin rounded-full border-b-2 border-white"} />
      ) : (
        <Fragment>
          {"Submit"}
          <FaPaperPlane
            className={`text-xs opacity-70 transition-all group-hover:translate-x-1
            group-hover:-translate-y-1`}
          />
        </Fragment>
      )}
    </button>
  );
}

export default ContactSubmitButton;
