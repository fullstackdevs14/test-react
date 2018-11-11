export const uiInitialState = {
  sidepanel: false
}

export default (state = uiInitialState, action) => {
  switch(action.type) {
    case 'TOGGLE_SIDEPANEL':
      return {
        ...state,
        sidepanel: !state.sidepanel
      }

    default:
      return state;
  }
}
