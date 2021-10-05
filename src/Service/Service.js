import Api from "../Api/Api";

export async function getMoviesDataInitialSearch() {
    return Api.get(`?apikey=f46641f3&s=Batman`)
        .then(response => response.data)
        .catch(err => console.error(err));
};

export async function getMoviesDataBySearch(search) {
    return Api.get(`?apikey=f46641f3&s=${search}`)
        .then(response => response.data)
        .catch(err => console.error(err));
}

export async function getMoviesDataByTitle(title) {
    return Api.get(`?apikey=f46641f3&t=${title}`)
        .then(response => response.data)
        .catch(err => console.error(err));
}