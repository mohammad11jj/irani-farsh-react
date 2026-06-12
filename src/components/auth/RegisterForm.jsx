import { Link } from "react-router";
import Button from "../common/Button";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";

import UserIcon from "../icons/UserIcon";
import PasswordIcon from "../icons/PasswordIcon";
import PhoneIcon from "../icons/PhoneIcon";

function RegisterForm({ mobile = false }) {
  return (
    <>
      <form
        className={`w-full p-5 ${
          mobile ? "space-y-6" : "space-y-8"
        }`}
      >
        <AuthInput
          id={mobile ? "name-mobile" : "name"}
          label="نام"
          icon={<UserIcon />}
          mobile={mobile}
        />

        <AuthInput
          id={mobile ? "lastName-mobile" : "lastName"}
          label="نام خانوادگی"
          icon={<UserIcon />}
          mobile={mobile}
        />

        <PasswordInput
          id={mobile ? "password-mobile" : "password"}
          label="ایجاد رمز عبور"
          icon={<PasswordIcon />}
          mobile={mobile}
        />

        <PasswordInput
          id={
            mobile
              ? "confirmPassword-mobile"
              : "confirmPassword"
          }
          label="تکرار رمز عبور"
          icon={<PasswordIcon />}
          mobile={mobile}
        />

        <AuthInput
          id={mobile ? "mobile-mobile" : "mobile"}
          label="شماره موبایل"
          icon={<PhoneIcon />}
          mobile={mobile}
        />

        <Button tailwindClasses="w-full bg-primary-500 text-white rounded-xl hover:bg-white hover:text-primary-500">
          <span className="translate-y-0.75">ثبت نام</span>
        </Button>
      </form>

      <p
        className={`mt-4 text-center font-medium ${
          mobile
            ? "text-base pb-6"
            : "text-xl"
        }`}
      >
        حساب کاربری دارید؟{" "}
        <Link
          to="/login"
          className="text-[#9e1515]"
        >
          ورود
        </Link>{" "}
        کنید
      </p>
    </>
  );
}

export default RegisterForm;