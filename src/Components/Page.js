import React, { useState } from "react";

const Page = ({ data, itemPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(data.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const pageNumbers = [];
  for (let i = 0; i <= totalPage; i++) pageNumbers.push(i);

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleClick = (number) => {
    setCurrentPage(number);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div>
        <ul>
          {currentData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <button onClick={handlePrevious}>Previous page</button>
        </ul>

        {pageNumbers.map((number) => (
          <button
            onClick={() => {
              handleClick(number);
            }}
          >
            {number}
          </button>
        ))}
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default Page;
