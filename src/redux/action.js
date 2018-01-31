import getFilmsListApi from '../api/getFilmsListApi';

export function getFilmsList(){
    return (dispatch, getState) => {
     const promise = getFilmsListApi.get();
     promise.then((response) => {
        let data = response.films.film;        
        dispatch({
            type: 'LOAD_FILMS',
            payload: {
                data: data
            }
            
        })
     })
    }
}