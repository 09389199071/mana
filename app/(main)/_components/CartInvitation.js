import React from "react";

function CartInvitation({ data }) {
  return (
    <div className="bg-white p-4 rounded-md border border-spacing-1 mb-3 container ">
      <div className=" grid grid-cols-6 ">
        <div className="col-span-5">
          <p className="text-xl text-gray-400 font-medium">{data?.title}</p>
          <p className="text-xl text-black py-3 bold font-medium">
            {data?.titer}
          </p>
          <p className="text-xl text-gray-500 py-3 bold font-medium">
            {data?.description}
          </p>
        </div>
        <div className="flex flex-col">
          <button className=" text-green-500 px-4 py-2 border-solid border-2 rounded-md mb-3 border-green-500">
            Accept
          </button>
          <button className=" text-red-600 border-red-600 px-4 py-2 rounded border-solid border-2">
            Reject
          </button>
        </div>
      </div>

      <div className="flex justify-between pt-3">
        <div>
          <p className="text-lg text-gray-400 font-medium pb-2">Date:</p>
          <p className="text-lg text-gray-800 font-medium">
            {data?.information?.date}
          </p>
        </div>
        <div>
          <p className="text-lg text-gray-400 font-medium pb-2">time:</p>
          <p className="text-lg text-gray-800 font-medium">
            {data?.information?.time}{" "}
          </p>
        </div>
        <div>
          <p className="text-lg text-gray-400 font-medium pb-2">From:</p>
          <p className="text-lg text-gray-800 font-medium">
            {data?.information?.from}{" "}
          </p>
        </div>
        <div>
          <p className="text-lg text-gray-400 font-medium pb-2">number:</p>
          <p className="text-lg text-gray-800 font-medium">
            {data?.information?.number}
          </p>
        </div>
        <div>
          <p className="text-lg text-gray-400 font-medium pb-2">name:</p>
          <p className="text-lg text-gray-800 font-medium">
            {data?.information?.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartInvitation;
