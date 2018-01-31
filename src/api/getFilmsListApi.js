export default class getFilmsListApi {
    static get() {
        return fetch(' http://www.snagfilms.com/apis/films.json?limit=10').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}