export const toggleSidepanel = () => ({
  type: 'TOGGLE_SIDEPANEL'
});

export const removeAlert = (id) => ({
  type: 'REMOVE_ALERT',
  id
});

let alertId = 0;
export const addAlert = (title, subtitle, message) => ({
  type: 'ADD_ALERT',
  data: {
    id: alertId ++,
    title,
    subtitle,
    message
  }
})