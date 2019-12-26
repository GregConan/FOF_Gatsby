import React, {Component} from "react";
import '../style/style.css';
import SidebarHeader from "./SidebarHeader"

class Sidebar extends Component {
    
    constructor(props) {
        super(props);

    }
    
    render() { 
        return (
            <div id = "sidebar">
                <h2 className = "titleText">BASIS</h2>
                
                <SidebarHeader text="Epistemology" level="1" color="green" />
                    <SidebarHeader text="Logic" level="2" color="green" />
                <SidebarHeader text="Metaphysics" level="1" color="green" />

            </div>
        )

    }
}

export default Sidebar;