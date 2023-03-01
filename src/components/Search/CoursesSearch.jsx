import "./coursesSearch.css"

const CoursesSearch = ({ searchInput, setSearchInput }) => {
    return (
        <div className="box relative">
            <form className="search">
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-1/2 left-[10%] text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    className="input bg-gray-50 pl-14 pt-3 pb-2 w-[200px] border-2 border-gray-300 rounded-md text-gray-200 text-base outline-none"
                    dir="ltr"
                    type="text"
                    placeholder=" "
                />
            </form>
        </div>
    )
}
export default CoursesSearch          