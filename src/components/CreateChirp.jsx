import React, { useState } from "react";

function CreateChirp(props) {
  const [username, setUsername] = useState("");
  const [chirpText, setChirpText] = useState("");

  let handleChirpText = (e) => {
    setChirpText(e.target.value);
  };

  let handleUsernameText = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <label>name</label>
      <input
        placeholder="what is your name?"
        onChange={handleUsernameText}
      ></input>
      <label>chirp</label>
      <input placeholder="type your message" onChange={handleChirpText}></input>
      <button onClick={() => props.handleSubmitChirp(username, chirpText)}>
        Submit the chirp
      </button>
    </>
  );
}

export default CreateChirp;
