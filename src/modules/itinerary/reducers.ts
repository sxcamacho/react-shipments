import {
  ADD_STOP_POINT,
  UPDATE_STOP_POINT,
  DELETE_STOP_POINT,
  STOP_POINT_COMPLETED,
  STOP_POINT_UNCOMPLETED,
} from "./actions";
import IStopPoint from "./Interfaces/IStopPoint";

const initialState = [];

export default function itinerary(state: any = initialState, action: any) {
  let stopPoint: IStopPoint;
  let newState: Array<IStopPoint>;

  switch (action.type) {
    case ADD_STOP_POINT:
      return [...state, action.stopPoint];

    case UPDATE_STOP_POINT:
      newState = [...state];
      stopPoint = state.find((stopPoint: IStopPoint) => stopPoint.id === action.stopPoint.id);
      Object.assign(stopPoint, action.stopPoint);
      return newState;

    case DELETE_STOP_POINT:
      return state.filter(
        (stopPoint: IStopPoint) => stopPoint.id !== action.stopPointId
      );

    case STOP_POINT_COMPLETED:
      newState = [...state];
      stopPoint = state.find((stopPoint: IStopPoint) => stopPoint.id === action.stopPointId);
      stopPoint.completed = true;
      return newState;

    case STOP_POINT_UNCOMPLETED:

      newState = [...state];
      stopPoint = state.find((stopPoint: IStopPoint) => stopPoint.id === action.stopPointId);
      stopPoint.completed = false;
      return newState;

    default:
      return state;
  }
}
