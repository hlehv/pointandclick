import React from "react";
import "./FileExplorer.css";
import { Window } from "../../GuiElements";

class FileExplorer extends React.Component {
    render() {
        return (
            <div className="file-explorer">
                <Window title="File Explorer" contents="File Explorer"/>
            </div>
        );
    }
}
export default FileExplorer;