import React from 'react'

const Film = (props) => {
    const { film } = props;
    return (
        <div className = "filmimages">
            <img src={film.images.image[0].src} alt={film.title} />
            <div className="filmtitle">
                <h3>{film.title}</h3>
                <p><strong>Duration: </strong>{film.durationMinutes} minutes {film.durationSeconds} seconds </p>
            </div>
        </div>
    )
}

export default Film