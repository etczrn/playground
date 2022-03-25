import { MutableRefObject, useEffect, useRef } from "react";

{
  const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof duration !== "number" || typeof delay !== "number") return;

      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = "1";
      }
    }, []);

    return { ref: element, style: { opacity: 0 } };
  };

  /*
  const App = () => {
    const element = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);

    return (
      <div className="App">
        <h1 {...element}>Hello</h1>
        <p {...fadeInP}>ha ha</p>
      </div>
    );
  };
   */
}
