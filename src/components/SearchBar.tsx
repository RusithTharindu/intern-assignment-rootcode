interface SearchProps {
    onSearch: (query: string) => void;
}

const SearchBar:React.FC<SearchProps> = ({ onSearch }) => {
    return(
        <div className="w-full flex flex-col items-center text-[15px]">
            <p className="text-slate-600 text-[15px] font-bold mb-2">Need to find some RootLoops</p>
            <input
                type="text"
                placeholder="Search it here"
                onChange={(e) => onSearch(e.target.value)}
                className="border px-3 py-2 w-full mb-4 text-black max-w-[1000px] rounded-full"
            />
        </div>
    )
}

export default SearchBar;