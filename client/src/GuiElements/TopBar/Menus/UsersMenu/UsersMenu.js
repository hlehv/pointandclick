import React from "react";
import "./UsersMenu.css";

class UsersMenu extends React.Component {
    render() {
        return (
            <div className="users-menu">
                <ul>
                    <li>User 1 | <span className="logout" onClick={() => this.props.logout()}>Logout</span></li>
                    <li>User 2 | <span className="logout" onClick={() => this.props.logout()}>Logout</span></li>
                    <li>User 3 | <span className="logout" onClick={() => this.props.logout()}>Logout</span></li>
                </ul>
            </div>
        );
    }
};
export default UsersMenu;