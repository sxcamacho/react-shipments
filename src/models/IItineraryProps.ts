import { IStopPoint } from "./IStopPoint";

export interface IItineraryProps {
  dispatch: Function;
  itinerary: Array<IStopPoint>;
}