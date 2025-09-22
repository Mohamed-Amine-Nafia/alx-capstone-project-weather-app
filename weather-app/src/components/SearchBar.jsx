import { useInput } from "../store/useInput";
import { DataContext } from "../context/dataContext";
import { useContext } from "react";
function SearchBar() {
  const { getData } = useContext(DataContext);
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
      <button onClick={() => getData()} className="bg-white py-1 px-3">
        Search
      </button>
    </div>
  );
}
export default SearchBar;
