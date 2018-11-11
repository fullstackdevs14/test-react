export const alertInitialState = {
  list: []
}

export default (state = alertInitialState, action) => {
  switch(action.type) {
    case 'ADD_ALERT':
      return {
        ...state,
        list: [
          ...state.list,
          action.data
        ]
      }

    case 'REMOVE_ALERT':
      return {
        ...state,
        list: state.list.filter(alert => alert.id!==action.id)
      }
    
    default:
      return state;
  }
}