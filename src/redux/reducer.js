import { combineReducers } from 'redux'
import filltersReducer from "../components/Filters/FilltersSlide";
import todoListReducer from "../components/TodoList/TodoSlice";
const rootReducer = combineReducers({
    fillters: filltersReducer,
    todoList: todoListReducer
})
export default rootReducer;