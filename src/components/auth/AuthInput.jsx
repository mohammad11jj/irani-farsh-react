function AuthInput({
  id,
  label,
  icon,
  mobile = false,
  type = "text",
}) {
  return (
    <div className="relative border border-black rounded-xl focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-all duration-200 group">
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#909090] group-focus-within:text-primary-500">
        {icon}
      </div>

      <input
        type={type}
        id={id}
        placeholder=" "
        className={`w-full outline-0 p-2 pt-5 pr-8 rounded-xl peer ${
          mobile ? "text-base font-medium" : "text-lg font-medium"
        }`}
      />

      <label
        htmlFor={id}
        className={`
          absolute right-8 top-1/2 -translate-y-1/2
          text-neutral-800
          transition-all duration-200
          pointer-events-none
          font-medium

          ${
            mobile
              ? `
                text-sm
                peer-focus:text-base
                peer-placeholder-shown:text-sm
                peer-not-placeholder-shown:text-base
              `
              : `
                text-base
                peer-focus:text-lg
                peer-placeholder-shown:text-base
                peer-not-placeholder-shown:text-lg
              `
          }

          peer-focus:top-0
          peer-focus:-translate-y-1/2
          peer-focus:text-primary-500
          peer-focus:bg-white
          peer-focus:px-1

          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:-translate-y-1/2

          peer-not-placeholder-shown:top-0
          peer-not-placeholder-shown:-translate-y-1/2
          peer-not-placeholder-shown:text-primary-500
          peer-not-placeholder-shown:bg-white
          peer-not-placeholder-shown:px-1
        `}
      >
        {label}
      </label>
    </div>
  );
}

export default AuthInput;