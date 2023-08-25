import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props) {
  return (
    <div className="bg-white bg-opacity-10 flex flex-col shadow-md rounded-lg p-4">
      <div className="relative w-48 h-48 mx-auto">
        <Image
          src={props.product.image}
          alt="Product Image"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <h1 className="text-xl font-semibold">{props.product.name}</h1>
      {/* two buttons in a row */}
      <div className="flex flex-row gap-2 mt-4">
  <Link href={`/marketplace/buy/${props.product.id}`} className="bg-white flex items-center justify-center bg-opacity-10 border-[1px] rounded-lg px-4 py-2 border-gray-600 outline-gray-700 text-white text-sm w-1/2 p-1 transition duration-300 ease-in-out hover:bg-opacity-20 hover:border-opacity-70 hover:text-opacity-90">
    View
  </Link>
  <button className="bg-white bg-opacity-10 border-[1px] rounded-lg px-4 py-2 border-gray-600 outline-gray-700 text-white text-sm w-1/2 p-1 transition duration-300 ease-in-out hover:bg-opacity-20 hover:border-opacity-70 hover:text-opacity-90">
    Enquire
  </button>
</div>

    </div>
  );
}
