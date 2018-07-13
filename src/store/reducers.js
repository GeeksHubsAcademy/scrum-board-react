const initialState = {
    lists: [],
    
};

function reducer( state = initialState, action ) {
    switch ( action.type ) {
    case 'ADD_LIST':
        return { ...state,
            lists: [
                ...state.lists,
                action.newList
            ]
        }
    case 'ADD_TASK':
        return { ...state,
            lists: state.lists.map( list => {
                if ( list.listId === action.newTask.listId ) {
                    list.tasks.push( action.newTask )
                }
                return list
            } )
        }
    case 'REMOVE_LIST':

        return { ...state,
            lists: state.lists.filter( list => list.listId !== action.listId )
        }
    case 'REMOVE_TASK':

        return { ...state,
            lists: state.lists.map( list => {
                if ( list.listId === action.listId ) {
                    list.tasks = list.tasks.filter( task => task.taskId !== action.taskId )
                }
                return list
            } )
        }
    default:
        break;
    }
    return state
}

export default reducer;