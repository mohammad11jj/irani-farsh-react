import { Link } from "react-router";

function FooterLinks({ title }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h6 className="text-base font-bold text-neutral-600 pb-2">{title}</h6>
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="" className="text-xl font-medium text-neutral-500">
              لوکس
            </Link>
          </li>
          <li>
            <Link to="" className="text-xl font-medium text-neutral-500">
              قدیمی
            </Link>
          </li>
          <li>
            <Link to="" className="text-xl font-medium text-neutral-500">
              مدرن
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FooterLinks;
