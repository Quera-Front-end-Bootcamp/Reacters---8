const Search = () => {

    return (
        <div className="flex justify-start gap-4 items-center px-12 py-2 h-16 text-slate-50">
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <input
                className="bg-transparent text-base placeholder:text-gray-100 border border-gray-400 p-2.5 rounded-md md:w-1/3 w-1/2"
                dir="rtl"
                type="text"
                placeholder="جستجو ..."
            />
        </div>
    )
}
export default Search;