import ReactModal from "react-modal"
import { InputDatePicker } from "jalaali-react-date-picker"
import "jalaali-react-date-picker/lib/styles/index.css"

const CreateCourseModal = ({ data, isOpen, handleClose, handleCreateCourse }) => {

    return (
        <div>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={handleClose}
                ariaHideApp={false}
                contentLabel="Delete Course Modal"
                shouldCloseOnOverlayClick={true}
                className={"flex justify-center items-center outline-none w-1/2 h-screen lg:ml-52 ml-0"}
                overlayClassName={"overlayClassName h-[108vh] w-full top-0 left-0 fixed flex justify-center items-center"}
            >
                <div className="modalContent relative bg-white w-full overflow-y-scroll h-[70%]">
                    <nav className='w-full flex justify-end text-[#727272] p-5 text-md border border-b-[#efefef]'>
                        <p className="font-semibold">ایجاد دوره جدید</p>
                    </nav>
                    <form className="flex flex-col w-full items-end p-4 border border-b-[#efefef]">
                        <div className="flex flex-row-reverse text-input bg-gray-100 p-2 my-2 rounded-md w-full">
                            <label htmlFor="form-title">
                                : نام دوره
                            </label>
                            <input
                                type="text"
                                required
                                className="flex-1 bg-transparent mx-2 outline-none w-3/5"
                            />
                        </div>
                        <div className="flex flex-row-reverse text-input bg-gray-100 p-2 mb-2 rounded-md w-full">
                            <label htmlFor="form-cost">
                                : قیمت
                            </label>
                            <input
                                type="number"
                                className="flex-1 bg-transparent mx-2 outline-none w-3/5"
                                required
                            />
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center gap-4 text-input bg-gray-100 p-2 mb-2 rounded-md w-full">
                            <div className="w-[25%] flex justify-end items-center text-center">
                                <label htmlFor="form-date">
                                    : تاریخ پایان
                                </label>
                            </div>
                            <div className="w-[70%]">
                                <InputDatePicker
                                    placeholder="انتخاب کنید"
                                    className="flex-1 bg-transparent mx-2 outline-none"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center w-full gap-4 text-input bg-gray-100 p-2 mb-2 rounded-md">
                            <div className="w-[25%] flex justify-end items-center text-center">
                                <label htmlFor="form-date">
                                    : تاریخ شروع
                                </label>
                            </div>
                            <div className="w-[70%]">
                                <InputDatePicker
                                    placeholder="انتخاب کنید"
                                    className="flex-1 bg-transparent mx-2 outline-none"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-row-reverse text-input bg-gray-100 p-2 mb-2 rounded-md w-full">
                            <label htmlFor="form-capacity">
                                : ظرفیت
                            </label>
                            <input
                                type="number"
                                required
                                className="flex-1 bg-transparent mx-2 outline-none w-3/5"
                            />
                        </div>
                        <div className="flex flex-row-reverse text-input bg-gray-100 p-2 my-2 rounded-md w-full">
                            <label htmlFor="form-username">
                                : شناسه مدرس
                            </label>
                            <input
                                type="text"
                                required
                                className="flex-1 bg-transparent mx-2 outline-none w-3/5"
                            />
                        </div>
                        <div className="flex flex-row-reverse text-input bg-gray-100 p-2 my-2 rounded-md w-full">
                            <label htmlFor="form-username">
                                : شناسه درس
                            </label>
                            <input
                                type="text"
                                required
                                className="flex-1 bg-transparent mx-2 outline-none w-3/5"
                            />
                        </div>
                    </form>
                    <div dir="rtl" className="flex justify-center gap-3">
                        <button onClick={(e) => {
                            // handleCreateCourse(`${data._id}`, e)
                            handleClose()
                        }}
                            className='text-gray-100 border border-red-500 rounded-sm bg-red-500 py-2 px-4 my-5 w-1/4 hover:bg-red-600'>
                            <p>ثبت</p>
                        </button>
                        <button onClick={handleClose}
                            className="text-gray-800 border border-gray-200 rounded-sm bg-gray-100 py-2 px-4 my-5 w-1/4 hover:bg-gray-200">
                            <p>انصراف</p>
                        </button>
                    </div>
                </div>
            </ReactModal>
        </div >
    );
}
export default CreateCourseModal