// components/Menu.js
import {
  CheckSquare,
  ChevronDown,
  ChevronRight,
  Edit,
  Mailbox,
  Notifications,
  Setting,
  Shape,
} from "@/public/Icon";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 mb-8">
      <div className="text-lg font-semibold flex items-center">
        Hello Hossein <ChevronDown />{" "}
      </div>

      <div>
        <Image src="/logo.png" alt="" width={124} height={48} />
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          <button className="relative bg-white p-1 rounded-md">
            <Mailbox />
          </button>

          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="relative bg-white p-1 rounded-md"
          >
            <Notifications />
            <span className="absolute bottom-2 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          </button>
        </div>
      </div>
      {dropdownOpen && (
        <div className="absolute top-20 right-4 bg-white shadow-lg p-2 z-10 rounded-md">
          <div className="flex items-center justify-between h-16 mb-10 p-4 border-b-2">
            <div className="flex">
              <img class="w-10 h-10 rounded-full" src="./user.png" alt="" />
              <p className="flex flex-col pl-2">
                <span>Hossein</span>
                <span>UI/Ux Designer</span>
              </p>
            </div>
            <Edit />
          </div>
          <button
            className="w-64 flex items-center justify-between p-2 text-lg font-medium text-gray-400 hover:bg-green-300 hover:
rounded-lg"
          >
            <div className="flex items-center relative">
              <Notifications color="#9197B3" />
              <span className="absolute top-1 left-4 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
              <p className="ml-2 text-sm">notification</p>
            </div>

            <ChevronRight />
          </button>
          <button
            className="w-64 flex items-center justify-between p-2 text-lg font-medium text-gray-400 hover:bg-green-300 hover:
rounded-lg"
          >
            <div className="flex items-center">
              <Mailbox />
              <p className="ml-2 text-sm">inbox</p>
            </div>

            <ChevronRight />
          </button>
          <button
            className="w-64 flex items-center justify-between p-2 text-lg font-medium text-gray-400 hover:bg-green-300 hover:
rounded-lg"
          >
            <div className="flex items-center">
              <CheckSquare />
              <p className="ml-2 text-sm">Accepted invitation</p>
            </div>

            <ChevronRight />
          </button>
          <button
            className="w-64 flex items-center justify-between p-2 text-lg font-medium text-gray-400 hover:bg-green-300 hover:
rounded-lg"
          >
            <div className="flex items-center">
              <Setting />
              <p className="ml-2 text-sm">Setting</p>
            </div>

            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
