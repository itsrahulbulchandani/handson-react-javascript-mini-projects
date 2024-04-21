import { useState, useEffect } from "react";
import "./App.css";
import dataSet from "./ReactMiniProjects/dataSetJson/shoppingItems.json";

function App() {
  //// debounce working example
  const debounce=(fn, delay= 10000)=>{
    let time;
    return (...args)=>{
      clearTimeout(time);
      time = setTimeout(()=>{
        fn(...args)
      },delay)
    }
  }

  const handleOnChangeVal = debounce((val=0,val2=1) => {
    console.log("Retrieving search results",val,val2)
  },4000);

  useEffect(() => {
    const searchBox = document.getElementById('search-box');

    searchBox.addEventListener('keypress',function (e) {
      console.log("Key Pressed",e)
      e.stopImmediatePropagation();
      handleOnChangeVal(10,20);
    })
  }, []);



  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh", // Full height of the viewport
        width: "100vw", // Full width of the viewport
      }}
    >
      Search Box:
      <input
        id="search-box"
        type="text"
        style={{
          marginRight: "5px",
          width: "200px",
        }}
        // value={}
        // onChange={(e) => handleOnChangeVal(e.target.value, "price")}
      />
    </div>
  );
}

export default App;
