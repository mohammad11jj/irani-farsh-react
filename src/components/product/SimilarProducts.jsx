

import Container from "../common/Container";
import ProductCard from "./ProductCard";

function SimilarProducts({ products }) {

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="my-10">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="">
            <h4 className="text-2xl text-black font-bold">فرش های مشابه</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-custom:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SimilarProducts;
