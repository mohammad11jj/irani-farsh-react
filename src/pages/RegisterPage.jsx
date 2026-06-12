import AuthLayout from "../components/auth/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

import { useDocumentTitle } from "../hooks/useDocumentTitle";

function RegisterPage() {
  useDocumentTitle("ثبت نام | ایرانی فرش");

  return (
    <AuthLayout title="ثبت نام">
      {{
        desktop: <RegisterForm />,
        mobile: <RegisterForm mobile />,
      }}
    </AuthLayout>
  );
}

export default RegisterPage;