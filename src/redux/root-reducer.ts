import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { reducer as itineraryReducer } from './slices/itinerary/itinerarySlice';

export default combineReducers({  
  form: formReducer,
  itinerary: itineraryReducer,
});