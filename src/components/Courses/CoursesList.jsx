//rendering a list of cards by applying map on CourseItem component
import CourseItem from "./CourseItem";

const CoursesList = ({ coursesData }) => {
  return (
    <div dir="rtl" className="justify-center gap-9 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {coursesData?.map((courseData, index) => (
        <CourseItem key={index} data={courseData} />
      ))}
    </div>
  );
};

export default CoursesList;
