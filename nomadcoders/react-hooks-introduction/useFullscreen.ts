import { useRef } from "react";

{
  const useFullScreen = (callback: (term: boolean) => void) => {
    const element = useRef<
      Element & {
        msRequestFullscreen: () => Promise<undefined>;
        webkitRequestFullscreen: () => Promise<undefined>;
        mozRequestFullScreen: () => Promise<undefined>; // for version 9 I guess?
      }
    >(null);

    const runCb = (isFull: boolean) => {
      if (callback && typeof callback === "function") {
        callback(isFull);
      }
    };

    const triggerFull = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.msRequestFullscreen) {
          element.current.msRequestFullscreen();
        } else if (element.current.webkitRequestFullscreen) {
          element.current.webkitRequestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullScreen();
        }
        runCb(true);
      }
    };

    const exitFull = () => {
      let document: Document & {
        mozCancelFullScreen: () => Promise<undefined>;
        webkitExitFullscreen: () => Promise<undefined>;
        msExitFullscreen: () => Promise<undefined>;
      };
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      runCb(false);
    };

    return { element, triggerFull, exitFull };
  };
}
