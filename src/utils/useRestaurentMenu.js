import { useEffect, useState } from "react";
import { Menu_API } from "./constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    setResInfo(json.data);
    //console.log(json);
  };

  return resInfo;
};

export default useRestaurentMenu;
