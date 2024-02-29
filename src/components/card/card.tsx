import { API, Closet, ClothingInfo, Product } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";

export default function Card({ clothingInfo }: { clothingInfo: Product }) {
  return (
    <div className={clsx(
      "flex flex-col gap-2 w-[31%] min-w-56 h-80 rounded-xl p-1",
      "border-[1px] border-white hover:border-black hover:bg-gray-100"
    )}>
      <div className="relative w-full h-full bg-gray-200 rounded-xl wrap-hidden">
        <Image
          src={`data:image/png;base64,${clothingInfo.image}`}
          alt=""
          // width={214}
          // height={230}
          layout="fill"
        />
      </div>
      <span className="text-sm">
        {clothingInfo.nameOfProduct}
      </span>
      <div className="flex flex-row h-4 gap-1">
        <FiHeart size={20} />{clothingInfo.like ?? 0}
      </div>
    </div>
  );
}
