import { useState } from "react";
import ReactModal from "react-modal"
import ProgressBar from "../../../components/ProgressBar"
import "../style/style.css"

const CourseModal = ({ data, isOpen, handleClose }) => {

    const formatPrice = (price) => {
        const formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'IRR' }).format(price)
        return formattedPrice.toLocaleString("fa");
    }

    const [isBookmaked, setIsBookmarked] = useState(false)
    const handleToggleBookmark = () => {
        setIsBookmarked(true)
    }

    return (
        <div>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={handleClose}
                ariaHideApp={false}
                contentLabel="Course Modal"
                shouldCloseOnOverlayClick={true}
                className={"flex justify-center items-center outline-none w-3/5 h-full"}
                overlayClassName={"overlayClassName h-screen w-full top-0 left-0 fixed flex justify-center items-center"}
            >
                <div className="modalContent relative bg-white w-full md:overflow-visible overflow-y-scroll h-4/5 md:h-fit">
                    {/* closeIcon */}
                    <button onClick={handleClose} className="absolute -top-8 right-0">
                        <svg className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {/* modalNavbar */}
                    <nav className='w-full flex justify-between text-[#727272] p-5 text-sm border border-b-[#efefef]'>
                        <svg on={handleToggleBookmark}
                            className={`${isBookmaked ? "fill-[#066649]" : "fill-none"} w-6 h-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <p className='font-semibold text-base'>{data.title}</p>
                    </nav>
                    {/* modalPhoto */}
                    <div className="modalPhoto flex flex-col items-center p-7 md:w-3/5 md:text-center md:float-left w-full float-none">
                        <img src={data.imageSrc} className="max-h-60" alt="coursePhoto" />
                        <div className='flex justify-center text-gray-600 mt-10 gap-8'>
                            <div className='flex flex-col items-center w-full'>
                                <div className='mb-2'>وضعیت تکمیل دوره</div>
                                <div className='flex flex-col items-center'>
                                    <ProgressBar data={data} />
                                    <span className='flex w-full text-sm'>{data.progress} %</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* course description */}
                    <div className='flex md:justify-between justify-center items-center'>
                        <div className="description flex flex-col md:items-start items-center dir-rtl text-gray-600 gap-5 p-8 md:float-left md:w-full md:border-l-2 float-none md:border-[#efefef] border-t">
                            <h4> مدرس : {data.tutor}</h4>
                            <h1>ظرفیت : {data.capacity} نفر</h1>
                            <p>شروع : {new Date(data.startDate).toLocaleDateString('Fa-IR')}</p>
                            <p>پایان : {new Date(data.terminationDate).toLocaleDateString('Fa-IR')}</p>
                            <p>هزینه دوره : {formatPrice(data.price)} تومان </p>
                            <div className='flex justify-center w-full mt-9'>
                                <button className='border border-[#d9d9d9] flex justify-center items-center w-full rounded-md py-2 px-16 text-[#515151] transition-all ease-in font-medium hover:border-[#066649] hover:text-[#066649] hover:cursor-pointer'>
                                    مشاهده کامل
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div >
    );
}

export default CourseModal;