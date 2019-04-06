import React from "react";
import "./FileExplorer.css";
import { Window } from "../../GuiElements";

class FileExplorer extends React.Component {
    render() {
        return (
            <div className="file-explorer">
                <Window title="File Explorer" contents="File Explorer" close={this.props.close}/>
            </div>
        );
    }
}
export default FileExplorer;