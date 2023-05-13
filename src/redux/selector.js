import { VISIBILITY } from "../constants";

export const getTodosByVisibilityFilter = (store, visibility) => {
    switch(visibility) {
        case VISIBILITY.COMPLETED:
            return store.todos.filter(todo => todo.completed);
        case VISIBILITY.ACTIVE:
            return store.todos.filter(todo => !todo.completed);
        default:
            return store.todos;
    }
}

