import { useState } from "react";
import { coursesData } from "./../../../core/courseConstants";
import "../style/style.css"

const FilterCourses = ({ setFilteredCourses }) => {

    //setting the activeState for each filter Button that gets clicked
    const [activeFilter, setActiveFilter] = useState("all")

    // display all courses
    const handleAllCourses = () => {
        setFilteredCourses(coursesData)
        setActiveFilter("all")
    }
    // removes fulled courses
    const handleSortByProgress = () => {
        setFilteredCourses(coursesData.filter((data) => data.progress !== 100))
        setActiveFilter("sortByProgress")
    }
    // sorts courses by price
    const handleSortByPrice = () => {
        const sortedPrice = [...coursesData].sort((a, b) => Number(b.price) - Number(a.price))
        setFilteredCourses(sortedPrice)
        setActiveFilter("sortByPrice")
    }
    // sorts courses by startDate
    const handleSortByDate = () => {
        setFilteredCourses([...coursesData].sort((a, b) => {
            const aDate = new Date(a.startDate)
            const bDate = new Date(b.startDate)
            return bDate - aDate
        }
        ))
        setActiveFilter("sortByDate")
    }

    return (
        <div className="dir-rtl w-full md:block flex justify-center">
            <div className="block md:flex w-[calc(100%-7rem)] md:justify-between justify-center items-center">
                <div className="font-semibold text-2xl text-[#0d5a5f] md:ml-8 md:mr-28 m-0 md:text-right text-center">
                    <p>دوره های آموزشی</p>
                </div>
                <div className="font-medium text-gray-700 md:p-0 pt-8">
                    <div className="filterOptions flex gap-2 md:justify-end justify-center">
                        <div onClick={handleAllCourses} className={`${activeFilter === "all" ? "bg-[#0d5a5f] text-white" : "bg-gray-100 text-[#0d5a5f]"} flex justify-evenly items-center text-center gap-2 w-fit border border-gray-100 py-2 px-2.5 rounded-md cursor-pointer hover:text-white hover:bg-[#0d5a5f]`} >
                            <p>تمام دوره ها</p>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg> */}
                        </div>
                        <div onClick={handleSortByDate} className={`${activeFilter === "sortByDate" ? "bg-[#0d5a5f] text-white" : "bg-gray-100 text-[#0d5a5f]"} flex justify-evenly items-center text-center gap-2 w-fit border border-gray-100 py-2 px-2.5 rounded-md cursor-pointer hover:text-white hover:bg-[#0d5a5f]`}>
                            <p>جدیدترین ها</p>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg> */}
                        </div>
                        <div onClick={handleSortByPrice} className={`${activeFilter === "sortByPrice" ? "bg-[#0d5a5f] text-white" : "bg-gray-100 text-[#0d5a5f]"} flex justify-evenly items-center text-center gap-2 w-fit border border-gray-100 py-2 px-2.5 rounded-md cursor-pointer hover:text-white hover:bg-[#0d5a5f]`}>
                            <p>گران ترین ها</p>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> */}
                        </div>
                        <div onClick={handleSortByProgress} className={`${activeFilter === "sortByProgress" ? "bg-[#0d5a5f] text-white" : "bg-gray-100 text-[#0d5a5f]"} flex justify-evenly items-center text-center gap-2 w-fit border border-gray-100 py-2 px-2.5 rounded-md cursor-pointer hover:text-white hover:bg-[#0d5a5f]`}>
                            <p>تکمیل نشده ها</p>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                            </svg> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default FilterCourses;