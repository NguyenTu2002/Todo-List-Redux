export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
};
export const searchFillterChange = (text) => {
    return {
        type: 'fillters/searchFillterChange',
        payload: text
    }
}
export const stateFilltersChange = (status) => {
    return {
        type: 'fillters/stateFilltersChange',
        payload: status
    }
}

