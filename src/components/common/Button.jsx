import { Link } from "react-router";

function Button({ children, to, tailwindClasses,onClick }) {
  return (
    <Link
      to={to}
      className={`text-sm sm:text-lg leading-12 font-semibold border rounded-xl px-1 h-8 sm:px-4 sm:h-12 inline-flex items-center justify-center gap-1 sm:gap-2 transition-all duration-300 ${tailwindClasses} `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default Button;
