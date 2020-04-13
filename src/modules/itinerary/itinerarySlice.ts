import IStopPoint from "./Interfaces/IStopPoint";
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
      const { id } = action.payload;
      const stopPoint = state.find((stopPoint) => stopPoint.id === id);
      Object.assign(stopPoint, action.payload);
    },
    updateStopPointAsCompleted(state, action) {
      const stopPoint = state.find(
        (stopPoint) => stopPoint.id === action.payload
      );
      Object.assign(stopPoint, { completed: true });
    },
    updateStopPointAsUncompleted(state, action) {
      const stopPoint = state.find(
        (stopPoint) => stopPoint.id === action.payload
      );
      Object.assign(stopPoint, { completed: false });
    },
    deleteStopPoint(state, action) {
      state = state.filter((stopPoint) => stopPoint.id !== action.payload);
    },
  }
});

export const {
  addStopPoint,
  updateStopPoint,
  updateStopPointAsCompleted,
  updateStopPointAsUncompleted,
  deleteStopPoint,
} = itinerarySlice.actions;

export default itinerarySlice.reducer;
