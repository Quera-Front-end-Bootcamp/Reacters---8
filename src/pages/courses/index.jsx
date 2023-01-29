import { useState } from "react";
import { coursesData } from "../../core/courseConstants";
import FilterCourses from "./components/FilterCourses";
import CoursesList from "./components/CoursesList";
import CoursePagination from "./components/CoursesPagination";
import "../../pages/courses/style/style.css"

const Courses = () => {
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  return (
    <div className="bg-gray-200 py-24">
      <div>
        <FilterCourses setFilteredCourses={setFilteredCourses} />
      </div>
      <div className="flex justify-center mx-12 pb-16 pt-16">
        <CoursesList coursesData={filteredCourses} />
      </div>
      <div className="flex justify-center">
        <CoursePagination itemsPerPage={4} />
      </div>
    </div>
  );
};

export default Courses;