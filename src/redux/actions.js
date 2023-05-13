import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionsTypes';

// Start id at 0
let nextTodoId = 0;

// Action creator for adding a new todo item
export const addToDo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId, // Assign unique id to new todo item
        content
    }
});

// Action creator for toggling the completed status of a todo item
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

// Action creator for setting the visibility filter
export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
});
