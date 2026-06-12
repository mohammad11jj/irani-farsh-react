import Button from "../common/Button";

function ProductInfo({ product,type }) {
  const {
    name,
    title,
    details: { quality, color, shape, typeOfWeft, typeOfWarp, typeOfYarn },
  } = product;

  return (
    <div className="space-y-7">
      {/* TOP */}
      <div className="sm:border-b border-neutral-400 space-y-4 pb-4">
        <h6 className="text-base font-bold text-primary-500 hidden sm:block">
          فرش {name} / {type} {name}
        </h6>
        <h4 className="text-2xl font-bold text-black">{title}</h4>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-6">
        <p className="text-lg font-semibold hidden sm:block">
          اندازه فرش: شش متری (۳۰۰* ۲۰۰)
        </p>
        <div className="flex flex-col gap-4 ">
          <p className="text-lg font-semibold hidden sm:block">ویژگی ها</p>
          {/* Details box */}
          <div className="flex sm:flex-col sm:gap-10 items-center justify-between gap-4 border-b border-neutral-200 pb-4 sm:border-0 sm:pb-0">
            <div className="grid grid-cols-2 gap-4 w-full flex-1 min-w-0">
              <div className=" bg-neutral-200 rounded-lg px-1.5 py-3 flex flex-col gap-1 ">
                <p className="text-sm font-medium text-neutral-700">
                  کیفیت فرش
                </p>
                <p className="text-base font-semibold text-black">
                  درجه {quality}
                </p>
              </div>
              <div className=" bg-neutral-200 rounded-lg px-1.5 py-3 flex flex-col gap-1 ">
                <p className="text-sm font-medium text-neutral-700">
                  رنگ زمینه
                </p>
                <p className="text-base font-semibold text-black">{color}</p>
              </div>
              <div className=" bg-neutral-200 rounded-lg px-1.5 py-3  flex-col gap-1 hidden sm:block">
                <p className="text-sm font-medium text-neutral-700">شکل</p>
                <p className="text-base font-semibold text-black">{shape}</p>
              </div>
              <div className=" bg-neutral-200 rounded-lg px-1.5 py-3  flex-col gap-1 hidden sm:block">
                <p className="text-sm font-medium text-neutral-700">
                  جنس نخ پود
                </p>
                <p className="text-base font-semibold text-black">
                  {typeOfWeft}
                </p>
              </div>
              <div className=" bg-neutral-200 rounded-lg px-1.5 py-3 flex-col gap-1 hidden sm:block">
                <p className="text-sm font-medium text-neutral-700">
                  جنس نخ تار
                </p>
                <p className="text-base font-semibold text-black">
                  {typeOfWarp}
                </p>
              </div>
              <div className=" bg-neutral-200 rounded-lg px-1.5 py-3  flex-col gap-1 hidden sm:block">
                <p className="text-sm font-medium text-neutral-700">
                  جنس نخ خاب
                </p>
                <p className="text-base font-semibold text-black">
                  {typeOfYarn}
                </p>
              </div>
            </div>
            <Button tailwindClasses=" border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white ">
              <span className="translate-y-0.75">مشاهده همه ویژگی ها</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
