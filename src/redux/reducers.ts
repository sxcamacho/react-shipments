import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import itinerary from './features/itinerary/itinerarySlice';

export default combineReducers({  
  form: formReducer,
  itinerary,
});