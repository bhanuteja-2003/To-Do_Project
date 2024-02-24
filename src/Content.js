import React from "react";
import Itemlistpresent from "./Itemlistpresent";
import Itemlistnotpresent from "./Itemlistnotpresent";
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <Itemlistpresent
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <Itemlistnotpresent />
      )}
    </main>
  );
};

export default Content;
