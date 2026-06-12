import { Link } from "react-router";

function Button({ children, to, tailwindClasses,onClick }) {
  return (
    <Link
      to={to}
      className={`text-lg leading-12 font-semibold border rounded-xl px-4 h-12 inline-flex items-center justify-center gap-2 transition-all duration-300 ${tailwindClasses} `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default Button;
