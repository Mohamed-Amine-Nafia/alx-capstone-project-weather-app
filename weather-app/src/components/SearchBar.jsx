function SearchBar() {
  return (
    <div className="h-fit flex items-end justify-between gap-2">
      <input
        placeholder="Enter location"
        type="text"
        className="text-[#72aea1] border-b-1 p-2 w-4/5 outline-0"
      />
      <button className="bg-[#81a09a] py-1 px-3">Search</button>
    </div>
  );
}
export default SearchBar;
