import React, { memo } from "react";
import PropTypes from "prop-types";

const Categories = memo(function Categories({
  items,
  onClickCategory,
  activeCategory,
}) {
  return (
    <div className="categories">
      <ul>
        {items.map((item, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
            key={`${item}_${index}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
  activeCategory: PropTypes.number.isRequired,
};

Categories.defaultProps = {
  items: [],
  activeCategory: 0,
};

export default Categories;
