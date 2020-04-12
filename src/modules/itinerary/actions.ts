import IStopPoint from "./Interfaces/IStopPoint";
import { reset } from "redux-form";

// action types
export const ADD_STOP_POINT = "ADD_STOP_POINT";
export const UPDATE_STOP_POINT = "UPDATE_STOP_POINT";
export const DELETE_STOP_POINT = "DELETE_STOP_POINT";
export const STOP_POINT_COMPLETED = "STOP_POINT_COMPLETED";
export const STOP_POINT_UNCOMPLETED = "STOP_POINT_UNCOMPLETED";

const STOP_POINT_FORM_NAME = "stopPoint";

export function addStopPoint(stopPoint: IStopPoint) {
  return function (dispatch: Function) {
    dispatch({
      type: ADD_STOP_POINT,
      stopPoint: {
        ...stopPoint,
        completed: false,
      },
    });
    dispatch(reset(STOP_POINT_FORM_NAME));
  };
}

export function updateStopPoint(stopPoint: IStopPoint) {
  return function (dispatch: Function) {
    dispatch({
      type: UPDATE_STOP_POINT,
      stopPoint,
    });
    dispatch(reset(STOP_POINT_FORM_NAME));
  };
}

export function deleteStopPoint(stopPointId: string) {
  return function (dispatch: Function) {
    dispatch({
      type: DELETE_STOP_POINT,
      stopPointId,
    });
  };
}

export function markStopPointAsCompleted(stopPointId: string) {
  return function (dispatch: Function) {
    dispatch({
      type: STOP_POINT_COMPLETED,
      stopPointId,
    });
  };
}

export function markStopPointAsUncompleted(stopPointId: string) {
  return function (dispatch: Function) {
    dispatch({
      type: STOP_POINT_UNCOMPLETED,
      stopPointId,
    });
  };
}
