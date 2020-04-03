import React, { Component } from 'react';
import MenuButton from "./MenuButton"

class MenuButtonRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    <MenuButton text={this.props.text} to={this.props.to} />
                </td>
            </tr>
        );
    }
}

export default MenuButtonRow;