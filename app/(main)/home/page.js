"use client";
import React, { useEffect, useState } from "react";
import { DATA_INVITE } from "@/constants/data";
import CartInvitation from "../_components/CartInvitation";
import { ChevronDown, Search } from "@/public/Icon";
import Pagination from "@/components/Pagination ";

const PAGE_SIZE = 5;
const options = ["Newest", "Oldest", "Most Popular"];
function page() {
  const [invitations, setInvitations] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Newest");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(DATA_INVITE.length / PAGE_SIZE));
    setInvitations(
      DATA_INVITE.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
    );
  }, [currentPage]);
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="p-4 ">
          <div className="flex justify-between items-center  mb-4">
            <div>
              <h1 className="text-xl font-semibold">All invite list</h1>
              <p className="text-green-500 font-medium">Active invites list</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gray-100 flex items-center p-2 rounded-md">
                  <Search />
                  <input
                    type="text"
                    placeholder="Search"
                    className=" bg-gray-100 pl-2 outline-none"
                  />
                </div>

                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center px-4 py-2  rounded-md  bg-gray-100 text-gray-400"
                  >
                    Sort by:
                    <span className="flex items-center text-lg text-gray-500 font-bold pl-1">
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
