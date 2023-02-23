// import { Helmet } from 'react-helmet-async';
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

  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const indexOfLastRecord = currentPage * itemsPerPage
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage
  const currentItems = data.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(data.length / itemsPerPage)

  //get all courses
  const fetchData = async () => {
    try {
      let response = await AXIOS.get('/api/course/getall')
      setIsLoading(false)
      setData(response.data.result)
    } catch (error) {
      console.log('There was an error while retrieving the data')
    }
  }
  useEffect(() => { fetchData() }, [])

  const config = {
    headers: { "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U5MWJkZWE3M2FjYTY0NTBjNTBjNWUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzcxNTk1NTN9.e1y3sV3JcszwE2NtEOr7uxRhIJ3l02Oe14IIBL4uqBc" }
  }

  // delete course by id
  const handleDeleteCourse = (id) => {
    try {
      let response = AXIOS.delete(`/api/course/${id}`, config)
      setData(response.data.result.filter((course) => course.id !== id))
      
    } catch (error) {
      console.log("error while deleting course")
    }
  }

  return (
    <>
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            دوره جدید
          </Button>
          <Typography dir="rtl" variant="h4" sx={{ mb: 5 }}>
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