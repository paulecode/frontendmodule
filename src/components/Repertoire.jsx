import React, { useState } from "react";
import AddPieces from "./AddPieces";
import PieceCard from "./PieceCard";
import ProtectRoute from "./middleware/Auth";

function Repertoire() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [pieces, setPieces] = useState([]);

  function addPiece(newPiece) {
    setPieces(prevPieces => [...prevPieces, newPiece]);
    setPopupVisible(false);
  }

  return (
    <div className="fullscreenContainer">
      <div className="sidebar">

      </div>
      <div className="cardholder">
        {pieces.map((pieceItem, index) => {
          return (
            <PieceCard
              key={index}
              id={index}
              title={pieceItem.title}
              titleExtra={pieceItem.titleExtra}
              composer={pieceItem.composer}
            />
          );
        })}

        <button
          className="addButton"
          disabled={popupVisible ? "true" : ""}
          onClick={() => setPopupVisible(!popupVisible)}
        >
        Add Piece
        </button>
        <div
          className={popupVisible ? "popupContainer" : "popupContainer--hidden"}>
        <AddPieces onAdd={addPiece} />
        </div>
      </div>
    </div>
  );
}

export default ProtectRoute( Repertoire );
