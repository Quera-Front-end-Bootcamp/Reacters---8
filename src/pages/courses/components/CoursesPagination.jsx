// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';
import backButton from "../../../assets/icons/back.png"
import nextButton from "../../../assets/icons/next.png"
// import CoursesList from "./CoursesList"
import "../style/style.css"

const CoursePagination = () => {
    return (

        <div className="pagination flex flex-wrap items-center justify-center gap-4 mb-8">
            <button>
                <img src={backButton} className="h-9 w-9 p-1 border border-gray-400 rounded-3xl flex items-center justify-center bg-[#066649] hover:bg-[#033324]" alt="backButton"></img>
            </button>
            <div className="pages flex flex-wrap justify-center gap-4">
                <p className="page h-10 w-10 border border-gray-400 rounded-3xl flex items-center justify-center gap-2 cursor-pointer hover:text-white hover:bg-[#066649] ">1</p>
                <p className="page active bg-[#066649] text-white h-10 w-10 border border-gray-400 rounded-3xl flex items-center justify-center gap-2 cursor-pointer hover:text-white hover:bg-[#033324]">2</p>
                <p className="page h-10 w-10 border border-gray-400 rounded-3xl flex items-center justify-center gap-2 cursor-pointer hover:text-white hover:bg-[#066649]">3</p>
                <p className="page h-10 w-10 border border-gray-400 rounded-3xl flex items-center justify-center gap-2 cursor-pointer  hover:text-white hover:bg-[#066649]">4</p>
            </div>
            <button>
                <img src={nextButton} className="h-9 w-9 p-1 border border-gray-400 rounded-3xl flex items-center justify-center bg-[#066649] hover:bg-[#033324]" alt="nextButton"></img>
            </button>
        </div>



        // Example items, to simulate fetching from another resources.
        // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        // function Items({ currentItems }) {
        //     return (
        //         <div>
        //             {currentItems &&
        //                 currentItems.map((item) => (
        //                     <div>
        //                         <h3>Item #{item}</h3>
        // <CoursesList courses={coursesData} />
        //                     </div>
        //                 ))}
        //         </div>
        //     );
        // }

        // function PaginatedItems({ itemsPerPage }) {
        //     // Here we use item offsets; we could also use page offsets
        //     // following the API or data you're working with.
        //     const [itemOffset, setItemOffset] = useState(0);

        //     // Simulate fetching items from another resources.
        //     // (This could be items from props; or items loaded in a local state
        //     // from an API endpoint with useEffect and useState)
        //     const endOffset = itemOffset + itemsPerPage;
        //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        //     const currentItems = items.slice(itemOffset, endOffset);
        //     const pageCount = Math.ceil(items.length / itemsPerPage);

        //     // Invoke when user click to request another page.
        //     const handlePageClick = (event) => {
        //         const newOffset = (event.selected * itemsPerPage) % items.length;
        //         console.log(
        //             `User requested page number ${event.selected}, which is offset ${newOffset}`
        //         );
        //         setItemOffset(newOffset);
        //     };

        // return (
        //     <>
        //         <Items currentItems={currentItems} />
        //         <ReactPaginate
        //             breakLabel="..."
        //             nextLabel="next >"
        //             onPageChange={handlePageClick}
        //             pageRangeDisplayed={5}
        //             pageCount={pageCount}
        //             previousLabel="< previous"
        //             renderOnZeroPageCount={null}
        //         />
        //     </>
        // );
        // }

        // Add a <div id="container"> to your HTML to see the componend rendered.
        // ReactDOM.render(
        //     <PaginatedItems itemsPerPage={4} />,
        //     document.getElementById('container')
        // );
    );
}

export default CoursePagination;