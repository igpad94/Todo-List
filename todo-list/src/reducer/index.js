import { ADD_TODO, DELETE_TODO, FILTER_TODOS, UPDATE_PRIORITY, UPDATE_STATE } from "../actions/types";

const initialState = {
    todos: [],
    filteredTodos: []
}

export default function rootReducer(state = initialState, action){

    switch(action.type){
        case ADD_TODO: 
            return {
                ...state,
                todos: state.todos.concat(action.payload),
                filteredTodos: state.filteredTodos.concat(action.payload)
            };
        case DELETE_TODO: 
            return {
                ...state,
                todos: state.todos.filter((t) => t.id !== action.payload),
                filteredTodos: state.filteredTodos.filter((t) => t.id !== action.payload)
            };
        case UPDATE_STATE: 
            return {
                ...state,
                todos: state.todos.map(e => e.id === action.payload.id ? e.state = action.payload.state : null),
                filteredTodos: state.filteredTodos.map(e => e.id === action.payload.id ? e.state = action.payload.state : null)
            };
        case UPDATE_PRIORITY: 
            return {
                ...state,
                todos: state.todos.map(e => e.id === action.payload.id ? e.priority = action.payload.priority : null),
                filteredTodos: state.filteredTodos.map(e => e.id === action.payload.id ? e.priority = action.payload.priority : null)
            };
        case FILTER_TODOS: 
            return {
                ...state,
                filteredTodos: state.todos.filter((t) => t.priority.includes(action.payload.priority) && t.state.includes(action.payload.state))
            };
        default: 
        return state;
    }
}