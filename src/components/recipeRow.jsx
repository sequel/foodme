import React from "react";
import EditButton from "./editButton";
import AddButton from "./addButton";
import DeleteButton from "./deleteButton";

const RecipeRow = ({
  name,
  ingredients, // TODO: use for ingredients tags
  isNewRow,
  onAdd,
  onDelete,
  onEdit
}) => {
  return (
    <tr align="left">
      <td>{name ? name : "Add a new recipe..."}</td>
      <td align="right">
        <div>
          {!isNewRow && <EditButton onClick={() => onEdit(name)} />}
          {isNewRow ? (
            <AddButton onClick={onAdd} />
          ) : (
            <DeleteButton onClick={() => onDelete(name)} />
          )}
        </div>
      </td>
    </tr>
  );
};

export default RecipeRow;
