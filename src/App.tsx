import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import CommonAddNew from "./components/CommonAddNew";
const App: React.FC<{}> = () => {
  const [categoryList, setCategoryList] = useState<JSX.Element[]>([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const handleCreateNewList = (title: string) => {
    setCategoryList(
      categoryList.concat(<Cards key={categoryIndex} categoryTitle={title} />)
    );
    setCategoryIndex(categoryIndex + 1);
  };

  return (
    <div className="App">
      <h1 className="heading">Dashboard</h1>
      <div className="cards-wrapper">
        {categoryList.map((card) => card)}
        <div style={{ display: "flex", alignItems: "center" }}>
          <CommonAddNew createList={handleCreateNewList} mode={"category"} />
        </div>
      </div>
    </div>
  );
};

export default App;
