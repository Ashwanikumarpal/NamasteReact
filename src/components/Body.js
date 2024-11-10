import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurent, setlistofRestaurent] = useState([]);
  const [searchText, setSearchText] = useState([]);
  console.log(listofRestaurent);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5900637&lng=77.08878279999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setlistofRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>you are offline</h1>;

  if (listofRestaurent.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-md"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurent = listofRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRestaurent);
              setlistofRestaurent(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-100 rounded-md"
            onClick={() => {
              const filteredList = listofRestaurent.filter(
                (res) => res.info.avgRating > 4.2
              );
              console.log(filteredList);
              setlistofRestaurent(filteredList);
            }}
          >
            Top Rated button{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listofRestaurent.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurent/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
