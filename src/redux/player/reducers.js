export default (state = {
  duration: 0,
  currentTime: 0,
  isPlaying: false
}, action) => {
  switch (action.type) {
    case 'SET_DURATION':
      return {
        ...state,
        duration: action.payload
      }
    case 'SET_PLAYING':
      return {
        ...state,
        isPlaying: action.payload
      }
    case 'SET_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.payload
      }
    default:
      return state
  }
}
