const initialState = {
    data : []
};

function ListMoviesReducer(state= initialState, action) {
    const {type, data} = action;
    switch (type) {
        case 'GET_LIST_SUCCESS':
            return {...state, data}
        default :
            return state;
    }
}

export default ListMoviesReducer;