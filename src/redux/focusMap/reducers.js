export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_FOCUS_MAP':
      if (action.payload.inRow) {
        return state.map((row, i) => (
          i === state.length - 1 ? [...row, {
            id: action.payload.id,
            component: action.payload.instance,
            isFocus: action.payload.isFocus,
          }] : row
        ))
      }
      return [
        ...state, [{
          id: action.payload.id,
          component: action.payload.instance,
          isFocus: action.payload.isFocus,
        }]
      ];
    case 'REMOVE_FROM_FOCUS_MAP':
      for (let i = 0; i < state.length; i++) {
        const index = state[i].findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          return [
            ...state.slice(0, i),
            ...state.slice(i + 1)
          ];
        }
      }
      return state;
    case 'SET_FOCUS_MAP':
      const {
        vertIndex,
        horIndex
      } = action.payload;

      return state.map((first, i) => (
        first.map((secondary, j) => (
          Object.assign({}, secondary, {
            isFocus: j === horIndex && i === vertIndex,
          })
        ))
      ));
    default:
      return state
  }
}
