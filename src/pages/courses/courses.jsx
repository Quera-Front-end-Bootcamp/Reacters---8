import { useState, useEffect } from "react"
import { AXIOS } from '../../config/axios.config.js'
import FilterCourses from "../../components/Courses/FilterCourses"
import CoursesList from "../../components/Courses/CoursesList"
import CoursePagination from "../../components/Courses/CoursesPagination"
import CoursesSearch from "../../components/Search/CoursesSearch"
import Loading from "../../components/Loading/Loading"

const Courses = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Setting the initial state of filteredCourses to all the courses
  const [filteredCourses, setFilteredCourses] = useState([])

  //search
  const [searchInput, setSearchInput] = useState("")
  const searchedCourses = filteredCourses.filter(
    course => course.title.toLowerCase().includes(searchInput.toLowerCase())
  )

  // Pagination => User is currently on this page
  const [currentPage, setCurrentPage] = useState(1)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  // Number of items to be displayed on each page   
  const [itemsPerPage, setItemsPerPage] = useState(1)
  // The first and last record on the current page
  const indexOfLastRecord = currentPage * itemsPerPage
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage
  // Records to be displayed on the current page
  const currentItems = searchedCourses.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(searchedCourses.length / itemsPerPage)

  const fetchData = async () => {
    try {
      let response = await AXIOS.get('/api/course/getall')
      setIsLoading(false)
      setData(response.data.result)
      setFilteredCourses(response.data.result)
    } catch (error) {
      console.log(error)
    }
  }

  // changing the itemsPerPage state based on screenWidth
  useEffect(() => {
    fetchData()
    setItemsPerPage(
      screenWidth >= 1024 ? 8
        : screenWidth >= 768 && screenWidth < 1024 ? 6
          : screenWidth > 460 && screenWidth < 768 ? 4
            : 4
    )
    const updateScreen = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", updateScreen)
    return () => window.removeEventListener("resize", updateScreen)
  }, [screenWidth])

  return (
    <div className="bg-gray-200 pt-40 h-fit">
      <div className="flex lg:justify-between items-center justify-center w-full gap-8 lg:gap-0 lg:w-[calc(100%-7rem)]">
        <div className="flex md:flex-row flex-col md:justify-start justify-center items-center w-full md:w-1/2 gap-2 lg:ml-28 ml-0">
          <div>
            <FilterCourses
              setFilteredCourses={setFilteredCourses}
              coursesData={data}
            />
          </div>
          <div>
            <CoursesSearch
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          </div>
        </div>
        <div className="font-semibold text-2xl text-[#0d5a5f] lg:text-right text-center lg:block hidden">
          <p>دوره های آموزشی</p>
        </div>
      </div>

      {isLoading ? <div className="pt-40 pb-60"><Loading /></div> :
        (
          <>
            <div className="flex justify-center mx-12 pb-16 pt-16">
              <CoursesList coursesData={currentItems} />
            </div>
          </>
        )}
      <div className="flex justify-center mt-2 pb-28">
        <CoursePagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}
export default Courses;