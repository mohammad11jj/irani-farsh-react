import Logo from "../common/Logo";
import SocialLinks from "./SocialLinks";
import FooterLinks from "./FooterLinks";
import Container from "../common/Container";

function Footer() {
  return (
    <footer className="bg-neutral-50 py-10 md:py-0">
      <Container>
        <div className="w-full mx-auto md:py-6 flex justify-between items-center flex-col-reverse gap-8 md:flex-row ">
          <div className="basis-[43%] flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="inline-flex">
              <Logo  />

              </div>
              <p className="text-lg text-neutral-600">
                با ایرانی فرش همراه باشید و از زیبایی و شگفتی های فرش های متنوع
                و با کیفیت ما لذت ببرید. خرید آسان، تحویل سریع و خدمات پس از
                فروش حرفه ای، تنها چندی از ویژگی های خرید از ماست. با ایرانی فرش
                یک خرید آسان و لذت بخش را تجربه کنید.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <p className="text-xl text-neutral-600">
                  تلفن پشتیبانی: 0212544
                </p>
                <SocialLinks />
              </div>
              <div>
                <img src="../assets/icons/ENAMAD.png" alt="ENAMAD" />
              </div>
            </div>
          </div>
          <div className=" flex items-center pb-10 md:pb-0 md:gap-4 justify-between gap-15">
            <FooterLinks title="فرش های  دست بافت" />
            <FooterLinks title="فرش های ماشینی" />
            <FooterLinks title="سایر فرش ها" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
