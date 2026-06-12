import { Link } from "react-router";

function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`
        w-full bg-white transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
      `}
    >
      <nav className="flex flex-col w-full items-center gap-8 py-6 px-4 border-t border-neutral-100">
        <Link
          to="/"
          onClick={onClose}
          className="text-base text-black font-semibold hover:text-primary-500 transition-all duration-300"
        >
          صفحه اصلی
        </Link>
        <Link
          to="/blog"
          onClick={onClose}
          className="text-base text-black font-semibold hover:text-primary-500 transition-all duration-300"
        >
          وبلاگ
        </Link>
        <Link
          to="/contact"
          onClick={onClose}
          className="text-base text-black font-semibold hover:text-primary-500 transition-all duration-300"
        >
          تماس با ما
        </Link>
        <Link
          to="/about"
          onClick={onClose}
          className="text-base text-black font-semibold hover:text-primary-500 transition-all duration-300"
        >
          درباره ما
        </Link>
      </nav>
    </div>
  );
}

export default MobileMenu;