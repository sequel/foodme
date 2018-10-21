import React from "react";
import { PencilIcon } from "../icons/ProjectIcons";

const EditButton = props => {
  return (
    <div className="icon" onClick={props.onClick} style={{ cursor: "pointer" }}>
      <PencilIcon />
    </div>
  );
};

export default EditButton;
