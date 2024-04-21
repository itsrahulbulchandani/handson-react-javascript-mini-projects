import { useState, useEffect } from "react";
import "./App.css";
import dataSet from "./ReactMiniProjects/dataSetJson/shoppingItems.json";

function App() {
  //// Shopping list with reactJS
  const [inputVal, setInputVal] = useState("");
  const [qtyVal, setQtyVal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [priceVal, setPriceVal] = useState(0);
  const [shoppingList, setShoppingList] = useState([...dataSet.items]);

  useEffect(() => {
    setInputVal("");
    setQtyVal(0);
    setPriceVal(0);
    setTotalPrice( shoppingList?.reduce((total, item) => total + item.price*(item.qty?item.qty:1),0));
  }, [shoppingList]);


  const handleOnChange = (val, index) => {
    setShoppingList(
      shoppingList.map((item, idx) => {
        if (index === idx) return { ...item, qty: val };
        return item;
      })
    );
  };

  const addToList = (obj) => {
    setShoppingList([...shoppingList, obj]);
  };

  const handleOnChangeVal = (val, target) => {
    switch (target) {
      case "text":
        setInputVal(val);
        break;
      case "price":
        setPriceVal(val);
        break;
      case "qty":
        setQtyVal(val);
    }
  };
  const handleDelete = (index) => {
    setShoppingList(shoppingList.filter((item, idx) => idx !== index));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>REACT SHOPPING CENTER</h3>
      <h2>TOTAL PRICE: {totalPrice}</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "600px",
          border: "2px",
          padding: "10px",
          border: "2px dotted",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "10px solid gray",
            width: "500px",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              marginRight: "2px",
              display: "flex",
              flexBasis: "40px",
              flexShrink: "0",
            }}
          >
            S.No
          </span>
          <span
            style={{
              marginRight: "10px",
              display: "flex",
              flexBasis: "calc(100% - 250px)",
              flexShrink: "0",
            }}
          >
            Item Name
          </span>
          <span
            style={{
              marginRight: "5px",
              display: "flex",
              flexBasis: "50px",
              flexShrink: "0",
            }}
          >
            Qty
          </span>
          <span
            style={{
              marginRight: "5px",
              display: "flex",
              flexBasis: "50px",
              flexShrink: "0",
            }}
          >
            Price
          </span>
          <span
            style={{
              marginRight: "5px",
              display: "flex",
              maxWidth: "calc(100% - 370px)",
            }}
          >
            Total Price
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textOverflow: "ellipsis",
          }}
        >
          {shoppingList.map((obj, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "10px solid gray",
                  width: "500px",
                  flexShrink: "0",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    marginRight: "2px",
                    display: "flex",
                    flexBasis: "40px",
                    flexShrink: "0",
                  }}
                >
                  {index + 1}
                </span>
                <span
                  style={{
                    marginRight: "10px",
                    display: "flex",
                    flexBasis: "calc(100% - 250px)",
                    flexShrink: "0",
                  }}
                >
                  {obj.name}
                </span>
                <input
                  type="number"
                  style={{
                    marginRight: "5px",
                    width: "50px",
                  }}
                  defaultValue={obj.qty ? obj.qty : "1"}
                  onChange={(e) => handleOnChange(e.target.value, index)}
                />
                <span
                  style={{
                    marginRight: "5px",
                    display: "flex",
                    flexBasis: "50px",
                    flexShrink: "0",
                  }}
                >
                  {obj.price}
                </span>
                <span
                  style={{
                    marginRight: "5px",
                    display: "block",
                    maxWidth: "calc(100% - 370px)",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {obj.price * (obj.qty ? obj.qty : 1)}
                </span>
              </div>
              <button
                key={index}
                onClick={() => handleDelete(index)}
                style={{ fontSize: "10px", display: "flex", flexGrow: "1" }}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "10px solid gray",
              width: "500px",
              flexShrink: "0",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                marginRight: "2px",
                display: "flex",
                flexBasis: "40px",
                flexShrink: "0",
              }}
            >
              {shoppingList?.length+1}
            </span>
            <input
              style={{
                marginRight: "10px",
                width: "calc(100% - 258px)",
              }}
              type="text"
              id="input-box"
              value={inputVal}
              onChange={(e) => handleOnChangeVal(e.target.value, "text")}
            />
            <input
              type="number"
              style={{
                marginRight: "5px",
                width: "50px",
              }}
              value={qtyVal}
              onChange={(e) => handleOnChangeVal(e.target.value, "qty")}
            />
            <input
              type="number"
              style={{
                marginRight: "5px",
                width: "50px",
              }}
              value={priceVal}
              onChange={(e) => handleOnChangeVal(e.target.value, "price")}
            />
          </div>
          <button
            onClick={() =>
              addToList({ name: inputVal, price: priceVal, qty: qtyVal })
            }
            style={{ fontSize: "10px", display: "flex", flexGrow: "1" }}
          >
            INSERT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
