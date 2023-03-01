import { useState, useEffect } from 'react';
import { AXIOS } from '../../config/axios.config';
import { Container, Typography, Stack, Button } from '@mui/material';
import Iconify from '../../components/iconify';
import DashboardCoursesList from "../../components/dashboard/courses/DashboardCoursesList"
import CoursePagination from "../../components/Courses/CoursesPagination"
import DashboardSearch from "../../components/Search/DashboardSearch"
import CreateCourseModal from "../../components/dashboard/courses/CreateCourseModal"
import Loading from "../../components/Loading/Loading"

export default function Courses() {

  const [data, setData] = useState([])
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

  //create course modal
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false)
  function openCreateModal() { setCreateModalIsOpen(true) }

  return (
    <>
      <Container maxWidth="xl" className="mt-8">
        <Stack className="flex flex-row md:justify-between justify-center items-center" mb={5}>
          <div className="flex flex-col-reverse justify-center sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-1/2">
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
              className="bg-gray-400 sm:w-[40%] w-3/5 hover:bg-[#0d5a5f]"
              onClick={openCreateModal}
            >
              دوره جدید
            </Button>
            <div>
              <DashboardSearch
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            </div>
          </div>
          <Typography
            dir="rtl"
            variant="h4"
            className="text-white text-base bg-gray-400 px-[20px] py-2 rounded-md shadow-lg md:flex hidden"
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

      {createModalIsOpen && (
        <CreateCourseModal
          data={data}
          isOpen={createModalIsOpen}
          handleClose={() => setCreateModalIsOpen(false)}
        />
      )}
    </>
  )
}