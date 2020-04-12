import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import itinerary from './modules/itinerary/reducers';

export const reducers = combineReducers({  
  form: formReducer,
  itinerary,
});