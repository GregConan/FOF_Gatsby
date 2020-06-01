import React, {Component} from "react";
// import '../style/style.css';

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
            display: this.state.shown ? "block" : "none",
            zIndex: 5,
            position: "relative",
            minWidth: "300px",
            padding: "30px 30px 30px 30px",
            fontWeight: "normal",
            color: "black",
            borderRadius: "10px",
            backgroundImage: "linear-gradient(to right, #e8f7ff, white)",
            cursor: "pointer",
        };
        const noteNumStyle = {
            display: this.state.shown ? "none" : "inline-block",
            zIndex: 4,
            position: "relative",
            fontWeight: "bold",
            cursor: "pointer",
            verticalAlign: "super",
            fontSize: "0.5em"
        };

        return (
            <span onClick={this.toggleShown}
            >
                <span style={noteNumStyle}
                 className="note"
                >&nbsp;[{this.props.num}]</span>
                
                <span style={noteStyle}>
                    <strong>Note {this.props.num}. </strong>
                    {this.props.children}
                </span>
            </span>
        )
    }
}

/*
.note .notetext {
	font-weight: normal;
	color: black;
	display: none;
	font-size: 1.75em;
	border-radius: 10px;
	background-image: linear-gradient(to right, #D9F1FF, white);
	position: absolute;
	min-width: 300px;
	z-index: 5;
}

.note:onclick .notetext {
	display: block;
}

*/

export default Note;