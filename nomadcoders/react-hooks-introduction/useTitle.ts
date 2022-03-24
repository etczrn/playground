import { useState, useEffect } from "react";

const useTitle = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

/*
App.tsx

const App = () => {
  const titleUpdator = useTitle("loading...");

  // setTimeout in order
  setTimeout(() => {
    titleUpdator("Home");
    setTimeout(() => titleUpdator("FriYay"), 3000);
  }, 5000);

  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};
 */
