import { useActiveSectionContext } from "@/core/context/active-section/ActiveSectionContext";
import { SectionTitle } from "@/core/lib/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export type UseActiveSectionHandlerProps = {
  name: SectionTitle;
  threshold?: number;
};

export const useActiveSectionHandler = ({
  name,
  threshold = 0.5,
}: UseActiveSectionHandlerProps) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(name);
    }
  }, [inView, name, setActiveSection, timeOfLastClick]);

  return { ref };
};
