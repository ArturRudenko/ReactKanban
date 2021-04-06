import {v4 as uuidv4} from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'SET_TAGS':
      return [
        ...action.payload
      ]
    case 'ADD_TAG':
      return [...state, {
        id: uuidv4(),
        title: action.payload,
        color: '#FFFFFF',
        description: 'new tag'
      }]
    case 'REMOVE_TAG':
      return [
        ...state.filter(item => item.id !== action.payload)
      ]
    case 'UPDATE_TAG_CONTENT':
      return [
        ...state.map(tag => {
          if(tag.id !== action.payload.id) return tag
          return {
            id: tag.id,
            title: action.payload.title,
            color: action.payload.color,
            description: action.payload.description
          }
        })
      ]
    default:
      return state
  }
}