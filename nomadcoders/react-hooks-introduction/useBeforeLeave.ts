import { useEffect } from "react";

{
  const useBeforeLeave = (onBefore: () => void) => {
    const handle = (event: MouseEvent) => {
      const { clientY } = event;

      if (clientY <= 0) {
        onBefore();
      }
    };

    useEffect(() => {
      if (typeof onBefore !== "function") return;

      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []);
  };
}
