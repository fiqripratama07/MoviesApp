const initialState = {
    results : []
};

function SearchReducer(state= initialState, action) {
    const {type, results} = action;
    switch (type) {
        case 'GET_SEARCH_SUCCESS':
            return {...state, results}
        default :
            return state;
    }
}

export default SearchReducer;