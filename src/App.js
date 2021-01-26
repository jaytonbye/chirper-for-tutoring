import react, { useState } from "react";
import Chirp from "./components/Chirp";
import CreateChirp from "./components/CreateChirp";

function App() {
  const [createChirp, setCreateChirp] = useState(true);
  const [chirpArray, setChirpArray] = useState([]);

  let handleClick = () => {
    setCreateChirp(!createChirp);
  };

  let handleSubmitChirp = (usernameInput, chirpTextInput) => {
    let newChirpsArray = [
      {
        username: usernameInput,
        chirpText: chirpTextInput,
      },
      ...chirpArray,
    ];
    setChirpArray(newChirpsArray);
    setCreateChirp(!createChirp);
  };

  let handleDeleteChirp = (deleteReference) => {
    let newArray = chirpArray;
    newArray.splice(deleteReference, 1);
    setChirpArray(newArray);
    console.log(deleteReference);
  };

  if (createChirp) {
    return (
      <>
        <button onClick={handleClick}>view chirps</button>
        <CreateChirp handleSubmitChirp={handleSubmitChirp} />
      </>
    );
  } else {
    return (
      <>
        <button onClick={handleClick}>create chirp</button>
        {chirpArray.map((item, index) => {
          return (
            <Chirp
              handleDeleteChirp={handleDeleteChirp}
              key={index}
              deleteReference={index} //I believe this is a dangerous/sloppy way to code this, i'm not sure what I could do differently.
              username={item.username}
              chirpText={item.chirpText}
            />
          );
        })}
      </>
    );
  }
}

export default App;
