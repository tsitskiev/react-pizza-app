import React, { useCallback, useEffect } from "react";
import { Categories, Sort, PizzaBlock, PizzaBlockLoader } from "../components/";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filter";
import { fetchPizzas, setLoaded } from "../redux/actions/pizza";
import { addPizza } from "../redux/actions/cart";

const categoryNames = [
  "Все",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortNames = [
  { name: "популярности", type: "rating" },
  { name: "цене", type: "prices" },
  { name: "алфавиту", type: "name" },
];

const Home = () => {
  const { sortBy, activeCategory, order } = useSelector(
    ({ filters }) => filters
  );
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { cartItems } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  const toggleActiveCategory = useCallback(
    (index) => {
      dispatch(setLoaded(false));
      dispatch(setCategory(index));
      dispatch(fetchPizzas());
    },
    [activeCategory]
  );

  const addPizzaToCart = (pizzaToAdd) => {
    dispatch(addPizza(pizzaToAdd));
  };

  const toggleSortBy = useCallback(
    (sortType) => {
      dispatch(setSortBy(sortType));
    },
    [sortBy]
  );

  useEffect(() => {
    console.log("server request");
    dispatch(fetchPizzas(activeCategory, sortBy, order));
  }, [activeCategory, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          onClickCategory={toggleActiveCategory}
          activeCategory={activeCategory}
        />
        <Sort
          items={sortNames}
          activeSortType={sortBy}
          toggleSortBy={toggleSortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => (
              <PizzaBlock
                key={item.id}
                {...item}
                clickOnAddBtn={addPizzaToCart}
                // addedPizzas={cartItems[item.id] && cartItems[item.id].items.length}
              />
            ))
          : Array(10)
              .fill("")
              .map((_, index) => <PizzaBlockLoader key={index} />)}
      </div>
    </div>
  );
};

export default Home;
