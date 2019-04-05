import React from "react";
import "./Desktop.css";
import Image from "../../images/testbg.jpg";
import { Sidebar, Dock, Window } from "../../GuiElements";
import { FileExplorer, WebBrowser } from "../../Applications";

/**
 * @TODO Applications array
 */

const styles = {
    background: {
        backgroundImage: `url(${Image})`
    }
};

class Desktop extends React.Component {
    // state = {
    //     openApplications: [<FileExplorer />]
    // };
    render() {
        return (
            <div className="desktop">
                <div className="background" style={styles.background}></div>
                <Sidebar />
                <Dock />
                <WebBrowser />
            </div>
        );
    }
}

export default Desktop;