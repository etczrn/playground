import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of thew Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of thew Section 2",
  },
];

const useTabs = (allTabs: any[]) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  if (!Array.isArray(allTabs)) return;

  return {
    selected: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

/** App.tsx
 * 
const App = () => {
  const { selected, changeItem } = useTabs(content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <br />
      {selected && selected.content}
    </div>
  );
};
*/
