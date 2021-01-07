import Types from './actionTypes';

const setSortBy = (sortBy) => ({
  type: Types.SET_SORT_BY,
  payload: sortBy,
});

const setCategory = (catIndex) => ({
  type: Types.SET_CATEGORY,
  payload: catIndex,
});

export { setSortBy, setCategory };
