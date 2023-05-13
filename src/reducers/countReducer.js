



const initialState = {
    count: 0,
    loading: false,
};

const counterReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'INCREMENTO':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'DECREMENTO':
            return {
                ...state,
                count: state.count - 1,
            };
        case 'INCREMENTO_ASYNC_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'INCREMENTO_ASYNC_SUCCESS':
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default counterReducer;