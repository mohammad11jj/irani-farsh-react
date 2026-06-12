import { Link } from "react-router"

function DesktopMenu() {
  return (
    <>
      <nav className="flex items-center gap-8">
                <Link
                  to="/"
                  className="text-base text-primary-500 font-semibold hover:text-primary-500 transition-all duration-300"
                >
                  صفحه اصلی
                </Link>
                <Link
                  to="/"
                  className="text-base text-black font-semibold hover:text-primary-500 transition-all duration-300"
                >
                  وبلاگ
                </Link>
                <Link
                  to="/"
                  className="text-base text-black font-semibold hover:text-primary-500 transition-all duration-300"
                >
                  تماس با ما
                </Link>
                <Link
                  to="/"
                  className="text-base text-black font-semibold hover:text-primary-500 transition-all duration-300"
                >
                  درباره ما
                </Link>
              </nav>
    </>
  )
}

export default DesktopMenu
