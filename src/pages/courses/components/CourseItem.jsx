import { useState } from "react";
import CourseModal from "./CourseModal";
import "../style/style.css"

const CourseItem = ({ data }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }

  //description of each card that gets rendered in CoursesList
  return (
    <>
      <div className="flex cursor-pointer relative">
        {/* cardImage */}
        <div className="dir-ltr group text-end rounded-xl w-auto h-auto shadow-xl transition delay-150 ease-in-out hover:-translate-y-3 hover:scale-110 duration-300 bg-white">
          <div className="group relative">
            <img className="w-64 h-48 object-cover border border-gray-300 rounded-md" src={data.imageSrc} alt={data.alt}></img>
            <div className="flex items-center justify-center absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md -z-10 group-hover:z-50 group-hover:bg-gray-400 group-hover:opacity-90">
              <button className="border font-semibold border-gray-400 rounded-md p-3 bg-white hover:bg-[#066649] hover:text-white">مشاهده دوره</button>
            </div>
          </div>
          {/* cardDetails */}
          <div className="py-2 px-4 text-xl font-light">{data.title}</div>
          <div className="py-2 px-4 text-sm text-gray-500">مدرس : {data.tutor}</div>
          <div className="pb-4 px-4 text-sm text-gray-500">ظرفیت : {data.capacity} نفر</div>
          <div className="detailsButton pl-6 py-2 text-center text-gray-100 flex justify-start">
            <button onClick={openModal} className="border rounded-md bg-[#066649] hover:bg-[#033324] p-2">جزئیات</button>
          </div>
          <hr className="w-4/5 m-auto h-0.5 bg-gray-200"></hr>
          <div className="dir-rtl text-sm sm:text-base flex text-gray-600 justify-end pl-6 py-4">{data.price.toLocaleString("fa")} تومان </div>
        </div>
      </div>

      {/* if modal is open then render CourseModal Component and its props */}
      {modalIsOpen && (
        <CourseModal
          data={data}
          isOpen={modalIsOpen}
          handleClose={() => setModalIsOpen(false)}
        />
      )}
    </>
  );
};

export default CourseItem;