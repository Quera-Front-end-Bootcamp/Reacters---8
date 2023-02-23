import { useState } from "react";
import { Link } from "react-router-dom"
import ReactModal from "react-modal"

const UpdateCourseModal = ({ data, isOpen, handleClose, handleDeleteCourse }) => {

    return (
        <div>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={handleClose}
                ariaHideApp={false}
                contentLabel="Delete Course Modal"
                shouldCloseOnOverlayClick={true}
                className={"flex justify-center items-center outline-none w-2/5 h-screen lg:ml-52 ml-0"}
                overlayClassName={"overlayClassName h-[108vh] w-full top-0 left-0 fixed flex justify-center items-center"}
            >
                <div className="modalContent relative bg-white w-full md:overflow-visible overflow-y-scroll h-4/5 md:h-fit">
                    {/* closeIcon */}
                    <button onClick={handleClose} className="absolute -top-8 right-0">
                        <svg className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {/* modalText */}
                    <nav className='w-full flex justify-center text-[#727272] p-5 text-md border border-b-[#efefef]'>
                        <p>blahhhhhh</p>
                    </nav>
                    <div dir="rtl" className="flex justify-center gap-4">
                       <p>heyyyyy</p>
                    </div>
                </div>
            </ReactModal>
        </div >
    );
}

export default UpdateCourseModal;