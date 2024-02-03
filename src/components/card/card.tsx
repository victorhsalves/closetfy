import { ClothingInfo } from "@/types";
import clsx from "clsx";

export default function Card({clothingInfo}: {clothingInfo: ClothingInfo}) {
  return (
    <div className={clsx(
      "flex flex-col gap-2 w-[31%] min-w-56 h-80 rounded-xl p-1",
      "border-[1px] border-white hover:border-black hover:bg-gray-100"
    )}>
      <div className="w-full h-full bg-gray-200 rounded-xl">
        Foto
      </div>
      <span className="text-sm">
        {clothingInfo.name}
      </span>
      <div className="flex flex-row h-4 gap-1">
        <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
        <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
        <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
        <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
        <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
        <span className="text-sm">{clothingInfo.rating}/5</span>
      </div>
    </div>
  );
}
