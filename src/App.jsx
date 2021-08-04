import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets } from './store/tickets';
import Loader from 'react-loader-spinner';

import Filter from './components/Filter';
import Tabs from './components/Tabs';
import TicketsList from './components/TicketsList';

const App = () => {
  console.log('App re-rendered');

  const { tickets } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  const [sortOption, setSortOption] = useState('price');
  const [visibleTicketsAmount, setVisibleTicketsAmount] = useState(5);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <header className="header">
        <img
          src="img/logo.svg"
          className="headerLogo"
          width={100}
          height={100}
          alt="logo"
        />
      </header>
      <main className="content">
        <Filter />
        <div className="ticketsBlock">
          <Tabs
            handleClick={(option) => {
              setSortOption(option);
            }}
            setVisibleTicketsAmount={setVisibleTicketsAmount}
          />
          {tickets.length > 0 ? (
            <>
              <TicketsList
                visibleAmount={visibleTicketsAmount}
                sortBy={sortOption}
              />
              <button
                className="loadMoreButton"
                onClick={() =>
                  setVisibleTicketsAmount(visibleTicketsAmount + 5)
                }>
                ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
              </button>
            </>
          ) : (
            <Loader
              className="loader"
              type="Oval"
              color="#2196f3"
              height={70}
              width={70}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
