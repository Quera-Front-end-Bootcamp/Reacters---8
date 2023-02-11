import { useState } from "react";
import { coursesData } from "../../constants/courseConstants";
import FilterCourses from "../../components/Courses/FilterCourses";
import CoursesList from "../../components/Courses/CoursesList";
import CoursePagination from "../../components/Courses/CoursesPagination";

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
    <div className="bg-gray-200 pt-60">
      <div>
        <FilterCourses setFilteredCourses={setFilteredCourses} />
      </div>
      <div className="flex justify-center mx-12 pb-16 pt-16">
        <CoursesList coursesData={currentItems} />
      </div>
      <div className="flex justify-center mt-2 pb-28">
        <CoursePagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};
export default Courses;