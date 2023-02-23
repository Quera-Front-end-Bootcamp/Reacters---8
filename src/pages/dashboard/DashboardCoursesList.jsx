import DashboardCourseItem from "./DashboardCourseItem";

const DashboardCoursesList = ({ coursesData, handleDeleteCourse}) => {
    return (
        <div dir="rtl" className="justify-center gap-9 grid lg:grid-cols-3 md:grid-cols-2">
            {coursesData?.map((courseData, index) => (
                <DashboardCourseItem key={index} data={courseData} handleDeleteCourse={handleDeleteCourse}/>
            ))}
        </div>
    );
};

export default DashboardCoursesList;