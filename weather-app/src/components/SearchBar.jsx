import { useInput } from "./store/useInput";
function SearchBar() {
  const { inputValue, setInputValue } = useInput();
  return (
    <div className="h-fit flex items-end justify-between gap-2">
      <input
        value={inputValue}
        placeholder="Enter location"
        type="text"
        className="text-white border-b-1 p-2 w-4/5 outline-0"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="bg-white py-1 px-3">Search</button>
    </div>
  );
}
export default SearchBar;
