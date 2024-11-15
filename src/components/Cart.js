import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(clearItem());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center m-2 p-2 ">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button>
        <h1
          className=" bg-black text-white rounded-lg p-2 m-2"
          onClick={handleRemoveItem}
        >
          Clear cart
        </h1>
      </button>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
