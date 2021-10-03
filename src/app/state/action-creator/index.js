export const addMember = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: amount
    })
  }
}