import { Link } from "react-router";
import PasswordIcon from "../icons/PasswordIcon";
import UserIcon from "../icons/UserIcon";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import Button from "../common/Button";

function LoginForm({ mobile = false }) {
  return (
    <form className="w-full flex flex-col gap-4 p-5">
      <AuthInput
        id="phone"
        label="شماره موبایل"
        mobile={mobile}
        icon={<UserIcon />}
      />

      <PasswordInput
        id="password"
        label="رمز عبور"
        mobile={mobile}
        icon={<PasswordIcon />}
      />

      <Button tailwindClasses="w-full bg-primary-500 text-white rounded-xl hover:bg-white hover:text-primary-500 ">
        <span className="translate-y-0.75">ورود</span>
      </Button>

      <p className="mt-4 text-center text-xl font-medium">
        ثبت نام نکرده اید؟ همین حالا{" "}
        <Link to="/register" className="text-primary-500">
          عضو
        </Link>{" "}
        شوید
      </p>
    </form>
  );
}

export default LoginForm;
