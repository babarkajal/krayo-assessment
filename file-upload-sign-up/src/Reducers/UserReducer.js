// import {} from "../Actions/Types";

import { SAVE_AUTH_DETAILS } from "../Actions/Types";

export const UserReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_AUTH_DETAILS: {
      return {
        ...state,
        userDetails: payload,
      };
    }
    default:
      return state;
  }
};
