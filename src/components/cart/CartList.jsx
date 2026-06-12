function CartList({ children }) {
  return (
    <div className="w-full px-6 py-9 md:border border-neutral-400 rounded-xl space-y-14">
      {/* title */}
      <h6 className="text-base font-bold">سبد خرید شما</h6>
      <div className="md:divide-y-0 divide-y space-y-5 md:space-y-10 divide-neutral-300">
        {/* CART ITEM */}
        {children}
      </div>
    </div>
  );
}

export default CartList;
