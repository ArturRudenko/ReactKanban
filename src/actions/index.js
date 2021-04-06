export const setColumns = (array) => {
  return {
    type: 'SET_COLUMNS',
    payload: array
  }
}

export const setTasks = (array) => {
  return {
    type: 'SET_TASKS',
    payload: array
  }
}

export const addTask = (data) => {
  return {
    type: 'ADD_TASK',
    payload: data
  }
}

export const removeTask = (id) => {
  return {
    type: 'REMOVE_TASK',
    payload: id
  }
}

export const updateTaskStatus = (data) => {
  return {
    type: 'UPDATE_TASK_STATUS',
    payload: data
  }
}

export const updateTaskContent = (data) => {
  return {
    type: 'UPDATE_TASK_CONTENT',
    payload: data
  }
}

export const setTags = (array) => {
  return {
    type: 'SET_TAGS',
    payload: array
  }
}

export const addTag = (title) => {
  return {
    type: 'ADD_TAG',
    payload: title
  }
}

export const removeTag = (id) => {
  return {
    type: 'REMOVE_TAG',
    payload: id
  }
}

export const updateTagContent = (data) => {
  return {
    type: 'UPDATE_TAG_CONTENT',
    payload: data
  }
}