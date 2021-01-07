import Types from '../actions/actionTypes';

const initialState = {
  sortBy: 'rating',
  order: 'asc',
  activeCategory: 0,
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case Types.SET_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      };
    case Types.SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default filters;
