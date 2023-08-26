"use client"

import { useState } from "react"
import Link from "next/link"
import Requirements from "@/components/requirement/page";

export default function marketplace() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flex mt-24 p-16 flex-col items-center w-full min-h-screen">
            <Requirements isOpen={isOpen} toggleModal={toggleModal} />
        <div className="flex rounded-3xl flex-col bg-right items-center text-center justify-center p-8 w-3/4 mt-10" style={{backgroundImage: `url('buy-sell-bg.jpg')`}}>
            <div className="border-2 py-2 px-8 bg- border-gray-800 rounded-full">
                Space-Con
            </div>
            <div className="flex flex-rowjustify-center w-3/4 gap-10 font-semibold text-6xl mt-10">
                Global Market for Buying and Selling Space Equipment and Technology
                </div>
            {/* small text desc */}
            <div className="flex flex-row justify-center w-2/4 gap-10 text-lg mt-10">
            Buy and request space equipment from the global market of space technology.
                </div>
            {/* two buttons glassmorphism */}
            <div className="flex flex-row justify-center w-2/4 gap-10 mt-10">
                <Link href="/marketplace/buy" className="bg-white bg-opacity-10 border-[1px] rounded-lg px-4 py-2 border-none outline-gray-700 text-white text-sm w-1/2 p-1">Buy</Link>
                <button onClick={toggleModal} className="bg-white bg-opacity-10 border-[1px] rounded-lg px-4 py-2 border-none outline-gray-700 text-white text-sm w-1/2 p-1">Post Requirements</button>
            </div>
            </div>
        </div>
    )
}