import {v4 as uuidv4} from 'uuid';

export default function tasks (state = [], action) {
  switch (action.type) {
    case 'SET_TASKS':
      return [
        ...action.payload
      ]
    case 'ADD_TASK':
      return [...state, {
        id: uuidv4(),
        status: action.payload.status,
        date: new Date(),
        tags: action.payload.tags,
        title: action.payload.title,
        text: action.payload.text
      }]
    case 'REMOVE_TASK':
      return [
        ...state.filter(item => item.id !== action.payload)
      ]
    case 'REMOVE_TAG':
      return [
        ...state.map(item => {
          if (item.tags.length < 1) return item
          const updatedTags = item.tags.filter(tag => tag.id !== action.payload)
          return {
            id: item.id,
            status: item.status,
            date: item.date,
            tags: updatedTags,
            title: item.title,
            text: item.text
          }
        })
      ]
    case 'UPDATE_TASK_STATUS':
      return [
        ...state.map(item => {
          if(item.id !== action.payload.id) return item
          return {
            id: item.id,
            status: action.payload.status,
            date: item.date,
            tags: item.tags,
            title: item.title,
            text: item.text
          }
        })
      ]
    case 'UPDATE_TASK_CONTENT':
      return [
        ...state.map(item => {
          if(item.id !== action.payload.id) return item
          return {
            id: item.id,
            status: action.payload.status,
            date: item.date,
            tags: action.payload.tags,
            title: action.payload.title,
            text: action.payload.text
          }
        })
      ]
    case 'UPDATE_TAG_CONTENT':
      return [
        ...state.map(item => {
          if (item.tags.length < 1) return item
          const updatedTags = item.tags.map(tag => {
            if (tag.id !== action.payload.id) return tag
            return action.payload
          })
          return {
            id: item.id,
            status: item.status,
            date: item.date,
            tags: updatedTags,
            title: item.title,
            text: item.text
          }
        })
      ]
    default:
      return state
  }
}
