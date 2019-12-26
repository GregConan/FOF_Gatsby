import React, {Component} from "react";
import '../style/style.css';

class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shown: false,
        };
        this.toggleShown = this.toggleShown.bind(this);
    }

    toggleShown() {
        this.setState({shown: (!this.state.shown)});
    }

    render() { 
        const noteStyle = {
            display: this.state.shown ? "inline-block" : "none",
            zIndex: 5,
            position: "relative",
            minWidth: "300px",
        };
        const noteNumStyle = {
            display: this.state.shown ? "none" : "inline-block",
            zIndex: 4,
            position: "relative"
        };

        return (
            <span className="note"
            onClick={this.toggleShown}
            >
                <span style={noteNumStyle}
                >[{this.props.num}]</span>

                <span className="notetext"
                style={noteStyle}
                >
                    <strong>{this.props.num}. </strong>
                    {this.props.children}
                </span>
            </span>
        )
    }
}

export default Note;