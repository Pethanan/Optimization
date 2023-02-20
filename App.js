import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [ascendingOrder, setAscendingOrder] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const descendingOrderHandler = () => {
    setAscendingOrder((prevState) => !prevState);
  };

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} order={ascendingOrder} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={descendingOrderHandler}>
        Change to {ascendingOrder ? "descending order" : "ascendingOrder"}
      </Button>
    </div>
  );
}

export default App;
