import React, { useState } from "react";

function AddPieces(props) {

  const [piece, setPiece] = useState({
    composer: "",
    title: "",
    titleExtra: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;

    setPiece(prevPiece => {
      return {
        ...prevPiece,
        [name]: value
      };
    });
  }

  function submitPiece(event) {

    // setPiece({
    //   composer: "",
    //   title: "",
    //   titleExtra: ""
    // });

    let composer = document.querySelector("[name='composer']");
    //let title = document.querySelector("[name='title']");
    //let titleExtra = document.querySelector("[name='titleExtra']");
    //TODO
    if (composer.value === "") return;

    console.log(composer.value);
    composer.value = "";
    props.onAdd(piece);
    console.log(composer.value);
    composer.value = "";



    event.preventDefault();
  }

  return(
    <div className="popup">
      <h1>Add Piece</h1>
      <form>
        <input
          name="composer"
          onChange={changeHandler}
          placeholder="Composer"
          required
          maxLength="2"
          type="text"
        />
        <input
          name="title"
          onChange={changeHandler}
          value={piece.title}
          placeholder="Title"
        />
        <input
          name="titleExtra"
          onChange={changeHandler}
          value={piece.titleExtra}
          placeholder="Title Extra"
        />
        <button
          onClick={submitPiece}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddPieces;
