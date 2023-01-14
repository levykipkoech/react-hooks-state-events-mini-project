import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onSelectCategory(category)}
            className={category === selectedCategory ? 'selected' : ''}
          >
            {category}
          </button>
        ))}
    </div>
  );
}

export default CategoryFilter;

