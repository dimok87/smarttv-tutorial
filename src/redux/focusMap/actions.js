export const addToFocusMap = (id, instance, isFocus, inRow) => ({
  type: 'ADD_TO_FOCUS_MAP',
  payload: {
    id,
    instance,
    isFocus,
    inRow,
  },
})

export const removeFromFocusMap = (id) => ({
  type: 'REMOVE_FROM_FOCUS_MAP',
  payload: {
    id
  },
})

export const moveFocusMap = (direction) => (
  (dispatch, getState) => {
    const next = nextFocusCalculate(getState, direction);
    dispatch(setFocusMap(next));
  }
)

const setFocusMap = (next) => ({
  type: 'SET_FOCUS_MAP',
  payload: next,
})

const nextFocusCalculate = (getState, direction) => {
  const focusMap = getState().focusMap;

  let vertIndex = 0;
  let horIndex = 0;

  for (let i = 0; i < focusMap.length; i++) {
    const index = focusMap[i].findIndex(item => item.isFocus);
    if (index !== -1) {
      vertIndex = i;
      horIndex = index;
      break;
    }
  }

  focusMap[vertIndex][horIndex].component.setBlur()

  switch (direction) {
    case "LEFT":
      horIndex = horIndex > 0 ? horIndex - 1 : focusMap[vertIndex].length - 1;
      break;
    case "UP":
      vertIndex = vertIndex > 0 ? vertIndex - 1 : focusMap.length - 1;
      horIndex = 0;
      break;
    case "RIGHT":
      horIndex = horIndex < focusMap[vertIndex].length - 1 ? horIndex + 1 : 0;
      break;
    case "DOWN":
      vertIndex = vertIndex < focusMap.length - 1 ? vertIndex + 1 : 0;
      horIndex = 0;
      break;
    default:
      break;
  }

  focusMap[vertIndex][horIndex].component.setFocus()

  return {
    vertIndex,
    horIndex,
  }
}
