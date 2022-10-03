export const addToFavoritesAction = (data) => {

    return {
        type: 'ADD',
        payload: data
    }
}


export const removeToFavoritesAction = (id) => {

    return {
        type:'REMOVE',
        payload: id
    }
}