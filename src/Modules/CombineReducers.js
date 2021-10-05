import {combineReducers} from 'redux';
import DetailReducer from "./Detail/DetailReducer";
import ListMoviesReducer from "./List/ListMoviesReducer";
import SearchReducer from "./Search/SearchReducer";


export default combineReducers({
    detail : DetailReducer,
    listMovies: ListMoviesReducer,
    search: SearchReducer
})