import React, { Component } from 'react';
import Clickdown from "./Clickdown"

class DropdownMenu extends Component {
  render() {
    return (<div style={{height: "100%", width: "100%"}}>
      <Clickdown text={this.props.title} style={{
          display: "flex", wordWrap: "break-word"
      }}>
        <table>
          <thead>
            <tr>
              <th>{this.props.col1}</th>
              <th>{this.props.col2}</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </Clickdown>
    </div>);
  }
}

export default DropdownMenu;