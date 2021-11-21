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
    let title = document.querySelector("[name='title']");
    let titleExtra = document.querySelector("[name='titleExtra']");

    if (composer.value === "" || title.value === "") return;

    props.onAdd(piece);

    composer.value = "";
    title.value = "";
    titleExtra.value = "";
    setComposers([]);


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
          maxLength="15"
          type="text"
          list="composers"
          className="logintextfield"
          required
        />
        <input
          name="title"
          onChange={changeHandler}
          placeholder="Title"
          maxLength="25"
          className="logintextfield"
          required
        />
        <input
          name="titleExtra"
          onChange={changeHandler}
          placeholder="Title Extra"
          maxLength="25"
          className="logintextfield"

        />
        <button
          onClick={submitPiece}
          type="submit"
          className="loginbutton"
        >
          Add
        </button>
      </form>

      <dataList id="composers">
        {composers.map((c) => {
          console.log(c)
          return (
            <option value={c}>{c}</option>
          );
        })}
      </dataList>
    </div>
  );
}

export default AddPieces;
