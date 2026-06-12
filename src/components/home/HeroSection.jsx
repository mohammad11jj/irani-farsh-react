import Button from "../common/Button";
import Container from "../common/Container";
import ImageStack from "../common/ImageStack";

function HeroSection() {
  return (
    <div className="my-10">
      <Container>
        <div className="flex flex-col-reverse gap-10 md:flex-row">
          {/* متن */}
          <div className="flex w-full flex-1 flex-col items-center justify-center gap-12 basis-[50%] md:basis-[40%] md:gap-6 lg:basis-[45%] xl:basis-[50%]">
            <div className="flex flex-col gap-6 px-4">
              <h2 className="text-center text-2xl font-bold text-black sm:text-[40px] md:text-[22px] lg:text-[24px]">
                خرید راحت فرش، در{" "}
                <span className="text-primary-500">ایرانی فرش</span>
              </h2>

              <p className="px-2 text-center text-base font-semibold text-black sm:text-2xl/12 md:text-base">
                با ایـــرانی فرش در سریع ترین زمان ممکن فرش خودت رو سفارش بده و
                از تنوع بی نظیر فرش ها لذت ببر.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button tailwindClasses="bg-white border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white">
                <span className="translate-y-0.75 text-sm sm:text-base">
                  محصولات ویژه ایرانی فرش
                </span>
              </Button>

              <Button tailwindClasses="bg-primary-500 text-white hover:bg-white hover:text-primary-500">
                <span className="translate-y-0.75 text-sm sm:text-base">
                  عضویت در باشگاه مشتریان
                </span>
              </Button>
            </div>
          </div>

          {/* تصاویر */}
          <div className="flex basis-[50%] md:basis-[60%] lg:basis-[55%] xl:basis-[50%]">
            <ImageStack />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;