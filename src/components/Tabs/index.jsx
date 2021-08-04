import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortByPrice, sortByDuration } from '../../store/tickets';

import styles from './Tabs.module.scss';

const tabs = [
  {
    name: 'САМЫЙ ДЕШЁВЫЙ',
    value: 'price',
  },
  {
    name: 'САМЫЙ БЫСТРЫЙ',
    value: 'duration',
  },
];

const Tabs = ({ handleClick }) => {
  const [activeTab, setActiveTab] = useState('price');
  const dispatch = useDispatch();

  return (
    <div className={styles.sortTabs}>
      {tabs.map((tab, index) => {
        return (
          <div key={index} className={`${styles.tab}`}>
            <button
              className={tab.value === activeTab ? styles.active : ''}
              value={tab.value}
              onClick={(event) => {
                const sortOption = event.target.value;

                if (sortOption === 'price') {
                  dispatch(sortByPrice());
                } else {
                  dispatch(sortByDuration());
                }

                setActiveTab(sortOption);
                handleClick(sortOption);
              }}>
              {tab.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
