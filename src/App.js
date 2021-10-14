import React, { useState } from "react";
import artistsName from "./artists";
import Button from "./Components/UI/Button";

function App() {
  const [AR, setAR] = useState([]);
  const onclickHandler = (id, active) => {
    if (active) {
      setAR((prevState) => [...new Set([id, ...prevState])]);
    } else {
      setAR((prevState) => {
        return prevState.filter((i) => i !== id);
      });
    }
  };
  let an = artistsName.filter((ar) => ar.id <= 5);
  let content = an.map((artist) => (
    <Button
      onclick={onclickHandler}
      title={artist.artists}
      id={artist.id}
      key={artist.id}
    />
  ));
  return (
    <div>
      {content}
      {AR}
    </div>
  );
}

export default App;
