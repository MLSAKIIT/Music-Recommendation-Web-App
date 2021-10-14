import { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [isActive, setIsActive] = useState(true);
  const idSendHandler = () => {
    setIsActive((prev) => !prev);
    props.onclick(props.id, isActive);
  };
  return (
    <button onClick={idSendHandler} className={`${isActive ? "" : "selected"}`}>
      {props.title}
    </button>
  );
};

export default Button;
