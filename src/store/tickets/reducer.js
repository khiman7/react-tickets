import { ticketsActionTypes } from './actions';

const initialState = {
  tickets: [],
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ticketsActionTypes.FETCH_TICKETS:
      return { ...state, tickets: action.payload };
    case ticketsActionTypes.SORT_BY_PRICE:
      const ticketsSortedByPrice = state.tickets.sort(
        (a, b) => a.price - b.price
      );

      return { ...state, tickets: ticketsSortedByPrice };
    case ticketsActionTypes.SORT_BY_DURATION:
      const ticketsSortedByDuration = state.tickets.sort(
        (a, b) => a.segments[0].duration - b.segments[0].duration
      );

      return { ...state, tickets: ticketsSortedByDuration };
    default:
      return state;
  }
};
