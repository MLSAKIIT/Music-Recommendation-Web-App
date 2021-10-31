import { useState } from "react";
import classes from'./ArtistsButton.module.css'

const Button = (props) => {
  const [isActive, setIsActive] = useState(true);
  const idSendHandler = () => {
    setIsActive((prev) => !prev);
    props.onclick(props.id, isActive);
  };
 const parentClasses = props.className;
  return (
    
    <button onClick={idSendHandler}  className={parentClasses}>
      {props.title}
    </button>

  );
};

export default Button;