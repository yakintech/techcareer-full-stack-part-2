import { combineReducers } from "redux";
import { favoriteReducer } from "./favorites.reducer";
import { todoReducer } from "./todos.reducer";



export default combineReducers({
    todoReducer,
    favoriteReducer
})