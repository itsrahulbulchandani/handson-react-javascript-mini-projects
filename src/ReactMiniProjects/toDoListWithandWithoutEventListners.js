import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //// to do list reactJS, user can add and remove tasks from the list
  const [checkboxVal, setCheckboxVal] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [toDoList, setToDoList] = useState([
    { text: "je;;p", checked: false },
    { text: "je;;p", checked: false },
    { text: "je;;p", checked: false },
    { text: "je;;p", checked: false },
  ]);

  useEffect(() => {
    setCheckboxVal(false);

    setInputVal("");
  }, [toDoList]);

  const handleOnChange = (val, target) => {
    switch (target) {
      case "text":
        setInputVal(val);
        break;
      case "checkbox":
        setCheckboxVal(val);
    }
  };

  useEffect(() => {
    const inputBox = document.getElementById("input-box");
    inputBox.addEventListener("keypress", function (event) {
      event.stopPropagation();
      if (event.key === "Enter")
        addToList({
          checked: checkboxVal,
          text: "added through js event listner",
        });
    });
  }, []);

  const addToList = (obj) => {
    setToDoList([...toDoList, obj]);
  };
  const handleDelete = (index) => {
    setToDoList(toDoList.filter((item, idx) => idx !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputVal !== "")
      addToList({ checked: checkboxVal, text: inputVal });
  };

  return (
    <div>
      <h3>REACT TO DO LIST</h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          border: "2px",
          padding: "10px",
          border: "2px dotted",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {toDoList.map((obj, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                border: "10px solid gray",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  marginRight: "2px",
                  display: "flex",
                  flexBasis: "20px",
                }}
              >
                {index + 1}
              </span>
              <input
                type="checkbox"
                style={{
                  marginRight: "10px",
                  display: "flex",
                  flexBasis: "20px",
                }}
                defaultChecked={obj.checked}
              ></input>
              <span
                style={{
                  marginRight: "5px",
                  display: "flex",
                  flexBasis: "calc(100% - 100px)",
                }}
              >
                {obj.text}
              </span>
              <button
                onClick={() => handleDelete(index)}
                style={{ fontSize: "10px" }}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <input
            type="checkbox"
            checked={checkboxVal}
            onChange={(e) => handleOnChange(e.target.checked, "checkbox")}
          ></input>
          <input
            type="text"
            id="input-box"
            onKeyDown={(e) => handleKeyPress(e)}
            value={inputVal}
            onChange={(e) => handleOnChange(e.target.value, "text")}
          />
          <button
            disabled={!inputVal}
            onClick={() => addToList({ checked: checkboxVal, text: inputVal })}
          >
            INSERT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
