import Button from "../common/Button";
import Container from "../common/Container";

function CategorySection({ images, categories }) {
  const gradientStyle = {
    background: `linear-gradient(269.67deg, rgba(1, 48, 117, 0.8) -96.09%, rgba(0, 0, 0, 0) 99.55%),
                linear-gradient(270.11deg, rgba(2, 47, 113, 0.6) -99.67%, rgba(0, 0, 0, 0) 99.78%)`,
  };

  const defaultCategories = [
    { title: "فرش های جدید", buttonText: "مشاهده و خرید فرش جدید" },
    { title: "فرش های رنگارنگ", buttonText: "مشاهده و خرید فرش رنگارنگ" },
    { title: "پادری دستبافت", buttonText: "مشاهده و خرید پادری" },
    { title: "موکت اتاق", buttonText: "مشاهده و خرید موکت" },
  ];

  const categoryData = categories || defaultCategories;

  return (
    <div className="my-30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-6 lg:h-72">
          <div className="relative lg:col-span-1 lg:row-span-2 rounded-2xl overflow-hidden min-h-70 md:min-h-75 lg:min-h-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images?.image1})` }}
            ></div>
            <div className="absolute inset-0" style={gradientStyle}>
              <div className="absolute bottom-0 right-0 left-0 p-4 md:p-6 text-white">
                <h5 className="text-lg md:text-xl font-semibold mb-2">
                  {categoryData[0]?.title}
                </h5>
                <Button tailwindClasses="hover:bg-white/7 text-sm md:text-base">
                  <span className="translate-y-0.75">
                    {categoryData[0]?.buttonText}
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-1 lg:row-span-2 rounded-2xl overflow-hidden min-h-70 md:min-h-75 lg:min-h-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images?.image2})` }}
            ></div>
            <div className="absolute inset-0" style={gradientStyle}>
              <div className="absolute bottom-0 right-0 left-0 p-4 md:p-6 text-white">
                <h5 className="text-lg md:text-xl font-bold mb-2">
                  {categoryData[1]?.title}
                </h5>
                <Button tailwindClasses="hover:bg-white/7 text-sm md:text-base">
                  <span className="translate-y-0.75">
                    {categoryData[1]?.buttonText}
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-1 rounded-2xl overflow-hidden min-h-70 md:min-h-75 lg:min-h-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images?.image3})` }}
            ></div>
            <div className="absolute inset-0" style={gradientStyle}>
              <div className="absolute bottom-0 right-0 left-0 p-4 md:p-6 text-white">
                <h5 className="text-lg md:text-xl font-bold mb-2">
                  {categoryData[2]?.title}
                </h5>
                <Button tailwindClasses="hover:bg-white/7 text-sm md:text-base">
                  <span className="translate-y-0.75">
                    {categoryData[2]?.buttonText}
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-1 rounded-2xl overflow-hidden min-h-70 md:min-h-75 lg:min-h-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images?.image4})` }}
            ></div>
            <div className="absolute inset-0" style={gradientStyle}>
              <div className="absolute bottom-0 right-0 left-0 p-4 md:p-6 text-white">
                <h5 className="text-lg md:text-xl font-bold mb-2">
                  {categoryData[3]?.title}
                </h5>
                <Button tailwindClasses="hover:bg-white/7 text-sm md:text-base">
                  <span className="translate-y-0.75">
                    {categoryData[3]?.buttonText}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CategorySection;
