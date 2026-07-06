import Button from "../common/Button";

function ClubSection() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 my-12 md:my-20 lg:my-25 pb-20 md:pb-0">
      <div className="max-w-254 mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-35">
        
        <div className="w-full md:w-auto order-first md:order-last">
          <div className="grid grid-cols-2 gap-1 max-w-100 md:max-w-125 lg:max-w-none mx-auto">
            <img 
              src="./assets/images/club/2.png" 
              alt="club carpet"
              className="w-full h-auto object-cover"
            />
            <img 
              src="./assets/images/club/1.png" 
              alt="club carpet"
              className="w-full h-auto object-cover"
            />
            <img 
              src="./assets/images/club/4.png" 
              alt="club carpet"
              className="w-full h-auto object-cover"
            />
            <img 
              src="./assets/images/club/3.png" 
              alt="club carpet"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-md flex flex-col gap-4 md:gap-5">
          <p className="text-2xl md:text-3xl lg:text-[44px] text-center font-medium leading-tight">
            عضویت در باشگاه مشتریان
            <br /> 
            <span className="text-primary-500"> ایـــرانی فرش </span>
          </p>
          <p className="text-base md:text-lg lg:text-xl font-medium text-black text-center">
            با عضویت در باشگاه مشتریان ایرانــی فرش زودتر از تخفیفات با خبر شوید و
            از امکان تحویل رایگان فرش های خود بهره مند شوید.
          </p>
          <Button tailwindClasses="border-primary-500 text-primary-500 w-full hover:bg-primary-500 hover:text-white">
            <span className="translate-y-0.75">ایجاد عضویت</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ClubSection;