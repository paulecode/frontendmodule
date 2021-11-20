import React from "react";
import ReactDOM from "react-dom";
import PieceCard from "./PieceCard";

it("Renders",() => {
  const div = document.createElement("div");
  ReactDOM.render(<PieceCard />, div);
})
