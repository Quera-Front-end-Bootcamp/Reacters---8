import React from 'react';
import backButton from "../../assets/icons/back.png"
import nextButton from "../../assets/icons/next.png"
import "./style/courses.css"

const CoursePagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    return (
        <>
            <div className="pagination flex flex-wrap items-center justify-center gap-3">
                <button>
                    <img onClick={nextPage} src={backButton} className="h-9 w-9 p-1 border border-gray-400 rounded-3xl flex items-center justify-center bg-[#0d5a5f] hover:bg-[#093d41]" alt="backButton"></img>
                </button>
                <div dir="rtl" className="flex flex-wrap justify-center gap-3">
                    {pageNumbers.map(pgNumber => (
                        <li key={pgNumber}
                            onClick={() => setCurrentPage(pgNumber)}
                            className={`page-item ${currentPage === pgNumber ? 'active bg-[#0d5a5f] text-white hover:bg-[#093d41]' : 'bg-gray-200 text-gray-800'} h-9 w-9 border border-gray-400 rounded-3xl flex items-center justify-center gap-2 cursor-pointer hover:text-white hover:bg-[#0d5a5f]`}>
                            {pgNumber}
                        </li>
                    ))}
                </div>
                <button>
                    <img onClick={prevPage} src={nextButton} className="h-9 w-9 p-1 border border-gray-400 rounded-3xl flex items-center justify-center bg-[#0d5a5f] hover:bg-[#093d41]" alt="nextButton"></img>
                </button>
            </div>
        </>
    );
}
export default CoursePagination;