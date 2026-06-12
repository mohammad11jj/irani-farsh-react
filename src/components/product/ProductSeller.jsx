import { useDispatch, useSelector } from "react-redux";
import { formatPriceWithSeparator } from "../../utils/formatPrice";
import { addToCart, selectCart } from "../../features/cart/cartSlice";
import Button from "../common/Button";
import toast from "react-hot-toast";

function ProductSeller({ product }) {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const { company, rate, price, performance } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    toast.success("محصول به سبد خرید اضافه شد", {
  icon: "🛒",
});
  };

  return (
    <div className=" py-7.75 px-3 rounded-xl flex flex-col gap-6 sm:border border-neutral-400">
      <h6 className="text-base text-black font-bold">فروشنده</h6>
      <div className="flex items-center gap-2">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.36 5L15.96 8H2.04L2.64 5H15.36ZM17 0H1V2H17V0ZM17 3H1L0 8V10H1V16H11V10H15V16H17V10H18V8L17 3ZM3 14V10H9V14H3Z"
            fill="#212121"
          />
        </svg>
        <p className="text-base font-semibold text-neutral-800">{company}</p>
      </div>
      <p className="text-sm font-semibold">
        <span className="text-black"> عملکرد </span>
        <span className="text-emerald-700"> {performance} </span>
      </p>
      <div className="flex items-center gap-2">
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.65741 0L8.22901 4.83688H13.3148L9.20031 7.82624L10.7719 12.6631L6.65741 9.67376L2.54291 12.6631L4.11451 7.82624L1.38283e-05 4.83688H5.08581L6.65741 0Z"
            fill="#FFB800"
          />
        </svg>
        <p className="text-sm font-semibold">{rate}</p>
      </div>
      {/* divider */}
      <div className="w-full h-px bg-neutral-400 "></div>
      <div className="flex items-center justify-between">
        <h6 className="text-base font-bold text-neutral-700">قیمت:</h6>
        <h5 className="text-xl font-semibold text-black">
          {formatPriceWithSeparator(price)}
        </h5>
      </div>
      <Button
        tailwindClasses=" bg-primary-500 text-white w-full hover:bg-white border-primary-500 hover:text-primary-500"
        onClick={handleAddToCart}
      >
        <span className="translate-y-0.75">افزودن به سبد خرید</span>
      </Button>
    </div>
  );
}

export default ProductSeller;
