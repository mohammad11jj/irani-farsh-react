import { useSelector } from "react-redux";
import {
  selectTotalItems,
  selectTotalPrice,
} from "../../features/cart/cartSlice";
import Button from "../common/Button";
import { formatPriceWithSeparator } from "../../utils/formatPrice";

function CartSummary() {
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="flex flex-col gap-8 px-4.75 py-6.5 rounded-lg border border-neutral-400">
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold">تعداد فرش:</p>
        <p className="text-base font-semibold">{totalItems}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold">مجموع سبد خرید:</p>
        <h5 className="text-xl font-semibold">{formatPriceWithSeparator(totalPrice)}</h5>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold">ارسال توسط:</p>
        <h5 className="text-xl font-semibold">ایرانی فرش</h5>
      </div>
      <Button tailwindClasses=" bg-primary-500 text-white hover:bg-white hover:text-primary-500 ">
        <span className="translate-y-0.75">سفارش و خرید</span>
      </Button>
    </div>
  );
}

export default CartSummary;
