"use client";
import React, { useEffect, useState } from "react";
import { DATA_INVITE } from "@/constants/data";
import CartInvitation from "../_components/CartInvitation";
import { ChevronDown, Search } from "@/public/Icon";
import Pagination from "@/components/Pagination ";
import useMediaQuery from "@/hooks/useIsMobileView";
import { parseDate } from "@/utils/helpers/parseDate";

const PAGE_SIZE = 5;
const options = ["Newest", "Oldest", "Most Popular"];
function page() {
  const isMobileView = useMediaQuery("(min-width: 768px)");
  const [invitations, setInvitations] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Newest");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(DATA_INVITE.length / PAGE_SIZE));
  }, []);

  useEffect(() => {
    const sortedInvites = sortInvites(DATA_INVITE, selectedOption);
    setInvitations(
      sortedInvites.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
      )
    );
  }, [currentPage, selectedOption]);

  const sortInvites = (invites, sortOrder) => {
    return invites.slice().sort((a, b) => {
      const dateA = parseDate(a.information.date);
      const dateB = parseDate(b.information.date);

      if (isNaN(dateA) || isNaN(dateB)) {
        // Handle invalid dates by placing them at the end
        return isNaN(dateA) ? 1 : -1;
      }
      if (sortOrder === "Newest") {
        return dateB - dateA;
      } else if (sortOrder === "Oldest") {
        return dateA - dateB;
      } else if (sortOrder === "Most Popular") {
        return b.popularity - a.popularity; // Assuming there is a popularity field
      }
      return 0;
    });
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="p-4 ">
          <div className="flex justify-between items-center  mb-4">
            <div>
              <h1
                className={
                  isMobileView
                    ? "text-xl font-semibold"
                    : "text-lg font-semibold"
                }
              >
                All invite list
              </h1>
              <p
                className={
                  isMobileView
                    ? "text-green-500 font-medium"
                    : "text-green-500 text-sm font-medium"
                }
              >
                Active invites list
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {isMobileView && (
                  <div className="bg-gray-100 flex items-center p-2 rounded-md">
                    <Search />
                    <input
                      type="text"
                      placeholder="Search"
                      className=" bg-gray-100 pl-2 outline-none"
                    />
                  </div>
                )}

                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={
                      isMobileView
                        ? "flex items-center px-4 py-2  rounded-md  bg-gray-100 text-gray-400"
                        : "flex items-center px-4 py-2 text-sm rounded-md  bg-gray-100 text-gray-400"
                    }
                  >
                    Sort by:
                    <span
                      className={
                        isMobileView
                          ? "flex items-center text-lg text-gray-500 font-bold pl-1"
                          : "flex items-center text-sm text-gray-500 font-bold pl-1"
                      }
                    >
                      {selectedOption}
                      <ChevronDown />
                    </span>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-12 right-4 bg-white shadow-lg p-2">
                      {options?.map((item) => (
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800"
                          onClick={() => {
                            setSelectedOption(item),
                              setDropdownOpen(!dropdownOpen);
                          }}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {!isMobileView && (
                  <div className="bg-gray-100 flex items-center p-2 rounded-md">
                    <Search />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {invitations?.map((invite) => (
          <CartInvitation data={invite} />
        ))}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}

export default page;
