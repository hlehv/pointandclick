import React from "react";
import "./Desktop.css";
import Image from "../../images/testbg.jpg";
import { Sidebar, Dock } from "../../GuiElements";

const styles = {
    background: {
        backgroundImage: `url(${Image})`
    }
};
class Desktop extends React.Component {
    state = {
        openApp: null
    };
    render() {
        return (
            <div className="desktop">
                <div className="background" style={styles.background}></div>
                {/* <Sidebar /> */}
                <Dock openApplication={this.startApplication} closeApplication={this.closeApplication}/>
                { this.state.openApp }
            </div>
        );
    }
    startApplication = app => {
        this.setState({
            openApp: app
        });
    }
    closeApplication = () => {
        this.setState({
            openApp: null
        });
    }
}

export default Desktop;