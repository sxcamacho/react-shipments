import IStopPoint from "./IStopPoint";

export default interface IItineraryProps {
  dispatch: Function;
  itinerary: Array<IStopPoint>;
}