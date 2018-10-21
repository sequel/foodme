import React, { Component } from "react";
// import Input from "./common/input";
import Modal from "react-bootstrap4-modal";

class RecipeModalForm extends Component {
  render() {
    const { name, ingredients, link } = this.props;
    return (
      <Modal
        visible={this.props.visible}
        onClickBackdrop={this.modalBackdropClicked}
      >
        <div className="modal-body">
          <h5>Add New Recipe</h5>
          <form align="left">
            <div className="form-group">
              <label>Recipe Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter recipe name"
                value={name || ""}
                onChange={this.props.onNameChange}
              />
            </div>
            <div className="form-group">
              <label>Ingredients</label>
              <textarea
                type="text"
                className="form-control"
                id="ingredients"
                placeholder="Enter ingredients"
                value={ingredients || ""}
                onChange={this.props.onIngredientsChange}
              />
            </div>
            <div className="form-group">
              <label>Link/Reference</label>
              <input
                type="text"
                className="form-control"
                id="link"
                placeholder="Enter link"
                value={link || ""}
                onChange={this.props.onLinkChange}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.props.onClose}
          >
            Close
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.onSave({})}
          >
            Save
          </button>
        </div>
      </Modal>
    );
  }
}

export default RecipeModalForm;
