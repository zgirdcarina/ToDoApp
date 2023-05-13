import { ADD_TODO, TOGGLE_TODO } from '../actionsTypes';

// Define the initial state for the reducer
const initialState = {
    todos: [],
};

// Define the reducer function that will handle state updates
const todos = (state = initialState, action) => {
    switch (action.type) {
        // If the action type is ADD_TODO
        case ADD_TODO: {
            // Extract the id and content from the action payload
            const { id, content } = action.payload;
            // Create a new todo object with the extracted data and a completed property set to false
            const newTodo = { content, completed: false, id };
            // Create a new array of todos that includes the new todo object
            const todos = [...state.todos, newTodo];
            // Return a new state object that includes the new todos array
            return { ...state, todos };
        }

        // If the action type is TOGGLE_TODO
        case TOGGLE_TODO: {
            // Extract the id from the action payload
            const { id } = action.payload;
            // Map over the todos array and toggle the completed property of the todo object with the matching id
            const todos = state.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
            // Return a new state object that includes the updated todos array
            return { ...state, todos };
        }

        // If the action type is not recognized, simply return the current state
        default: {
            return state;
        }
    }
};

// Export the reducer function
export default todos;
