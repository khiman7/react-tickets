import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uniqueId from 'lodash/uniqueId';
import { normalizeTicket, filterTickets } from '../../utils';
import { sortByPrice } from '../../store/tickets';

import Ticket from './Ticket';

import styles from './TicketsList.module.scss';

const TicketsList = ({ sortBy, visibleAmount }) => {
  const { tickets, filters } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortByPrice());
  }, [dispatch]);

  return (
    <div className={styles.ticketsList}>
      {tickets &&
        filterTickets(filters, tickets, sortBy)
          .slice(0, visibleAmount)
          .map((ticket) => {
            const parsedTicket = normalizeTicket(ticket);

            return <Ticket key={uniqueId('ticket_')} {...parsedTicket} />;
          })}
    </div>
  );
};

export default TicketsList;
