import { ticketsActionTypes } from './actions';

const initialState = {
  tickets: [],
  filters: [
    {
      name: 'Все',
      value: 'all',
      selected: true,
      stops: null,
    },
    {
      name: 'Без пересадок',
      value: 'noStops',
      selected: false,
      stops: 0,
    },
    {
      name: '1 пересадка',
      value: 'oneStop',
      selected: false,
      stops: 1,
    },
    {
      name: '2 пересадки',
      value: 'twoStops',
      selected: false,
      stops: 2,
    },
    {
      name: '3 пересадки',
      value: 'threeStops',
      selected: false,
      stops: 3,
    },
  ],
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
    case ticketsActionTypes.SET_FILTER_VALUE:
      const newFilters = [...state.filters];
      const optionIndex = state.filters.findIndex(
        (filter) => filter.value === action.payload
      );

      if (optionIndex) {
        newFilters[0].selected = false;
      } else {
        newFilters.forEach((filter, index) => {
          newFilters[index] = { ...filter, selected: false };
        });
      }

      newFilters[optionIndex].selected = !newFilters[optionIndex].selected;

      return { ...state, filters: newFilters };

    default:
      return state;
  }
};
