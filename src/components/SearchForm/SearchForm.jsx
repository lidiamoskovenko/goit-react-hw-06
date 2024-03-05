import { useId } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import css from './SearchForm.module.css'

const SearchForm = () => {
  const searchId = useId();
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value.trim()));
  };
  const value = useSelector(state => state.filters);
  return (
    <div className={css.searchForm}>
      <label htmlFor={searchId} className={css.searchLabel}>Filter</label>
      <input className={css.searchInput}
        type="text"
        name="search"
        id={searchId}
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchForm;