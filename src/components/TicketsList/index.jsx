import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uniqueId from 'lodash/uniqueId';
import { normalizeTicket } from '../../utils/normalizeTicket';
import { sortByPrice } from '../../store/tickets';

import Ticket from './Ticket';

import styles from './TicketsList.module.scss';

const TicketsList = ({ sortBy, visibleAmount }) => {
  const { tickets } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortByPrice());
  }, [dispatch]);

  console.log(tickets);

  return (
    <div className={styles.ticketsList}>
      {tickets &&
        tickets.slice(0, visibleAmount).map((ticket) => {
          const parsedTicket = normalizeTicket(ticket);

          return <Ticket key={uniqueId('ticket_')} {...parsedTicket} />;
        })}
    </div>
  );
};

export default TicketsList;
