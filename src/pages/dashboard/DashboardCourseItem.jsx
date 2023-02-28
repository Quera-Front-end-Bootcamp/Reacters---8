import { useState, useEffect } from "react";
// import { AXIOS } from "../../config/axios.config"
import DeleteCourseModal from "./DeleteCourseModal";

const DashboardCourse = ({ data, handleDeleteCourse }) => {

    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    function openDeleteModal() {
      setDeleteModalIsOpen(true);
    }
     
    //description of each card that gets rendered in DashboardCoursesList
    return (
        <>
            <div className="flex">
                {/* cardImage */}
                <div dir="ltr" className="text-end rounded-xl w-auto h-auto shadow-xl">
                    <div className="relative">
                        <img className="w-72 h-52 object-cover border border-gray-300 rounded-md" src={data.lesson.image} alt="courseImage"></img>

                        {/* dropdown */}
                        <div className="group inline-block absolute top-[5px] left-0 float-left md:p-0 pt-4">
                            <button className="inline-flex relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor"
                                    className="w-6 h-6 relative top-[6%] left-0 z-10 text-white cursor-pointer"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            </button>
                            <ul className="group-hover:block absolute top-[2px] left-[10px] hidden z-10 text-gray-600 font-semibold ml-2.5 border border-gray-100 bg-gray-100 rounded-sm">
                                <li className="flex items-center text-center border-b border-gray-300 py-3 px-16 cursor-pointer hover:bg-gray-200">
                                    <p>ویرایش</p>
                                </li>
                                <li onClick={openDeleteModal}
                                    className="flex items-center text-center py-3 px-16 cursor-pointer hover:bg-gray-200">
                                    <p>حذف</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* cardDetails */}
                    <div className="py-2 px-4 text-lg text-[#727272] font-semibold">{data.title} دوره</div>
                    <div className="py-2 px-4 text-sm text-gray-500">مدرس : {data.teacher.fullName}</div>
                    <div className="py-2 px-4 text-sm text-gray-500">ظرفیت : {data.capacity.toLocaleString("fa")} نفر</div>
                    <div className="py-2 px-4 text-sm text-gray-500">شروع : {new Date(data.startDate).toLocaleDateString('Fa-IR')}</div>
                    <div className="pt-2 pb-4 px-4 text-sm text-gray-500">پایان : {new Date(data.endDate).toLocaleDateString('Fa-IR')}</div>
                    <hr className="w-4/5 m-auto h-0.5 bg-gray-200"></hr>
                    <div dir="rtl" className="text-sm sm:text-base flex text-gray-600 justify-end pl-6 py-4">{data.cost.toLocaleString("fa")} تومان </div>
                </div>
            </div>

            {/* if modal is open then render DeleteCourseModal Component and its props */}
            {deleteModalIsOpen && (
            <DeleteCourseModal
                data={data}
                isOpen={deleteModalIsOpen}
                handleClose={() => setDeleteModalIsOpen(false)}
                handleDeleteCourse={handleDeleteCourse}
            />
            )}
        </>
    );
};

export default DashboardCourse;