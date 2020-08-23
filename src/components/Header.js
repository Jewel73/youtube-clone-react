import React, {useState} from 'react'
import '../css/Header.css'
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import VideoCallIcons from '@material-ui/icons/VideoCall'
import {Link} from 'react-router-dom'

function Header() {
    const [inputSearch, setInputSearch] = useState("")

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon  />
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Hello"/>
                </Link>
            </div>

            <div className="header__input">
                <input 
                    
                    onChange={(e)=> setInputSearch(e.target.value)} 
                    value={inputSearch} 
                    placeholder="search" 
                    type="text"/>

                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__searchIcon" />
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcons className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar className="videocard__avatar" src="https://yt3.ggpht.com/a-/AOh14GiGpNUkPFcrBW33qW87cVqtEKJriSok7CN4GRWK5Q=s88-c-k-c0xffffffff-no-rj-mo" className="header__icon"/>
            </div>
        </div>
    )
}

export default Header
