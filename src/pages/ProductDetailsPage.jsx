import { useParams } from "react-router";
import Container from "../components/common/Container";
import { products } from "../data/products";
import SimilarProducts from "../components/product/SimilarProducts";
import { findSimilarProducts } from "../utils/productUtils";
import ProductGallery from "../components/product/ProductGallery";
import Breadcrumb from "../components/common/Breadcrumb";
import ProductInfo from "../components/product/ProductInfo";
import ProductSeller from "../components/product/ProductSeller";
import NotFoundPage from "./NotFoundPage";
import ReviewList from "../components/product/ReviewList";
import { getProductReviews } from "../utils/reviewUtils";
import { reviews } from "../data/reviews";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function ProductDetailsPage() {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  useDocumentTitle(
    product ? `${product.title} | ایرانی فرش` : "محصول یافت نشد | ایرانی فرش",
  );

  if (!product) {
    return <NotFoundPage />;
  }

  const { name, title, image, images } = product;
  const productReviews = getProductReviews(product.id, reviews, 3);

  const type = product.type === "handmade" ? "فرش دست بافت" : "فرش ماشینی";
  const similarProducts = findSimilarProducts(Number(id), products, 5);

  return (
    <div className="mb-35">
      <Container>
        <div>
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "خانه", to: "/" },
              { label: type },
              { label: name },
            ]}
          />
          {/* Main part */}
          <div className="grid grid-cols-1 gap-5 sm:gap-20 items-start md-custom:grid-cols-2 lg-custom:grid-cols-3 mb-15">
            {/* Gallery */}
            <ProductGallery image={image} images={images} title={title} />
            {/* Carpet info sec */}
            <ProductInfo product={product} type={type} />
            {/* Seller box */}
            <ProductSeller product={product} />
          </div>
          <SimilarProducts products={similarProducts} />
          {/* Review Section */}
          <ReviewList reviews={productReviews} />
        </div>
      </Container>
    </div>
  );
}

export default ProductDetailsPage;
