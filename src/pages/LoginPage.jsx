import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";


function LoginPage() {
  return (
    <AuthLayout title="ورود">
      {{
        desktop: <LoginForm />,
        mobile: <LoginForm mobile />,
      }}
    </AuthLayout>
  );
}

export default LoginPage;