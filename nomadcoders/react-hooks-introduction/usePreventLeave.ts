import { SyntheticEvent } from "react";

{
  const usePreventLeave = () => {
    const listener = (event: Event) => {
      event.preventDefault();
      // event.returnValue = ""; // deprecated but still needed for chrome
    };
    const enablePrevent = () => {
      window.addEventListener("beforeunload", listener);
    };
    const disablePrevent = () => {
      window.removeEventListener("beforeunload", listener);
    };

    return { enablePrevent, disablePrevent };
  };
}
