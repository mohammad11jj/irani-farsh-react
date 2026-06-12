import { Link } from "react-router";
import Container from "../common/Container";
import SearchBar from "./SearchBar";
import Logo from "../common/Logo";
import Button from "../common/Button";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../features/cart/cartSlice";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const totalItems = useSelector(selectTotalItems);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

const prevItems = useRef(totalItems);

useEffect(() => {
  if (totalItems > prevItems.current) {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 300);

    prevItems.current = totalItems;

    return () => clearTimeout(timer);
  }

  prevItems.current = totalItems;
}, [totalItems]);

  return (
    <header className="border-b border-neutral-300 md:border-0">
      <Container>
        <div className="flex flex-col gap-3 py-3 px-4 md:border-b md:border-neutral-300">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center gap-3 md:gap-6">
              {/* Hamburger menu with animation */}
              <div
                className="w-12 h-12 bg-neutral-100 rounded-lg flex flex-col items-center justify-center gap-1.5 cursor-pointer md:hidden transition-all duration-300 hover:bg-neutral-200"
                onClick={toggleMenu}
              >
                <span
                  className={`
                  w-5 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out
                  ${isOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"}
                `}
                />
                <span
                  className={`
                  w-5 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out
                  ${isOpen ? "opacity-0" : "opacity-100"}
                `}
                />
                <span
                  className={`
                  w-5 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out
                  ${isOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"}
                `}
                />
              </div>

              <Logo />
              <div className="w-80 md-custom:w-75 lg-custom:w-100 hidden md:block">
                <SearchBar />
              </div>
            </div>

            {/* بقیه کد header به همان صورت قبلی */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Cart btn */}
              
                <Link to="/cart" className="relative w-12 h-12 px-1 border border-primary-500 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-primary-500 group">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-300"
                  >
                    <path
                      d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z"
                      fill="#CB1B1B"
                      className="transition-all duration-300 group-hover:fill-white"
                    />
                  </svg>
                  {totalItems > 0 && (
                    <span
                      className={`absolute -top-2 -right-2 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-primary-500 text-white text-[10px] font-bold shadow-md transition-transform ${
                        animate ? "badge-pop" : ""
                      }`}
                    >
                      {totalItems}
                    </span>
                  )}
                </Link>
              

              
                <Link to="/register" className="w-12 h-12 px-1 border border-primary-500 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-primary-500 group md:hidden">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-300"
                  >
                    <path
                      d="M11.6667 11.6667L15.8333 7.5L11.6667 3.33333L10.4917 4.50833L12.6417 6.66667H5V8.33333H12.6417L10.4917 10.4917L11.6667 11.6667Z"
                      fill="#CB1B1B"
                      className="transition-all duration-300 group-hover:fill-white"
                    />
                    <path
                      d="M13.3333 13.3333H1.66667V1.66667H13.3333V3.33333H15V1.66667C15 0.75 14.2583 0 13.3333 0H1.66667C0.75 0 0 0.75 0 1.66667V13.3333C0 14.25 0.75 15 1.66667 15H13.3333C14.2583 15 15 14.25 15 13.3333V11.6667H13.3333V13.3333Z"
                      fill="#CB1B1B"
                      className="transition-all duration-300 group-hover:fill-white"
                    />
                  </svg>
                </Link>
              {/* Register or login btn in desktop */}
              <div className="hidden md:block">
                <Button
                  to="/register"
                  tailwindClasses=" border-primary-500 text-primary-500 gap-2 hover:bg-primary-500 hover:text-white group "
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-300"
                  >
                    <path
                      d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z"
                      fill="#CB1B1B"
                      className="transition-all duration-300 group-hover:fill-white"
                    />
                  </svg>
                  <span className="translate-y-0.75">ورود/ثبت نام</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden transition-all duration-300 ease-in-out">
            <MobileMenu isOpen={isOpen} onClose={closeMenu} />
          </div>

          <div>
            <div className="md:hidden">
              <SearchBar />
            </div>
            <div className="py-2 hidden md:block">
              <DesktopMenu />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
