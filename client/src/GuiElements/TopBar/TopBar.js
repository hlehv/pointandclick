import React from "react";
import "./TopBar.css";
import { UsersMenu } from "./Menus";

class TopBar extends React.Component {
    state = {
        tabs: {
            "Users": <UsersMenu logout={this.props.logout} />
        },
        openMenu: null
    };
    render() {
        return (
            <div className="top-bar">
                <ul className="tabs">
                    { Object.keys(this.state.tabs).map( (tab, index) => (
                        <li className="tab" key={index} onClick={ () => this.openMenu(tab) }>
                            { tab }
                        </li>
                    )) }
                </ul>
                <div className="open-menu" onMouseLeave={() => this.setState({ openMenu: null })}>
                    { this.state.openMenu }
                </div>
            </div>
        );
    }
    openMenu = tab => {
        if(this.state.openMenu != null)
            this.setState({ openMenu: null });
        else
            this.setState({ openMenu: this.state.tabs[tab] });
    }
}

export default TopBar;