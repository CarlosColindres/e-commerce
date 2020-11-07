const INITIAL_USER = {
    currentUser: null
}

export const userReducer = (state= INITIAL_USER, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}