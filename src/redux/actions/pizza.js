import axios from 'axios';
import Types from './actionTypes';

const setPizzas = (items) => ({
  type: Types.SET_PIZZAS,
  payload: items,
});

const setLoaded = (payload) => ({
  type: Types.SET_LOADED,
  payload,
});

const fetchPizzas = (activeCategory, sortBy, order) => (dispatch) => {
  axios
    .get(
      `/pizzas?${
        activeCategory === 0 ? '' : `category=${activeCategory}`
      }&_sort=${sortBy}&_order=${order}`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    })
    .catch((err) => console.log('Error occured ' + err));
};

export { setPizzas, fetchPizzas, setLoaded };
