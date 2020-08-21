import React from 'react'
import '../css/sidebarComponent.css'

function SidebarComponent({selected, Icon, title}) {
    return (
        <div>
            <div className={`sidebarComponent ${selected && "selected"}`}>
                <Icon className="sidebarComponent__icon" />
                <h3 className="sidebarComponent__title">{title}</h3>
            </div>
        </div>
    )
}

export default SidebarComponent
