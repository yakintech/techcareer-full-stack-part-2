
export const favoriteReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'REMOVE':
            return state.filter(q => q.id != action.payload)
        case 'REMOVE_ALL':
            return []
        default:
            return state
    }

}



