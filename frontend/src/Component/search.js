const Search = () => {
    return (
        <div className="relative mb-6 w-3/4 flex items-center justify-center">
            <input
                type="text"
                placeholder="Search"
                className="bg-blue-400 w-full p-2 pl-4 text-white rounded-2xl h-10 border border-gray-300"
            />
            <button className="absolute right-0 h-11 w-10 bg-pink-600 text-white rounded-tr-2xl rounded-br-2xl">
                🔍
            </button>
        </div>
    );
}

export default Search;
