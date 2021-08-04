const sortFilteredTickets = (tickets, sortBy) => {
  if (sortBy === 'price') {
    return tickets.sort((a, b) => a.price - b.price);
  } else {
    return tickets.sort((a, b) => a.duration - b.duration);
  }
};

export const filterTickets = (filters, tickets, sortBy) => {
  let filteredTickets = [];

  filters.forEach((_filter) => {
    if (_filter.selected) {
      if (_filter.value === 'all') {
        filteredTickets = [...tickets];
      } else {
        filteredTickets = [
          ...filteredTickets,
          ...tickets.filter(
            (ticket) => ticket.segments[0].stops.length === _filter.stops
          ),
        ];
      }
    }
  });

  return sortFilteredTickets(filteredTickets, sortBy);
};
