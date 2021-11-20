import React from "react";

function PieceCard(props) {
  return (
    <div className="content__card">
      <p>Composer: {props.composer}</p>
      <p>Title: {props.title}</p>
      <p>Title Extra: {props.titleExtra}</p>
    </div>
  );
}

export default PieceCard;
