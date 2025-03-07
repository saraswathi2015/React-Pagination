import React, { useState } from "react";

const Pagination = ({ data, itemPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  //find total page
  const totalPage = Math.ceil(data.length / itemPerPage);

  //Calculate the slice of data to display based on the current page
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentData = data.slice(startIndex, endIndex);
  console.log("currentData", currentData);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //generate page number
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const handlePageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div>
        <ul>
          {currentData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous Page
        </button>

        {/*page number button*/}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => {
              handlePageNumber(number);
            }}
            style={{
              fontWeight: currentPage === number ? "bold" : "normal",
              backgroundColor: currentPage === number ? "yellow" : "white",
            }}
          >
            {number}
          </button>
        ))}
        {/*handle next page*/}
        <button onClick={handleNext} disabled={currentPage === totalPage}>
          Next Page
        </button>
      </div>
    </>
  );
};

export default Pagination;
