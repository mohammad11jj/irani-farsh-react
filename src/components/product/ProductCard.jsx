import Button from "../common/Button";
import { formatPriceWithSeparator } from "../../utils/formatPrice";

function ProductCard({ product }) {
  return (
    <div className=" border border-neutral-300 rounded-xl flex flex-col gap-6 p-4">
      <div className="rounded-xl overflow-hidden">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold text-black h-20">{product.title}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-black font-semibold">قیمت:</span>
          <span className="text-lg text-black font-semibold">
            {formatPriceWithSeparator(product.price)} تومان
          </span>
        </div>
      </div>
      <Button
        to={`/product/${product.id}`}
        tailwindClasses=" border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white "
      >
        <span className="translate-y-0.75">مشاهده بیشتر</span>
      </Button>
    </div>
  );
}

export default ProductCard;
