import axios from "axios";


export const GET_LIST_MEMBER = 'GET_LIST_MEMBER';

export const getListMember = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_MEMBER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      }
    })

    // get API
    axios.get('https://swapi.dev/api/people/')
    .then((response) => {
      dispatch({
        type: GET_LIST_MEMBER,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        }
      })
    })
    .catch((error) => {
      dispatch({
        type: GET_LIST_MEMBER,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        }
      })
    })
  }
}
