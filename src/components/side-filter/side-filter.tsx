"use client"
import { FiChevronDown, FiUser } from "react-icons/fi";
import { Button } from "../shared";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import clsx from "clsx";
import { Category, User } from "@/types";
import { FaUser } from "react-icons/fa";

export default function SideFilter({ categories, user }: { categories: Array<Category>, user: User}) {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => setToggle(prev => !prev)
  return (
    <>
      <div className="hidden lg:block min-w-60 w-1/3 flex flex-col p-5 gap-5 rounded-lg border-[1px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center h-40 w-40 bg-gray-200 rounded-lg">
            <FaUser size={120} className="text-gray-500" />
          </div>
          <span>
            {user.name}
          </span>
        </div>
        <div>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="flex items-center justify-between p-2 text-sm hover:bg-gray-100">
                {category.nameOfCategory} <FiChevronDown />
              </li>
            ))}
          </ul>
        </div>
        <Button className="w-full">
          Apply filter
        </Button>
      </div>


      <div className="lg:hidden block border-[1px] rounded-lg py-5 px-2">
        <BiMenu size={28} className="cursor-pointer" onClick={handleToggle} />
      </div>


      <div className={clsx(
        "lg:hidden absolute top-0 z-10 h-screen bg-white overflow-hidden",
        "transition-all ease-in-out items-center",
        { 'w-0 -left-10': !toggle, 'w-[70%] left-0': toggle },
      )}>
        <div className="w-full flex flex-col p-5 gap-5">
          <div className="flex flex-col gap-2">
            <div className="h-52 bg-gray-300 w-52 rounded-lg p-5">
              Foto Renata
            </div>
            <span>
              Renata Silva Alves
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <ul className="gap-2">
              <li className="flex items-center justify-between p-2 text-sm hover:bg-gray-100">Casual <FiChevronDown /></li>
              <li className="flex items-center justify-between p-2 text-sm hover:bg-gray-100">Formal <FiChevronDown /></li>
              <li className="flex items-center justify-between p-2 text-sm hover:bg-gray-100">Party <FiChevronDown /></li>
              <li className="flex items-center justify-between p-2 text-sm hover:bg-gray-100">Gym <FiChevronDown /></li>
            </ul>
          </div>
          <Button className="w-full" onClick={handleToggle}>
            Apply filter
          </Button>
          <BiX size={28} className="cursor-pointer absolute top-4 right-4 text-primary-500"
            onClick={handleToggle} />
        </div>
      </div>
      <div className={clsx(
        "absolute top-0 left-0 h-screen w-full bg-black opacity-[25%]",
        { 'hidden': !toggle, 'block': toggle }
      )}
        onClick={handleToggle}
      ></div>
    </>
  );
}
