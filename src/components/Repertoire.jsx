import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddPieces from "./AddPieces";
import PieceCard from "./PieceCard";
import ProtectRoute from "./middleware/Auth";


function Repertoire() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [pieces, setPieces] = useState([]);
  const navigate = useNavigate();
  function addPiece(newPiece) {
    setPieces(prevPieces => [...prevPieces, newPiece]);
    setPopupVisible(false);
  }



  function logOut() {
    localStorage.clear();
    navigate('/');
  }
  return (
    <ProtectRoute>
    <div className="fullscreenContainer">
      <div className="sidebar">
        <button
          onClick={logOut}
        >
        Logout
        </button>
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
    </ProtectRoute>
  );
}

export default Repertoire;
