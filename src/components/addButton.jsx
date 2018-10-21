import React from "react";
import { PlusIcon } from "../icons/ProjectIcons";

const AddButton = props => {
  return (
    <div className="icon" onClick={props.onClick} style={{ cursor: "pointer" }}>
      <PlusIcon />
    </div>
  );
};

export default AddButton;
