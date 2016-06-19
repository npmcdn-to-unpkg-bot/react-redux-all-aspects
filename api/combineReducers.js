import { combineReducers, createStore } from 'redux';

function visibilityFilter(action, state = 'SHOW_ALL') {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(action, state = []) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          complete: true
        }
      ];
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index == action.index) {
          return Object.assign({}, todo, {
            complete: true
          })
        }
        return todo;
      });
    default:
      return state;
  }
}

let reducer = combineReducers({visibilityFilter, todos});
let store = createStore(reducer);