import { ADD_TODO, DELETE_TODO, FILTER_TODOS, SET_PAGE, UPDATE_PRIORITY, UPDATE_STATE } from "./types";

let todoId = 0

export function addTodo (todo) {
    return {
        type: ADD_TODO,
        payload: {
            description: todo.description,
            title: todo.title,
            priority: todo.priority,
            state: todo.state,
            id: todoId ++
        }
    }
}
export function deleteTodo (payload) {
    return {
        type: DELETE_TODO,
        payload
    }
}
export function setPage (payload) {
    return {
        type: SET_PAGE,
        payload
    }
}
export function filterTodos (filter) {
    return {
        type: FILTER_TODOS,
        payload: {
            priority: filter.priority,
            state: filter.state
        }
    }
}

export function updateState (id, state) {
    return {
        type: UPDATE_STATE,
        payload : {
            id,
            state
        }
    }
}
export function updatePriority (id, priority) {
    return {
        type: UPDATE_PRIORITY,
        payload : {
            id,
            priority
        }
    }
}
