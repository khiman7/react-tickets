import uniqueId from 'lodash/uniqueId';

import styles from './Filter.module.scss';

const filterOptions = [
  {
    name: 'Все',
    value: 'all',
  },
  {
    name: 'Без пересадок',
    value: 'noTransfers',
  },
  {
    name: '1 пересадка',
    value: 'oneTransfer',
  },
  {
    name: '2 пересадки',
    value: 'twoTransfers',
  },
  {
    name: '3 пересадки',
    value: 'threeTransfers',
  },
];

const Filter = ({ initialOption }) => {
  return (
    <div className={styles.filterBlock}>
      <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
      <ul className="stopsNumber">
        {filterOptions.map((option) => {
          return (
            <li key={uniqueId('filterOption_')}>
              <label className={styles.check}>
                <input
                  type="checkbox"
                  className={styles.checkInput}
                  value={option.value}
                  checked={option.value === initialOption}
                />
                <span className={styles.checkbox}></span>
                <span>{option.name}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
