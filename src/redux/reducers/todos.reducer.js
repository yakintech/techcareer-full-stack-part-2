export const todoReducer = (state = [], action) => {

        switch (action.type) {
            case 'ADD_TO_ARCHIVE':
                return [...state, action.payload]
            case 'REMOVE_TO_ARCHIVE':
                return state.filter(q => q.id != action.payload)
            case 'REMOVE_ALL':
                return [];
            default:
                return state;
        }
}