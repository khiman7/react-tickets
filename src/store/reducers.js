import { combineReducers } from 'redux';

import { ticketsReducer as tickets } from './tickets';

export const rootReducer = combineReducers({
  tickets,
});
