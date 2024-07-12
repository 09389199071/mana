// components/Sidebar.js

import Image from "next/image";
import { useState } from "react";
import {
  Setting,
  ChevronRight,
  User,
  Square,
  Question,
  WalletMony,
  Shape,
} from "@/public/Icon";
const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className=" w-64  bg-white ">
      <div className=" w-64 fixed  flex  flex-col justify-between  h-screen   bg-white">
        <div className="flex flex-col  p-4 ">
          <div className="flex items-center justify-center h-50 mb-20 mt-10">
            <Image src="/logo.png" alt="" width={124} height={48} />
          </div>

          <div className="flex items-center justify-center h-16 mb-10 relative">
            <Setting />
            <p className="text-lg text-black font-bold pl-2">Dashboard</p>
            <p className="text-xs text-gray-400 text-end absolute bottom-5 right-5">
              v.01
            </p>
          </div>

          <nav className="flex flex-col space-y-2">
            <button
              className="flex items-center justify-between p-2 text-lg font-medium text-gray-400 hover:bg-green-300 hover:
rounded-lg"
            >
              <div className="flex items-center">
                <Square />
                <p className="ml-2 text-sm">Dashboard</p>
              </div>
            </button>
            <button
              className="flex items-center justify-between p-2 text-lg font-medium text-gray-400 hover:bg-green-300 hover:
rounded-lg"
            >
              <div className="flex items-center">
                <Square />
                <p className="ml-2 text-sm">Product</p>
              </div>

              <ChevronRight />
            </button>
            <div className="relative">
              <button
                onClick={() => handleMenuClick("invitation")}
                className="flex items-center justify-between w-full p-2 text-lg font-medium text-gray-400 hover:bg-green-300 hover:
rounded-lg"
              >
                <div className="flex items-center">
                  <User />
                  <p className="ml-2 text-sm">Invitation</p>
                </div>

                <ChevronRight />
              </button>
              {activeMenu === "invitation" && (
                <div className="absolute left-full top-0 w-80 ml-2 bg-white shadow-lg rounded-md">
                  <button
                    className="w-full flex items-center justify-between p-2 text-sm font-medium text-gray-700 hover:bg-green-300 hover:
rounded-lg"
                  >
                    All Invitations
                    <ChevronRight />
                  </button>
                  <button
                    className="w-full flex items-center justify-between  p-2 text-sm font-medium text-gray-700 hover:bg-green-300 hover:
rounded-lg"
                  >
                    Accepted Invitations
                    <ChevronRight />
                  </button>
                  <button
                    className="w-full flex items-center justify-between p-2 text-sm font-medium text-gray-700 hover:bg-green-300 hover:
rounded-lg"
                  >
                    Rejected Invitations
                    <ChevronRight />
                  </button>
                  <button
                    className="w-full flex items-center justify-between p-2 text-sm font-medium text-gray-700 hover:bg-green-300 hover:
rounded-lg"
                  >
                    Pending Invitations
                    <ChevronRight />
                  </button>
                </div>
              )}
            </div>
            <button
              className="flex items-center justify-between p-2 text-lg font-medium text-gray-400 hover:bg-green-300 hover:
rounded-lg"
            >
              <div className="flex items-center">
                <WalletMony />
                <p className="ml-2 text-sm">Income</p>
              </div>

              <ChevronRight />
            </button>
            <button
              className="flex items-center justify-between p-2 text-lg font-medium text-gray-400 hover:bg-green-300 hover:
rounded-lg"
            >
              <div className="flex items-center">
                <Shape />
                <p className="ml-2 text-sm">Promote</p>
              </div>

              <ChevronRight />
            </button>
            <button
              className="flex items-center justify-between p-2 text-lg font-medium text-gray-400 hover:bg-green-300 hover:
rounded-lg"
            >
              <div className="flex items-center">
                <Question />
                <p className="ml-2 text-sm">Help</p>
              </div>

              <ChevronRight />
            </button>
          </nav>
        </div>

        <div className="flex items-center justify-between h-16 mb-10 p-4 ">
          <div className="flex">
            <img class="w-10 h-10 rounded-full" src="./user.png" alt="" />
            <p className="flex flex-col pl-2">
              <span>Hossein</span>
              <span>UI/Ux Designer</span>
            </p>
          </div>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
