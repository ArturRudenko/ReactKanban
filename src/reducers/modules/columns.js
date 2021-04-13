export default function columns (state = [], action) {
  switch (action.type) {
    case 'SET_COLUMNS':
      return [
        ...action.payload
      ]
    default:
      return state
  }
}
