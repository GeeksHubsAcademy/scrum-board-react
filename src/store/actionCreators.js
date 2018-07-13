const generateId = ( namespace ) => {
    return `${namespace}-${Date.now()}-${Math.round(Math.random()*100)}`
}

export function addNewList(name) {
    return {
        type: 'ADD_LIST',
        newList: {
            "listId": generateId( 'list' ),
            "name": name,
            "tasks": []
        }
    }
}

export function addNewTask(text, listId) {
    return {
        type:'ADD_TASK',
        newTask: {
            "taskId": generateId( 'task' ),
            "text": text,
            "completed": false,
            "color": "white",
            "listId": listId
        }
    }
}

export function removeList(listId) {
    return {
        type: 'REMOVE_LIST',
        listId,
    }
}

export function removeTask(taskId, listId) {
    return {
        type: 'REMOVE_TASK',
        taskId,
        listId
    }
}