import { defaultState } from "./stateArray";
import {
  ADD_PHOTO,
  DELETE_PHOTO,
  CHANGE_COMMENT,
  CHANGE_POSITION_PHOTO,
} from "./actions";

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PHOTO:
      state.unshift(action.payload);
      return state;

    case DELETE_PHOTO:
      return state.filter((objPhoto) => objPhoto.id !== action.payload);

    case CHANGE_COMMENT:
      return state.map((objPhoto) => {
        if (objPhoto.id === action.payload.idPhoto) {
          objPhoto.comment = action.payload.commentText;
        }
      });
    case CHANGE_POSITION_PHOTO:
      let firstPhoto = state.find(
        (objPhoto) => objPhoto.id === action.payload.idFirst
      );
      let lastPhoto = state.find(
        (objPhoto) => objPhoto.id === action.payload.idLast
      );
      return state.map((objPhoto) => {
        if (objPhoto.id === action.payload.idFirst) {
          objPhoto = lastPhoto;
        } else if (objPhoto.id === action.payload.idLast) {
          objPhoto = firstPhoto;
        }
      });
  }
  return state;
};
