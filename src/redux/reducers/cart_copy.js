import Types from '../actions/actionTypes';

const initialState = {
  cartItems: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  const getTotalPrice = (arr) => arr.reduce((summ, pizzaObj) => summ + pizzaObj.price, 0);
  const getArrayOfObjs = (obj) =>
    Object.values(obj)
      .map((obj) => obj.items)
      .flat();

  switch (action.type) {
    case Types.ADD_PIZZA:
      const currentCartItems = !state.cartItems[action.payload.id]
        ? [action.payload]
        : [...state.cartItems[action.payload.id].items, action.payload];
      const newCartItems = {
        ...state.cartItems,
        [action.payload.id]: {
          items: currentCartItems,
          itemTotalPrice: getTotalPrice(currentCartItems),
        },
      };
      const arrOfCartItems = getArrayOfObjs(newCartItems);
      return {
        ...state,
        cartItems: newCartItems,
        totalCount: arrOfCartItems.length,
        totalPrice: getTotalPrice(arrOfCartItems),
      };
    case Types.REMOVE_PIZZA:
      const cartAfterRemove = {
        ...state.cartItems,
      };
      const itemTotalPrice = cartAfterRemove[action.payload].itemTotalPrice;
      const itemTotalCount = cartAfterRemove[action.payload].items.length;
      delete cartAfterRemove[action.payload];
      return {
        ...state,
        cartItems: cartAfterRemove,
        totalCount: state.totalCount - itemTotalCount,
        totalPrice: state.totalPrice - itemTotalPrice,
      };
    case Types.ADD_ITEM: {
      const oldItems = [...state.cartItems[action.payload].items];
      const newItems = oldItems.length < 10 ? [...oldItems, oldItems[0]] : oldItems;
      const newCartItems = {
        ...state.cartItems,
        [action.payload]: {
          items: newItems,
          itemTotalPrice: getTotalPrice(newItems),
        },
      };
      const arrOfCartItems = getArrayOfObjs(newCartItems);
      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: getTotalPrice(arrOfCartItems),
        totalCount: arrOfCartItems.length,
      };
    }
    case Types.REMOVE_ITEM: {
      const oldItems = [...state.cartItems[action.payload].items];
      const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;
      const newCartItems = {
        ...state.cartItems,
        [action.payload]: {
          items: newItems,
          itemTotalPrice: getTotalPrice(newItems),
        },
      };
      const arrOfCartItems = getArrayOfObjs(newCartItems);
      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: getTotalPrice(arrOfCartItems),
        totalCount: arrOfCartItems.length,
      };
    }
    case Types.CLEAR_ITEMS:
      return {
        ...state,
        cartItems: {},
        totalPrice: 0,
        totalCount: 0,
      };
    default:
      return state;
  }
};

export default cart;
