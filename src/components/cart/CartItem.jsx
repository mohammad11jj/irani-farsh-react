import { FaPlus, FaMinus } from "react-icons/fa6";
import { formatPriceWithSeparator } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "../../features/cart/cartSlice";
import toast from "react-hot-toast";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const {
    id,
    title,
    image,
    company,
    price,
    quantity,
    details: { color },
  } = product;

  const handleDelete = () => {
    dispatch(deleteFromCart(id));

    toast("محصول از سبد خرید حذف شد", {
      icon: "🗑️",
    });
  };

  const handleDecrease = () => {
  if (quantity === 1) {
    toast("محصول از سبد خرید حذف شد", {
      icon: "🗑️",
    });
  }

  dispatch(decreaseQuantity(id));
};

  return (
    <div className="cart-item  pb-5">
      {/* product info */}
      <div className="info flex flex-col gap-3.5">
        <h5 className="text-xl font-semibold text-black">{title}</h5>
        <p className="text-lg font-medium text-black">
          <span>رنگ : </span>
          <span>{color}</span>
        </p>
        <p className="text-lg font-medium text-black">{company}</p>
        <div className="flex items-center gap-6">
          <p className="text-base font-semibold text-neutral-700">قیمت:</p>
          <h5 className="text-xl font-semibold text-black">
            {formatPriceWithSeparator(price)}
          </h5>
        </div>
      </div>
      {/* product img */}
      <div className="image">
        <img
          src={image}
          alt={title}
          className="w-full rounded-lg object-cover"
        />
      </div>
      {/* quantity */}
      <div className="quantity flex items-center justify-between border border-neutral-400 rounded-lg px-4 pb-1 pt-4">
        <div className="flex items-start  gap-6">
          <div className="flex items-start gap-6 ">
            <FaPlus
              className="text-primary-500 cursor-pointer"
              onClick={() => dispatch(increaseQuantity(id))}
            />
            <div className="flex flex-col items-center text-sm font-semibold">
              <span>{quantity}</span>
              <span>تعداد</span>
            </div>
            <FaMinus
              className="text-primary-500 cursor-pointer"
              onClick={handleDecrease}
            />
          </div>
          <svg
            width="17"
            height="21"
            viewBox="0 0 17 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" cursor-pointer"
            onClick={handleDelete}
          >
            <path
              d="M12.8333 7V18.6667H3.5V7H12.8333ZM11.0833 0H5.25L4.08333 1.16667H0V3.5H16.3333V1.16667H12.25L11.0833 0ZM15.1667 4.66667H1.16667V18.6667C1.16667 19.95 2.21667 21 3.5 21H12.8333C14.1167 21 15.1667 19.95 15.1667 18.6667V4.66667Z"
              fill="#CB1B1B"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
