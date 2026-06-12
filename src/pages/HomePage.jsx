import CategorySection from "../components/home/CategorySection";
import ClubSection from "../components/home/ClubSection";
import HeroSection from "../components/home/HeroSection";
import ProductList from "../components/home/ProductList";
import { products } from "../data/products";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function HomePage() {
  useDocumentTitle("ایرانی فرش | خرید فرش ماشینی و دستبافت");
  const handMadeCarpets = products.filter(
    (product) => product.type === "handmade",
  );

  const machineMadeCarpets = products.filter(
    (product) => product.type === "machinemade",
  );
  const images1 = {
    image1: "/assets/images/11.png",
    image2: "/assets/images/22.png",
    image3: "/assets/images/33.png",
    image4: "/assets/images/44.png",
  };
  const images2 = {
    image1: "/assets/images/1111.png",
    image2: "/assets/images/2222.png",
    image3: "/assets/images/3333.png",
    image4: "/assets/images/4444.png",
  };
  const categories2 = [
    { title: "فرش مدرن فانتزی", buttonText: "مشاهده و خرید فرش مدرن" },
    { title: "فرش دستبافت تبریز", buttonText: "مشاهده و خرید فرش تبریز" },
    { title: "قالیچه دستبافت", buttonText: "مشاهده و خرید قالیچه" },
    { title: "قالیچه ماشینی", buttonText: "مشاهده و خرید قالیچه" },
  ];
  return (
    <>
      <HeroSection />
      <CategorySection images={images1} />
      <ProductList title="فرش های دستبافت" products={handMadeCarpets} />
      <CategorySection images={images2} categories={categories2} />
      <ProductList title="فرش های ماشینی" products={machineMadeCarpets} />
      <ClubSection />
    </>
  );
}

export default HomePage;
