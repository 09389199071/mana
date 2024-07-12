import { ChevronLeft, ChevronRight } from "@/public/Icon";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-end my-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`rounded-md px-3 py-1 mx-1 border ${
          currentPage === 1 ? "bg-gray-200" : "bg-white hover:bg-gray-100"
        }`}
      >
        <ChevronLeft />
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`rounded-md px-3 py-1 mx-1 border ${
            currentPage === i + 1
              ? "bg-green-500 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`rounded-md px-2 py-1 mx-1 border ${
          currentPage === totalPages
            ? "bg-gray-200"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
