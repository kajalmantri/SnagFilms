import React from 'react'
import Film from './Film';
const FilmsList = (props) => {
    const { films } = props;
    return (
        <div>
            <div className="filmlist">
                {
                    films.map((film, i) => {
                        return (
                            <Film film={film} key={film.id} />
                        )
                    })
                }
                </div>
        </div>
    )
}

export default FilmsList