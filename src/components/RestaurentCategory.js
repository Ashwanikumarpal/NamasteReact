import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showitem, setShowIndex, dummy }) => {
  //const [showitem, setshowItem] = useState(false);

  const clickhandler = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={clickhandler}
      >
        <span className="font-bold">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {showitem && <ItemList items={data.itemCards} dummy={dummy} />}
    </div>
  );
};

export default RestaurentCategory;
