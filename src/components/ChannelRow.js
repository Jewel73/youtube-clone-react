import React from 'react'
import '../css/ChannelRow.css'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineRounded'
import {Avatar} from '@material-ui/core'
function ChannelRow({channel, image, description, verified, subs, noOfVideos}) {
    return (
        <div className="channelrow">
            <Avatar alt={channel} src={image} className="channelrow__logo"/>
            <div className="channelrow__info">
                <h4>
                    {channel} {verified && <VerifiedIcon className="verificatinon"/>}
                    </h4>
                <p>
                    {subs} subscribers . {noOfVideos} videos
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow
