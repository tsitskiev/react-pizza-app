import Types from '../actions/actionTypes';

const _ = require('lodash');
const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  const getTotalCount = (arr) => arr.reduce((summ, pizzaObj) => summ + pizzaObj.pizzaTotalCount, 0);
  const getTotalPrice = (arr) =>
    arr.reduce((count, pizzaObj) => count + pizzaObj.pizzaTotalPrice, 0);
  const removeFromArr = (arr, idxToRemove) => [
    ...arr.slice(0, idxToRemove),
    ...arr.slice(idxToRemove + 1, arr.length),
  ];

  switch (action.type) {
    case Types.ADD_PIZZA:
      const pizzaCount = 1;
      const isInTheCart = _.findIndex(state.cartItems, (cartItemObj) =>
        _.isEqual(cartItemObj.pizza, action.payload),
      );
      const newCartItems = [...state.cartItems];
      if (isInTheCart < 0) {
        newCartItems.push({
          pizza: action.payload,
          pizzaTotalCount: pizzaCount,
          pizzaTotalPrice: action.payload.price * pizzaCount,
        });
      } else {
        ++newCartItems[isInTheCart].pizzaTotalCount;
        newCartItems[isInTheCart].pizzaTotalPrice =
          newCartItems[isInTheCart].pizzaTotalCount * action.payload.price;
      }

      return {
        ...state,
        cartItems: newCartItems,
        totalCount: getTotalCount(newCartItems),
        totalPrice: getTotalPrice(newCartItems),
      };
    case Types.REMOVE_PIZZA:
      const idxToRemove = action.payload;
      const cartAfterRemove = removeFromArr(state.cartItems, idxToRemove);
      const itemTotalPrice = state.cartItems[idxToRemove].pizzaTotalPrice;
      const itemTotalCount = state.cartItems[idxToRemove].pizzaTotalCount;

      return {
        ...state,
        cartItems: cartAfterRemove,
        totalCount: state.totalCount - itemTotalCount,
        totalPrice: state.totalPrice - itemTotalPrice,
      };
    case Types.ADD_ITEM: {
      const newCartItems = [...state.cartItems];
      ++newCartItems[action.payload].pizzaTotalCount;
      newCartItems[action.payload].pizzaTotalPrice =
        newCartItems[action.payload].pizzaTotalCount * newCartItems[action.payload].pizza.price;

      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: getTotalPrice(newCartItems),
        totalCount: getTotalCount(newCartItems),
      };
    }
    case Types.REMOVE_ITEM: {
      let newCartItems = [...state.cartItems];
      if (newCartItems[action.payload].pizzaTotalCount > 1) {
        --newCartItems[action.payload].pizzaTotalCount;
        newCartItems[action.payload].pizzaTotalPrice =
          newCartItems[action.payload].pizzaTotalCount * newCartItems[action.payload].pizza.price;
      } else {
        newCartItems = removeFromArr(newCartItems, action.payload);
      }

      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: getTotalPrice(newCartItems),
        totalCount: getTotalCount(newCartItems),
      };
    }
    case Types.CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
        totalPrice: 0,
        totalCount: 0,
      };
    default:
      return state;
  }
};

export default cart;
