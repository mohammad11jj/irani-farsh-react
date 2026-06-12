import Logo from "../common/Logo";

function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen lg:py-8">
      {/* Desktop */}
      <div className="hidden lg:flex items-center max-w-312 mx-auto">
        {/* Form */}
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col items-center w-full max-w-125">
            <div className="flex flex-col gap-16 items-center w-full">
              <div className="inline-flex">
                <Logo className="text-[32px]" />
              </div>

              <h4 className="text-2xl font-bold text-[#9e1515]">
                {title}
              </h4>
            </div>

            <div className="w-full">{children.desktop}</div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-125 h-175">
            <div
              className="bg-cover bg-center bg-no-repeat w-full h-full rounded-[48px]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) -35.59%, rgba(31, 33, 97, 0.4) 83.26%), linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), url('./assets/images/signUpImage.png')`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="h-12.5"></div>

        <div className="relative">
          <div className="w-full">
            <div className="w-full h-87.5">
              <div
                className="bg-cover bg-position-[50%_120%] bg-no-repeat w-full h-full scale-130"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) -35.59%, rgba(31, 33, 97, 0.4) 83.26%), linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), url('./assets/images/signUpImage.png')`,
                }}
              />
            </div>
          </div>

          <div className="absolute top-0 left-0 right-0 flex justify-center mt-50">
            <div className="flex flex-col items-center w-full bg-white rounded-3xl shadow-xl">
              <div className="flex flex-col gap-6 items-center w-full pt-6">
                <div className="inline-flex">
                  <Logo className="text-[28px]" />
                </div>

                <h4 className="text-xl font-bold text-[#9e1515]">
                  {title}
                </h4>
              </div>

              <div className="w-full">{children.mobile}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;