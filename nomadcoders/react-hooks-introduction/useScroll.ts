import { useState, useEffect } from "react";

{
  const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0,
    });

    const onScroll = () => {
      console.log(window.scrollY, window.scrollX);
      setState({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    useEffect(() => {
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return state;
  };
}

/* App.tsx

const App = () => {
  const { y } = useScroll();

  return (
    <div className="App" style={{ height: "100vh" }}>
      <h1 style={{ position: "fixed", color: y === 0 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
};

*/
