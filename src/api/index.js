const axios = require('axios');

const getSearchId = async () => {
  const response = await axios.get(
    'https://front-test.beta.aviasales.ru/search'
  );

  const { searchId } = response.data;

  return searchId;
};

const subscribe = async (searchId, tickets = []) => {
  try {
    const response = await axios.get(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
    );
    const { stop: lastChunk, tickets: newTickets } = response.data;

    if (lastChunk) {
      return [...tickets, ...newTickets];
    } else {
      return await subscribe(searchId, [...tickets, ...newTickets]);
    }
  } catch (error) {
    const statusCode = error.response.status;

    if (statusCode === 500 || statusCode === 502) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return await subscribe(searchId, tickets);
    } else {
      return tickets;
    }
  }
};

export const fetchTickets = async () => {
  const searchId = await getSearchId();

  return await subscribe(searchId);
};
