const useFullScreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      // element.current.requestFullscreen();
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullScreen) {
        element.current.webkitRequestFullScreen();
      } else if (element.current.msRequestFullScreen) {
        element.current.msRequestFullScreen();
      }
      runCb(true);
    }
  };

  const exitFull = () => {
    // document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullScreen) {
      document.webkitExitFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };

  return { element, triggerFull, exitFull };
};
