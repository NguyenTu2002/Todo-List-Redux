const initState = {
        search: '',
        status: 'All',
        priority: []
};
const filltersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'fillters/searchFillterChange':
            return {
                ...state,
                search: action.payload
            }
        default: return state
    };
};
export default filltersReducer;