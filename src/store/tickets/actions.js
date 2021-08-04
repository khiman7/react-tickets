import * as api from '../../api';

const moduleName = 'TICKETS';

export const ticketsActionTypes = {
  FETCH_TICKETS: `${moduleName}.FETCH_TICKETS`,
  SORT_BY_PRICE: `${moduleName}.SORT_BY_PRICE`,
  SORT_BY_DURATION: `${moduleName}.SORT_BY_DURATION`,
  SET_FILTER_VALUE: `${moduleName}.SET_FILTER_VALUE`,
};

export const getTickets = () => async (dispatch) => {
  try {
    const tickets = await api.fetchTickets();

    dispatch({ type: ticketsActionTypes.FETCH_TICKETS, payload: tickets });
  } catch (error) {
    console.log(error);
  }
};

export const sortByPrice = () => (dispatch) => {
  dispatch({ type: ticketsActionTypes.SORT_BY_PRICE });
};

export const sortByDuration = () => (dispatch) => {
  dispatch({ type: ticketsActionTypes.SORT_BY_DURATION });
};

export const setFilterValue = (value) => (dispatch) => {
  dispatch({ type: ticketsActionTypes.SET_FILTER_VALUE, payload: value });
};
