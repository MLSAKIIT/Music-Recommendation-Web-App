import { useState } from "react";
import './ArtistsButton.css'

const Button = (props) => {
  const [isActive, setIsActive] = useState(true);
  const idSendHandler = () => {
    setIsActive((prev) => !prev);
    props.onclick(props.id, isActive);
  };
 
  return (
    
    <button onClick={idSendHandler}  className={`${isActive ? "notselected" : "selected"}`}>
      {props.title}
    </button>

  );
};

export default Button;