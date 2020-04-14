import { IStopPoint } from "../../../models";
import { createSlice } from "@reduxjs/toolkit";
import { reset } from "redux-form";

const STOP_POINT_FORM_NAME = "stopPoint";

export const addStopPointWithReset = (stopPoint: IStopPoint) => (dispatch: Function) => {
  dispatch(addStopPoint(stopPoint));
  dispatch(reset(STOP_POINT_FORM_NAME));
};

export const updateStopPointWithReset = (stopPoint: IStopPoint) => (dispatch: Function) => {
  dispatch(updateStopPoint(stopPoint));
  dispatch(reset(STOP_POINT_FORM_NAME));
};

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState: Array<IStopPoint>(),
  reducers: {
    addStopPoint(state, action) {
      state.push({ ...action.payload, completed: false });
    },
    updateStopPoint(state, action) {
      return state.map((stopPoint: IStopPoint) => {
        if (stopPoint.id !== action.payload.id) {
          return stopPoint;
        }
        
        return {
          ...stopPoint,
          ...action.payload
        }
      });
    },
    updateStopPointAsCompleted(state, action) {
      return state.map((stopPoint: IStopPoint) => {
        if (stopPoint.id !== action.payload.id) {
          return stopPoint;
        }
        
        return {
          ...stopPoint,
          completed: action.payload.completed
        }
      });
    },
    deleteStopPoint(state, action) {
      const stopPointIndex = state.findIndex((stopPoint) => stopPoint.id === action.payload);
      state.splice(stopPointIndex, 1);
    },
  }
});

export const { actions, reducer } = itinerarySlice;

export const {
  addStopPoint,
  updateStopPoint,
  updateStopPointAsCompleted,
  deleteStopPoint
} = actions;


