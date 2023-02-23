import { useState, useEffect } from "react";
import { AXIOS } from '../../config/axios.config.js';
import FilterCourses from "../../components/Courses/FilterCourses";
import CoursesList from "../../components/Courses/CoursesList";
import CoursePagination from "../../components/Courses/CoursesPagination";
import Loading from "../../components/Loading/Loading"

const Courses = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  // Setting the initial state of filteredCourses to all the courses
  const [filteredCourses, setFilteredCourses] = useState([])

  // Pagination => User is currently on this page
  const [currentPage, setCurrentPage] = useState(1)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  // Number of Records to be displayed on each page   
  const [itemsPerPage, setItemsPerPage] = useState(1);
  // The first and last record on the current page.
  const indexOfLastRecord = currentPage * itemsPerPage
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage
  // Records to be displayed on the current page
  const currentItems = filteredCourses.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(filteredCourses.length / itemsPerPage)

  const fetchData = async () => {
    try {
      let response = await AXIOS.get('/api/course/getall');
      setIsLoading(false)
      setData(response.data.result);
      setFilteredCourses(response.data.result)
    } catch (error) {
      console.log('There was an error while retrieving the data');
    }
  };

  // changing the itemsPerPage state based on screenWidth
  useEffect(() => {
    fetchData();
    setItemsPerPage(
      screenWidth >= 1024 ? 8
        : screenWidth >= 768 && screenWidth < 1024 ? 6
          : screenWidth > 460 && screenWidth < 768 ? 4
            : 4
    );
    const updateScreen = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", updateScreen)
    return () => window.removeEventListener("resize", updateScreen);
  }, [screenWidth]);

  return (
    <div className="bg-gray-200 pt-60 h-fit">
      {isLoading ? <div className="pt-40 pb-60"><Loading /></div> :
        (
          <>
            <div>
              <FilterCourses
                setFilteredCourses={setFilteredCourses}
                coursesData={data}
              />
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
          </>
        )}
    </div>
  );
};
export default Courses;