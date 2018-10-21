import React from "react";
import {
  CheckboxCheckedIcon,
  CheckboxUncheckedIcon
} from "../icons/ProjectIcons";

const Checkbox = props => {
  return (
    <div class="icon" onClick={props.onClick}>
      {props.isChecked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
    </div>
  );
};

export default Checkbox;
