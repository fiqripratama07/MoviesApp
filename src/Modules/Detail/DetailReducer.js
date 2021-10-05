const initialState = {
    data : {}
};

function DetailReducer(state= initialState, action) {
    const {type, data} = action;
    switch (type) {
        case 'GET_DETAIL_SUCCESS':
            return {...state, data}
        default :
            return state;
    }
}

export default DetailReducer;