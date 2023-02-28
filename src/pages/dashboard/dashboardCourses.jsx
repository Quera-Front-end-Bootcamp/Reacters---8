import { useState, useEffect } from 'react';
import { AXIOS } from '../../config/axios.config';
import { Container, Typography, Stack, Button } from '@mui/material';
import Iconify from '../../components/iconify';
import DashboardCoursesList from "./DashboardCoursesList"
import CoursePagination from "../../components/Courses/CoursesPagination"
import Loading from "../../components/Loading/Loading"

export default function Courses() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  //get all courses
  const fetchData = async () => {
    try {
      let response = await AXIOS.get('/api/course/getall')
      setIsLoading(false)
      setData(response.data.result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => { fetchData() }, [])

  const config = {
    headers: { "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U5MWJkZWE3M2FjYTY0NTBjNTBjNWUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzcxNTk1NTN9.e1y3sV3JcszwE2NtEOr7uxRhIJ3l02Oe14IIBL4uqBc" }
  }

  // delete course by id
  const handleDeleteCourse = async (id) => {
    try {
      await AXIOS.delete(`/api/course/${id}`, config)
      setIsLoading(false)
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  // search
  const [searchInput, setSearchInput] = useState("")
  const filteredCourses = data.filter(
    course => course.title.toLowerCase().includes(searchInput.toLowerCase())
  )

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const indexOfLastRecord = currentPage * itemsPerPage
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage
  const currentItems = filteredCourses.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(filteredCourses.length / itemsPerPage)

  return (
    <>
      <Container maxWidth="xl" className="mt-8">
        <Stack className="flex flex-row md:justify-between justify-center items-center" mb={5}>
          <div className="flex flex-col-reverse justify-center sm:flex-row sm:justify-between gap-2">
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            className="bg-gray-400 w-full sm:w-2/3"
          >
            دوره جدید
          </Button>
          <div className="flex justify-start gap-4 items-center h-fit text-slate-50 relative">
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 absolute text-teal-800 pl-2 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <input
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              className="bg-transparent outline-teal-600 text-teal-800 text-base placeholder:text-gray-400 placeholder:pr-2 border border-gray-300 py-[6px] sm:w-[25rem] w-[18rem] rounded-md shadow-lg"
              dir="rtl"
              type="text"
              placeholder="جستجو ..."
            />
          </div>
          </div>
         
          <Typography
            dir="rtl"
            variant="h4"
            className="text-white text-base bg-gray-400 px-[20px] py-[6px] rounded-md shadow-lg md:flex hidden"
          >
            تمام دوره ها
          </Typography>
        </Stack>

        {isLoading ? <div className="pt-40 pb-60"><Loading /></div> :
          (
            <>
              <div className="flex justify-center mx-12 pb-16 pt-16">
                <DashboardCoursesList
                  coursesData={currentItems}
                  handleDeleteCourse={handleDeleteCourse}
                />
              </div>
              <div className="flex justify-center mt-2 pb-28">
                <CoursePagination
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </>
          )}
      </Container>
    </>
  );
}