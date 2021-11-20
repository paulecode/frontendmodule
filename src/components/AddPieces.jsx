import React, { useState } from "react";
import fetchComposer from "./FetchHandler";

function AddPieces(props) {

  const [piece, setPiece] = useState({
    composer: "",
    title: "",
    titleExtra: ""
  });
  const [composers, setComposers] = useState([]);

  async function changeHandler(event) {
    const { name, value } = event.target;

    setPiece(prevPiece => {
      return {
        ...prevPiece,
        [name]: value
      };
    });
    const composerFetch = await fetchComposer(value);
    setComposers(composerFetch);

    console.log(composers);
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
          maxLength="15"
          type="text"
          list="composers"
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

      <div id="composers">
        {composers.map((c) => {
          console.log(c)
          return (
            <option value={c}>{c}</option>
          );
        })}
      </div>
    </div>
  );
}

export default AddPieces;
