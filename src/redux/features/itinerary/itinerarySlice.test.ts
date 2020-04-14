import { addStopPoint } from "./itinerarySlice";
import IStopPoint from "../../../modules/itinerary/Interfaces/IStopPoint";
import reducer from '../../features/itinerary/itinerarySlice';

const stopPoint: IStopPoint = {
  id: 'test',
  name: 'test',
  address: 'test',
  formattedAddress: 'test'
}

describe("ItinerarySlice", () => {
  
  test("should create an action to add a stopPoint", () => {

    const action = addStopPoint(stopPoint);
    expect(action.payload).toEqual({
      id: 'test',
      name: 'test',
      address: 'test',
      formattedAddress: 'test',
    });
  });

  test("addStopPoint reducer", () => {

    const stopPoint: IStopPoint = {
      id: 'test',
      name: 'test',
      address: 'test',
      formattedAddress: 'test'
    }

    const action = addStopPoint(stopPoint);
    expect(action.payload).toEqual(stopPoint);
  });

  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual([])
  })

  test('should handle addStopPoint reducer', () => {
    expect(
      reducer([], {
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