import React from "react";
import "./Desktop.css";
import Image from "../../images/testbg.jpg";
import { Sidebar, Dock } from "../../GuiElements";
import { FileExplorer, WebBrowser } from "../../Applications";

/**
 * @TODO Make dock open applications
 */

const styles = {
    background: {
        backgroundImage: `url(${Image})`
    }
};
class Desktop extends React.Component {
    state = {
        openApplication: <WebBrowser />
    };
    render() {
        return (
            <div className="desktop">
                <div className="background" style={styles.background}></div>
                <Sidebar />
                <Dock />
                { this.state.openApplication }
            </div>
        );
    }
}

export default Desktop;