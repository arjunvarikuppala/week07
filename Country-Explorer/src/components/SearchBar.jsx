import { useEffect, useRef } from "react";

function SearchBar({ onSearch }) {
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search country..."
        onChange={handleChange}
        className="w-full max-w-md p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default SearchBar;