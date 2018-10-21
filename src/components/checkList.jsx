import React, { Component } from "react";
import Checkbox from "./checkbox";

class CheckList extends Component {
  state = {
    items: [
      { name: "eggs", isChecked: false },
      { name: "milk", isChecked: false },
      { name: "water", isChecked: false },
      { name: "soda", isChecked: false },
      { name: "chips", isChecked: false },
      { name: "rice", isChecked: false },
      { name: "noodles", isChecked: false }
    ]
  };

  handleClick = item => {
    const items = [...this.state.items];
    const index = items.map(i => i.name).indexOf(item.name);
    items[index].isChecked = !items[index].isChecked;
    this.setState(items);
  };

  render() {
    return (
      <div className="container">
        <h3 className="title">Grocery List</h3>
        <table className="table">
          <tbody>
            {this.state.items.map(item => (
              <tr align="left" key={item.name}>
                <td>{item.name}</td>

                <td align="right">
                  <Checkbox
                    onClick={() => this.handleClick(item)}
                    isChecked={item.isChecked}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CheckList;
