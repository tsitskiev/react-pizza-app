import Types from './actionTypes';

const addPizza = (pizzaToAdd) => ({
  type: Types.ADD_PIZZA,
  payload: pizzaToAdd,
});
const removePizza = (pizzaToRemove) => ({
  type: Types.REMOVE_PIZZA,
  payload: pizzaToRemove,
});
const addItem = (itemToAdd) => ({
  type: Types.ADD_ITEM,
  payload: itemToAdd,
});
const removeItem = (itemToRemove) => ({
  type: Types.REMOVE_ITEM,
  payload: itemToRemove,
});
const clearItems = () => ({
  type: Types.CLEAR_ITEMS,
});

export { addPizza, removePizza, addItem, removeItem, clearItems };
