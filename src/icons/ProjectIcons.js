import React from "react";
import { withBaseIcon } from "react-icons-kit";
import { checkboxChecked } from "react-icons-kit/icomoon";
import { checkboxUnchecked } from "react-icons-kit/icomoon";
import { pencil } from "react-icons-kit/icomoon";
import { minus, plus } from "react-icons-kit/icomoon";

const SideIconContainer = withBaseIcon({ size: 16 });

export const CheckboxCheckedIcon = () => (
  <SideIconContainer icon={checkboxChecked} />
);
export const CheckboxUncheckedIcon = () => (
  <SideIconContainer icon={checkboxUnchecked} />
);
export const PencilIcon = () => <SideIconContainer icon={pencil} />;

export const MinusIcon = () => <SideIconContainer icon={minus} />;

export const PlusIcon = () => <SideIconContainer icon={plus} />;
