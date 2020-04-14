import { addStopPoint } from "./itinerarySlice";
import { reducer as itineraryReducer } from './itinerarySlice';
import { IStopPoint } from "../../../models";

const stopPoint: IStopPoint = {
  id: 'test',
  name: 'test',
  address: 'test',
  formattedAddress: 'test'
}

describe("ItinerarySlice", () => {
  
  test("should create an action to add a stopPoint", () => {
    const action = addStopPoint(stopPoint);
    expect(action.payload).toEqual(stopPoint);
  });

  test('should return the initial state', () => {
    expect(itineraryReducer(undefined, { type: undefined })).toEqual([])
  })

  test('should handle addStopPoint reducer', () => {
    expect(
      itineraryReducer([], {
        type: 'itinerary/addStopPoint',
        payload: stopPoint
      })
    ).toEqual([
      {
        ...stopPoint,
        completed: false
      }
    ])
  });

});