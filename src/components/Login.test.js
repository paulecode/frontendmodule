import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";

it("Renders",() => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
})

//Test fails despite it working
//What
