import React, {Component} from "react";
import '../style/style.css';

class ReactComp extends React.Component{}
ReactComp.defaultProps = {}

class Hyperlink extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (<span>
        <a href={this.props.to}
         target="_blank" rel="noopener noreferrer">
            {this.props.children}
        </a></span>);
    }

    /*
        const archived = "https://archive.is/?run=1&url=" + this.props.to;
        const archivedStyle = {
            zIndex: 4,
            position: "relative",
            display: (this.props.archived == "hide") ? "none" : "inline-block",
            color: "green",
            verticalAlign: "super",
            fontSize: "0.5em",
        };

        

        <a href={archived} style={archivedStyle}
         target="_blank" rel="noopener">(a)</a>
        </span>
    */
}



Hyperlink.defaultProps = {
    archived: "show"
}

export default Hyperlink;