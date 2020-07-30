export const ADD_PHOTO = "ADD_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";
export const CHANGE_COMMENT = "CHANGE_COMMENT";
export const CHANGE_POSITION_PHOTO = "CHANGE_POSITION_PHOTO";

export const addNewPhoto = (objPhoto) => ({
  type: ADD_PHOTO,
  payload: objPhoto,
});

export const deletePhoto = (idPhoto) => ({
  type: DELETE_PHOTO,
  payload: idPhoto,
});

export const changeComment = (idPhotoForComment, commentTextValue) => ({
  type: CHANGE_COMMENT,
  payload: { idPhoto: idPhotoForComment, commentText: commentTextValue },
});

export const changePositionPhoto = (firstPhotoId, lastPhotoId) => ({
  type: CHANGE_POSITION_PHOTO,
  payload: { idFirst: firstPhotoId, idLast: lastPhotoId },
});
