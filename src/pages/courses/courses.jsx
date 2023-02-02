import { useState } from "react";
import { coursesData } from "../../core/courseConstants";
import FilterCourses from "./components/FilterCourses";
import CoursesList from "./components/CoursesList";
import CoursePagination from "./components/CoursesPagination";
// import Header from "../../components/Header"
import Footer from "../../components/Footer/Footer"

const Courses = () => {
  // Setting the initial state of filteredCourses to all the courses
  const [filteredCourses, setFilteredCourses] = useState(coursesData)

  // Pagination => User is currently on this page
  const [currentPage, setCurrentPage] = useState(1)
  // Number of Records to be displayed on each page   
  // const [itemsPerPage, setItemsPerPage] = useState(8);
  const itemsPerPage = 8
  // The first and last record on the current page.
  const indexOfLastRecord = currentPage * itemsPerPage
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage
  // Records to be displayed on the current page
  const currentItems = filteredCourses.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(filteredCourses.length / itemsPerPage)

  return (
    <div className="bg-gray-200 pt-24">
      <div>
        <FilterCourses setFilteredCourses={setFilteredCourses} />
      </div>
      <div className="flex justify-center mx-12 pb-16 pt-16">
        <CoursesList coursesData={currentItems} />
      </div>
      <div className="flex justify-center mt-2 mb-28">
        <CoursePagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
      </div>
      <Footer />
    </div>
  );
};
export default Courses;