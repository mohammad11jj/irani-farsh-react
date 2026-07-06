import Button from "../common/Button";
import Container from "../common/Container";
import ProductCard from "../product/ProductCard";

function ProductList({products, title }) {
  return (
    <div className="my-10">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h4 className="text-lg sm:text-2xl text-black font-bold ">{title}</h4>
            <Button tailwindClasses=" text-primary-500 border-primary-500 hover:text-white hover:bg-primary-500 group" to='/'>
              <span  className="translate-y-0.75">مشاهده همه</span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300"
              >
                <path
                  d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                  fill="#CB1B1B" className="transition-all duration-300 group-hover:fill-white"
                />
              </svg>
            
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* product card */}
            {products.map(product=><ProductCard product={product} key={product.id} />)}

          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductList;
