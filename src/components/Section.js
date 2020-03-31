import React, {Component} from "react";
import '../style/style.css';

class Section extends Component {
    
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
        const containerStyle = {
            backgroundImage: "linear-gradient(to right, #EEC1FF, white)",
            borderStyle: "solid",
            borderRadius: "15px", 
            listStylePosition: "inside",
            margin: "10px",
            cursor: "pointer",
            padding: "10px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
        };

        const textStyle = {
            display: this.state.shown ? "block" : "none",
        };

        return (
        <div>
            <div id={this.props.id} style={containerStyle} onClick={this.toggleShown}> 
                <p>{this.props.num}. {this.props.summary}</p>
            </div>
            <div style={textStyle}>
                {this.props.children}
            </div>
        </div>     
        )
    }
}

export default Section;