import React, {Component} from "react";
import '../style/style.css';

class Hyperlink extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const archived = "https://archive.is/?run=1&url=" + this.props.to;
        const archivedStyle = {
            zIndex: 4,
            position: "relative",
            display: "inline-block",
            color: "green",
            verticalAlign: "super",
            fontSize: "0.5em",
        };
        return (<span>
        <a href={this.props.to}
         target="_blank" rel="noopener">
            {this.props.children}
        </a>
        <a href={archived} style={archivedStyle}
         target="_blank" rel="noopener">[a]</a>
        </span>);
    }
}

export default Hyperlink;