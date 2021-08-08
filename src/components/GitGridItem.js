import React from 'react'

export const GitGridItem = ({id, title, url}) => {

    return (
        <div className="card animate__rubberBand">
            <div className="card-img">
                <img src={url} alt={title} />
            </div>
            <p>{title}</p>
        </div>
    )
}
