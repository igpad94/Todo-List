import { ADD_TODO, DELETE_TODO, FILTER_TODOS, SET_PAGE, UPDATE_PRIORITY, UPDATE_STATE } from "../actions/types";

const initialState = {
    todos: [],
    filteredTodos: [],
    currentPage: 1
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
        const oldState = state.todos
        const filteredOldState = state.filteredTodos
        const updatedState = oldState.map(t => {
        if (t.id === action.payload.id) {
          return {...t, state: action.payload.state};
        }
        return t;
      });
        const updatedFilteredState = filteredOldState.map(t => {
        if (t.id === action.payload.id) {
          return {...t, state: action.payload.state};
        }
        return t;
      });
        return {
            ...state,
            todos: updatedState,
            filteredTodos: updatedFilteredState
        };
        case UPDATE_PRIORITY: 
            const oldPriority = state.todos
            const filteredOldPriority = state.filteredTodos
            const updatedPriority = oldPriority.map(t => {
            if (t.id === action.payload.id) {
              return {...t, priority: action.payload.priority};
            }
            return t;
          });
            const updatedFilteredPriority = filteredOldPriority.map(t => {
            if (t.id === action.payload.id) {
              return {...t, priority: action.payload.priority};
            }
            return t;
          });
            return {
                ...state,
                todos: updatedPriority,
                filteredTodos: updatedFilteredPriority
            };
        case FILTER_TODOS: 
            return {
                ...state,
                filteredTodos: state.todos.filter((t) => t.priority.includes(action.payload.priority) && t.state.includes(action.payload.state))
            };
        case SET_PAGE: 
            return {
                ...state,
                currentPage: action.payload
            };
        default: 
        return state;
    }
}