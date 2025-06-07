import React from "react";

function TabsGroup() {
  return (
    <>
      <div
        id="tabsGroup"
        className="flex flex-row gap-6 overflow-x-auto whitespace-nowrap mb-4 pb-3 lg:pl-7"
      >
        <div className="hover:cursor-pointer text-ternary-default font-bold">
          Semua Kelas
        </div>
        <div className="hover:cursor-pointer text-gray hover:text-ternary-default duration-200 ease-in-out">
          Pemasaran
        </div>
        <div className="hover:cursor-pointer text-gray hover:text-ternary-default duration-200 ease-in-out">
          Desain
        </div>
        <div className="hover:cursor-pointer text-gray hover:text-ternary-default duration-200 ease-in-out">
          Pengembangan Diri
        </div>
        <div className="hover:cursor-pointer text-gray hover:text-ternary-default duration-200 ease-in-out">
          Bisnis
        </div>
      </div>
    </>
  );
}

export default TabsGroup;
