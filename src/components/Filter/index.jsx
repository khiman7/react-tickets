import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from '../../store/tickets';
import uniqueId from 'lodash/uniqueId';

import styles from './Filter.module.scss';

const Filter = () => {
  const { filters } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  console.log(filters);

  const handleCheckboxChange = (event) => {
    const filterOption = event.target.value;

    dispatch(setFilterValue(filterOption));
  };

  return (
    <div className={styles.filterBlock}>
      <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
      <ul className="stopsNumber">
        {filters.map((option) => {
          return (
            <li key={uniqueId('filterOption_')}>
              <label className={styles.check}>
                <input
                  type="checkbox"
                  checked={option.selected}
                  value={option.value}
                  onChange={handleCheckboxChange}
                />
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
