import { useId } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filterSlice";

const SearchForm = () => {
  const searchId = useId();
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value.trim()));
  };
  const value = useSelector(state => state.filters);
  return (
    <div>
      <label htmlFor={searchId}>Filter</label>
      <input
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