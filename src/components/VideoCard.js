import React from 'react'
import '../css/videocart.css'
import Avatar from '@material-ui/core/Avatar'
function VideoCard({image, channelImage,title, channel, views, timestamp}) {
    return (
        <div className="videocard">
            <img className="thumbnail" alt="" src={image} />
            <div className="videocard__info">
                <Avatar 
                    className="videocard__avatar"
                    alt= {channel}
                    src = {channelImage}
                />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views}. {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
