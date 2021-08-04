/* const ticketExample = {
  price: 37197,
  carrier: 'MH',
  segments: [
    {
      origin: 'MOW',
      destination: 'HKT',
      date: '2021-08-11T04:25:00.000Z',
      stops: [],
      duration: 602,
    },
    {
      origin: 'HKT',
      destination: 'MOW',
      date: '2021-08-30T23:19:00.000Z',
      stops: ['IST', 'AUH'],
      duration: 1728,
    },
  ],
}; */

const roundTicketPrice = (price, n) => {
  return Math.round(price / 10 ** n) * 10 ** n;
};

const transformDuration = (duration) => {
  const hours = Math.floor(duration / 60)
    .toString()
    .padStart(2, '0');
  const minutes = (duration - hours * 60).toString().padStart(2, '0');

  return `${hours}ч ${minutes}м`;
};

const transformTime = (date, duration) => {
  const departureDate = new Date(date);
  const departureTime = departureDate.toLocaleTimeString().slice(0, 5);

  const arrivalDate = new Date(departureDate.getTime() + duration * 60 * 1000);
  const arrivalTime = arrivalDate.toLocaleTimeString().slice(0, 5);

  return `${departureTime} - ${arrivalTime}`;
};

export const normalizeTicket = (ticket) => {
  const parsedTicket = {
    price: roundTicketPrice(ticket.price, 2).toLocaleString(),
    imageUrl: `https://pics.avs.io/330/108/${ticket.carrier}.png`,
    segments: [
      {
        route: `${ticket.segments[0].origin} - ${ticket.segments[0].destination}`,
        time: `${transformTime(
          ticket.segments[0].date,
          ticket.segments[0].duration
        )}`,
        duration: transformDuration(ticket.segments[0].duration),
        stops: ticket.segments[0].stops,
      },
      {
        route: `${ticket.segments[1].origin} - ${ticket.segments[1].destination}`,
        time: `${transformTime(
          ticket.segments[1].date,
          ticket.segments[1].duration
        )}`,
        duration: transformDuration(ticket.segments[1].duration),
        stops: ticket.segments[1].stops,
      },
    ],
  };

  return parsedTicket;
};
