import Container from "../components/common/Container";
import "../styles/shoppingCart.css";
import Breadcrumb from "../components/common/Breadcrumb";
import CartItem from "../components/cart/CartItem";
import { useSelector } from "react-redux";
import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import { selectCart } from "../features/cart/cartSlice";

import { TbShoppingCartOff } from "react-icons/tb";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
function CartPage() {
  const cart = useSelector(selectCart);
  useDocumentTitle("سبد خرید | ایرانی فرش");

  return (
    <div>
      <Container>
        <div className="mb-30">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[{ label: "خانه", to: "/" }, { label: "سبد خرید" }]}
          />
          {/* Main content */}
          <div className="grid grid-cols-1 gap-10 lg:gap-20 items-start md:grid-cols-[2fr_1fr]">
            {/* Cart items */}
            <CartList>
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center ">
                  <TbShoppingCartOff className="text-[140px] text-primary-500/50" />

                  <h3 className="mt-4 text-2xl font-bold">
                    سبد خرید شما خالی است
                  </h3>

                  <p className="mt-2 text-neutral-500">
                    هنوز محصولی به سبد خرید اضافه نکرده‌اید
                  </p>
                </div>
              ) : (
                cart.map((item) => <CartItem product={item} key={item.id} />)
              )}
            </CartList>

            {/* Cart summary */}
            {cart.length > 0 && <CartSummary />}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartPage;
