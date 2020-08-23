import React from 'react'
import '../css/SearchVideoRow.css'

function SearchVideoRow({title, image, channel, subs, views, description, timestamps }) {
    return (
        <div className="searchvideorow">
            <img className="thumbnail" src={image} alt={channel} />
            <div className="searchvideorow__text">
                <h4>{title}</h4>
                <p className="searchvideorow__headline">
                    {channel } . <span className="subsciber">
                    <span className="subscriberNo">{ subs }</span> subscribers</span> . {views} views . {timestamps}
                </p>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default SearchVideoRow
