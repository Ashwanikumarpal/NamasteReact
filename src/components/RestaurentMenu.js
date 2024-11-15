import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resId } = useParams();
  //console.log(resId);

  const dummy = "dummy data";

  const resInfo = useRestaurentMenu(resId);

  const [showindex, setShowIndex] = useState(null);

  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold">{name}</h1>
      <h3 className="font-semibold">{cuisines.join(", ")}</h3>

      {/* accordians */}
      <p>
        {categories.map((category, index) => (
          //controlled component
          <RestaurentCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showitem={index === showindex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        ))}
      </p>

      {/* <h3>{costForTwo / 100}</h3>
      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item?.card?.info?.name}- Rs.
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurentMenu;
