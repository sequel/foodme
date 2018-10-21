import React from "react";
import { MinusIcon } from "../icons/ProjectIcons";

const DeleteButton = props => {
  return (
    <div className="icon" onClick={props.onClick} style={{ cursor: "pointer" }}>
      <MinusIcon />
    </div>
  );
};

export default DeleteButton;
