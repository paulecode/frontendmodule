import React from "react";
import ReactDOM from "react-dom";
import PieceCard from "./PieceCard";

it("Renders",() => {
  const div = document.createElement("div");
  ReactDOM.render(<PieceCard />, div);
})

it("Renders with all Meta Data",() => {
  const div = document.createElement("div");
  ReactDOM.render(
    <PieceCard
      componist="Rachmanninof"
      title="Liebesleid"
      titleExtra="Orig. Arr. Kreisler"
    />, div);
})
