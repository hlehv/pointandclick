import React from "react";
import "./UsersMenu.css";

class UsersMenu extends React.Component {
    render() {
        return (
            <div className="users-menu">
                <ul>
                    <li className="usersContainer">
                        <div className= "userProfileImg"/>
                        <div className= "profile-description">User 1</div>
                    </li>


                    <li>User 2</li>
                    <li>User 3</li>
                </ul>
            </div>
        );
    }
};
export default UsersMenu;