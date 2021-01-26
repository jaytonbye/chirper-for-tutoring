import React from "react";

function Chirp(props) {
  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body" style={{ backgroundColor: "lightGrey" }}>
          <h5 className="card-title" style={{ color: "black" }}>
            {props.username}
          </h5>
          <p className="card-text">{props.chirpText}</p>
          <button onClick={handleEdit}>Edit this chirp</button>
          <button
            onClick={() => props.handleDeleteChirp(props.deleteReference)}
          >
            Delete this chirp
          </button>
        </div>
      </div>
    </>
  );
}

export default Chirp;
