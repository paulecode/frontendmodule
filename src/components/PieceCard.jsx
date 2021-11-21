import React from "react";
import placeholder from "./score.png";
function PieceCard(props) {
  return (
    <div className="content__card">
      <img
        className="placeholderImage"
        src={placeholder}
        alt="A score"
      >
      </img>
      <div className="cardMeta">
        <p className="cardComposer">{props.composer}</p>
        <p className="cardTitle">{props.title}</p>
        <p className="cardTitleExtra">{props.titleExtra}</p>
      </div>
    </div>
  );
}

export default PieceCard;
