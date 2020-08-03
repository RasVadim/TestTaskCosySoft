import { stateArray } from "./stateArray";
import {
  ADD_PHOTO,
  DELETE_PHOTO,
  CHANGE_COMMENT,
  CHANGE_POSITION_PHOTO,
} from "./actions";

const defaultState = {
  stateArray: stateArray,
};

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PHOTO:
      return { ...state, stateArray: [action.payload, ...state.stateArray] };

    case DELETE_PHOTO:
     const newArray = state.stateArray.filter(objPhoto => objPhoto.id !== action.payload);
      return {...state, stateArray: newArray };

    case CHANGE_COMMENT:
      return state.stateArray.map((objPhoto) => {
        if (objPhoto.id === action.payload.idPhoto) {
          objPhoto.comment = action.payload.commentText;
        }
      });
    case CHANGE_POSITION_PHOTO:
      let firstPhoto = state.stateArray.find(
        (objPhoto) => objPhoto.id === action.payload.idFirst
      );
      let lastPhoto = state.stateArray.find(
        (objPhoto) => objPhoto.id === action.payload.idLast
      );
      return state.stateArray.map((objPhoto) => {
        if (objPhoto.id === action.payload.idFirst) {
          objPhoto = lastPhoto;
        } else if (objPhoto.id === action.payload.idLast) {
          objPhoto = firstPhoto;
        }
      });
  }
  return state;
};
