import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.fillters.search;

export const todoListSelectors = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
    todoListSelectors,
    searchTextSelector,
    (todoList, searchText) => {
        return todoList.filter((todo) => {
            return todo.name.includes(searchText)
        })
    })