import React, { useState } from "react";
import ListItems from "./ListItems";

const List = () => {
  const [listItems, setListItems] = useState([]);

  const handleButtonClick = () => {
    const n = document.getElementById("input").value;
    const items = [];

    for (let i = 1; i <= n; i++) {
      items.push(i);
    }

    setListItems(items);
  };

  return (
    <>
      <label htmlFor="input">Enter a number:</label>
      <input type="number" id="input" />
      <button id="button" onClick={handleButtonClick}>
        Generate List
      </button>
      {listItems.length > 0 && (
        <ul>
          {listItems.map((item) => (
            <React.Fragment key={item}>
              <ListItems valuex={item} />
            </React.Fragment>
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
