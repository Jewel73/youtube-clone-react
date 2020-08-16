import React from 'react'
import '../css/Header.css'
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import VideoCallIcons from '@material-ui/icons/VideoCall'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon  />
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Hello"/>
            </div>

            <div className="header__input">
                <input placeholder="search" type="text"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__icons">
                <VideoCallIcons className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar className="header__icon"/>
            </div>
        </div>
    )
}

export default Header
