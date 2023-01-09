import { SAVE_AUTH_DETAILS } from "./Types";

export const SaveUserDetails = (data) => {
  return {
    type: SAVE_AUTH_DETAILS,
    payload: data,
  };
};
