import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="relative w-full max-w-md flex items-center">
      <input
        type="text"
        placeholder="جستجو فرش"
        className="
          w-full
          rounded-xl
          border
          border-neutral-300
          bg-neutral-100
          py-3
          pe-4
          ps-12
          text-lg
          font-semibold
          outline-none
          transition-all
          placeholder:text-neutral-500
          placeholder:translate-y-0.75
          
        "
      />

      <Search
        size={20}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-neutral-500
        "
      />
    </div>
  );
}

export default SearchBar;
