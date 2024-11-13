import { CDN_URL } from "../utils/constants";
import usercontext from "../utils/usercontext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(usercontext);
  return (
    <div className="m-4 p-4 w-{250px} rounded-lg bg-green-100 hover:bg-gray-300">
      <img
        className="w-60 h-60 rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.slaString}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;
