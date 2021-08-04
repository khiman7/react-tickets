import styles from './Ticket.module.scss';

const TicketSegment = ({ route, time, duration, stops }) => {
  const stopsAmount = stops.length;

  return (
    <div className={styles.segment}>
      <div className={styles.route}>
        <h5>{route}</h5>
        <p>{time}</p>
      </div>
      <div className={styles.length}>
        <h5>В ПУТИ</h5>
        <p>{duration}</p>
      </div>
      <div className={styles.stops}>
        <h5>
          {stopsAmount > 0
            ? stopsAmount === 1
              ? '1 ПЕРЕСАДКА'
              : stopsAmount === 2
              ? '2 ПЕРЕСАДКИ'
              : '3 ПЕРЕСАДКИ'
            : 'БЕЗ ПЕРЕСАДОК'}
        </h5>
        <p>{stops.join(', ')}</p>
      </div>
    </div>
  );
};

const Ticket = ({ price, imageUrl, segments }) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticketHeader}>
        <p className={styles.price}>{price} Р</p>
        <img src={imageUrl} width={110} height={36} alt="Airline Logo" />
      </div>
      <TicketSegment {...segments[0]} />
      <TicketSegment {...segments[1]} />
    </div>
  );
};

export default Ticket;
