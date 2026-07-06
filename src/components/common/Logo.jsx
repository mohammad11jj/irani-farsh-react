import { Link } from "react-router";

function Logo({ className = "" }) {
  return (
    <Link to="/">
      <h6
        className={`text-lg sm:text-2xl font-bold text-primary-500 translate-y-0.75 ${className}`}
      >
        ایـــرانی فرش
      </h6>
    </Link>
  );
}

export default Logo;
