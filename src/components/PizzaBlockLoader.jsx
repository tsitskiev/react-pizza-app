import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaBlockLoader() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="140" cy="120" r="120" />
      <rect x="116" y="303" rx="0" ry="0" width="1" height="1" />
      <rect x="1" y="260" rx="5" ry="5" width="280" height="24" />
      <rect x="0" y="302" rx="10" ry="10" width="280" height="84" />
      <rect x="130" y="406" rx="25" ry="25" width="151" height="44" />
      <rect x="15" y="414" rx="5" ry="5" width="87" height="27" />
    </ContentLoader>
  );
}
export default PizzaBlockLoader;
