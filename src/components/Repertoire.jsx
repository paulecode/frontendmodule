import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddPieces from "./AddPieces";
import PieceCard from "./PieceCard";
import ProtectRoute from "./middleware/Auth";

function Repertoire() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [pieces, setPieces] = useState([]);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
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
      <div className="sidebar-top">
      <p>Hello {user}</p>
        </div>
    
        <div className="nav-items">
          <ul className="nav-list">
            <li className="nav-item nav-active">
              <div className="nav-item-div">
                Repertoire
              </div>
            </li>
          </ul>
          <ul className="nav-sub-list">
          {pieces.slice(0,3).map((pieceItem, index) => {
            return (
              <li className="nav-sub-item">
                {pieceItem.title}
              </li>
              );
            })}
          </ul>
          <ul className="nav-list">
            <li className="nav-item">
              <div className="nav-item-div">
                Schedule
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-item-div">
                Sight-reading
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-item-div">
                Your Progress
              </div>
            </li>
            <li className="nav-selectable nav-active nav-item">
              <div className="nav-item-div" onClick={logOut}>
                Log Out
              </div>
            </li>
          </ul>
        </div>
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
        <p className="icon">+</p>
        <p>Add Piece</p>
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
