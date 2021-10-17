import { GET_LIST_MEMBER } from "../../action-creator/MemberActions";

const initialState = {
  getListMemberLoading: false,
  getListMemberSuccess: false,
  getListMemberError: false,
}

const member = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_MEMBER:
      return {
        ...state,
        getListMemberLoading: action.payload.loading,
        getListMemberSuccess: action.payload.data,
        getListMemberError: action.payload.errorMessage,
      }
    default:
      return state;
  }
}

export default member;
