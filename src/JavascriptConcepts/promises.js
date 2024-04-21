import { useState, useEffect } from "react";
import "./App.css";
import dataSet from "./ReactMiniProjects/dataSetJson/shoppingItems.json";

function App() {
  useEffect(() => {
    //start();
    // start2();
    start4();
  }, []);

  // const pr1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("resolved");
  //   }, 2000);
  // });

  // const pr2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({ username: "rahul", email: "rahul@gmail.com" });
  //   }, 2000);
  // });

  const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ username: "rahul", loggedIn: "true" });
      } else {
        reject("sdfsa");
      }
    }, 2000);
  });

  // async function start() {
  //   pr1
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log("starting promises");
  // }

  function start3() {
    console.log(pr3);
    let value = pr3
      .then((user) => {
        console.log(user);
        console.log(user.username);
        return user.username;
      })
      .then((username) => {
        console.log("then chaining:", username);
      })
      .catch((data) => console.log(data));

    console.log("value from promise", value);
  }

  async function start4() {
    console.log(pr3);
    //need try catch to handle rejection from promises
    let value = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("value from promise start 4 fetch api", value);
    let valueJson =await value.json();
    console.log("value from promise start 4 fetch api json", valueJson);

  }

  return <div></div>;
}

export default App;
