export const setDuration = (duraton) => ({
  type: 'SET_DURATION',
  payload: duraton,
})

export const setPlaying = (isPlaying) => ({
  type: 'SET_PLAYING',
  payload: isPlaying,
})

export const setCurrentTime = (currentTime) => ({
  type: 'SET_CURRENT_TIME',
  payload: currentTime,
})
