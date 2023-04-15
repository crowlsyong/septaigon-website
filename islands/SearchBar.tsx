import { tw } from "twind";
import { h } from "preact";

const SearchBar = () => {
  const handleKeyPress = (event: { key: string; preventDefault: () => void; }) => {
    if (event.key === "Enter") {
      event.preventDefault();
      // Perform search here
      console.log("Performing search...");
    }
  };

  return (
    <div className={tw`relative`}>
      <input
        type="text"
        placeholder="Search"
        className={tw`w-full py-2 pr-8 pl-4 text-white leading-tight bg-gray-800 border-2 border-gray-300 rounded-full appearance-none focus:outline-none focus:border-blue-500`}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
