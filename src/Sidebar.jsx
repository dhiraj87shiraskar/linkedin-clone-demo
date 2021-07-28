import React from 'react'
import { Avatar } from "@material-ui/core";
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Dhiraj Shiraskar</h2>
                <h4>dhirajkumarshiraskar@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p> Who views you</p>
                    <p className="sidebar__statNumber">2,369</p>
                </div>
                <div className="sidebar__stat">
                <p> View on post</p>
                    <p className="sidebar__statNumber">2,444</p>
                </div>
            </div>

            <div className="sidebar__button">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar
