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
                <div className="font-bold text-2xl text-[#066649] md:ml-8 md:mr-28 m-0 md:text-right text-center">
                    <p>دوره های آموزشی</p>
                </div>
                <div className="font-medium text-gray-700 md:p-0 pt-8">
                    <ul className="filterOptions flex gap-2 md:justify-end justify-center">
                        <li onClick={handleAllCourses} className={`${activeFilter === "all" ? "bg-[#066649] text-white" : "bg-gray-100 text-[#066649]"} flex justify-center items-center text-center w-fit border border-gray-100 py-2 px-4 rounded-md cursor-pointer hover:text-white hover:bg-[#066649]`} >
                            تمام دوره ها
                        </li>
                        <li onClick={handleSortByDate} className={`${activeFilter === "sortByDate" ? "bg-[#066649] text-white" : "bg-gray-100 text-[#066649]"} flex justify-center items-center text-center w-fit border border-gray-100 py-2 px-4 rounded-md cursor-pointer hover:text-white hover:bg-[#066649]`}>
                            جدیدترین ها
                        </li>
                        <li onClick={handleSortByPrice} className={`${activeFilter === "sortByPrice" ? "bg-[#066649] text-white" : "bg-gray-100 text-[#066649]"} flex justify-center items-center text-center w-fit border border-gray-100 py-2 px-4 rounded-md cursor-pointer hover:text-white hover:bg-[#066649]`}>
                            گران ترین ها
                        </li>
                        <li onClick={handleSortByProgress} className={`${activeFilter === "sortByProgress" ? "bg-[#066649] text-white" : "bg-gray-100 text-[#066649]"} flex justify-center items-center text-center w-fit border border-gray-100 py-2 px-4 rounded-md cursor-pointer hover:text-white hover:bg-[#066649]`}>
                            تکمیل نشده ها
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}
export default FilterCourses;