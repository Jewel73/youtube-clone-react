import React from 'react'
import '../css/sidebar.css'
import SidebarComponent from './SidebarComponent'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined' 


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarComponent selected Icon={HomeIcon} title="Home"/>
            <SidebarComponent Icon={WhatshotIcon} title="Tendings"/>
            <SidebarComponent  Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr/>
            <SidebarComponent Icon={VideoLibraryIcon} title="Library"/>
            <SidebarComponent Icon={HistoryIcon} title="History"/>
            <SidebarComponent Icon={OndemandVideoIcon} title="Your Videos"/>
            <SidebarComponent Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarComponent Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            <SidebarComponent Icon={ExpandMoreOutlinedIcon} title="Show More"/>
            <hr/>
        </div>
    )
}

export default Sidebar
