import { Link } from "react-router";

function Breadcrumb({ items }) {
  return (
    <div className="mt-5 mb-10 px-4">
      <ul className="flex items-center gap-3 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-3">
              {index > 0 && (
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                      fill="#717171"
                    />
                  </svg>
                </span>
              )}

              {item.to ? (
                <Link
                  to={item.to}
                  className={` ${
                    isLast ? "text-neutral-500" : "text-primary-500"
                  }`}
                >
                  {index === 0 ? (
                    <div className="flex items-center gap-2">
                      <span>
                        <svg
                          width="20"
                          height="17"
                          viewBox="0 0 20 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 2.69L15 7.19V15H13V9H7V15H5V7.19L10 2.69ZM10 0L0 9H3V17H9V11H11V17H17V9H20L10 0Z"
                            fill="#CB1B1B"
                          />
                        </svg>
                      </span>

                      <span
                        className={`text-lg font-semibold translate-y-0.75 ${
                          isLast
                            ? "text-neutral-500"
                            : "text-primary-500"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  ) : (
                    <span
                      className={`text-lg font-semibold translate-y-0.75 ${
                        isLast
                          ? "text-neutral-500"
                          : "text-primary-500"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </Link>
              ) : (
                <span
                  className={`text-lg font-semibold translate-y-0.75 ${
                    isLast
                      ? "text-neutral-500"
                      : "text-primary-500"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumb;