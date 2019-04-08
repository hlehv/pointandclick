import React from "react";
import "./UsersMenu.css";

class UsersMenu extends React.Component {
    render() {
        return (
            <div className="users-menu">
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                </ul>
            </div>
        );
    }
};
export default UsersMenu;