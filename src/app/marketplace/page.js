"use client"

import { useState } from "react"
import Link from "next/link"

export default function marketplace() {
    const [tab, setTab] = useState('buy')
    const updateTab = (tab) => {
        setTab(tab)
    }
    return (
        <div className="flex mt-24 flex-col items-center w-3/4 min-h-screen">
        <div className="flex rounded-3xl flex-col bg-top items-center text-center justify-center p-8 w-3/4 mt-10" style={{backgroundImage: `url('buy-sell-bg.jpg')`}}>
            <div className="border-2 py-2 px-8 bg- border-gray-800 rounded-full">
                Space-Con
            </div>
            <div className="flex flex-rowjustify-center w-3/4 gap-10 font-semibold text-5xl mt-10">
                Global Market for Buying and Selling X rated movies
                </div>
            {/* small text desc */}
            <div className="flex flex-row justify-center w-2/4 gap-10 text-lg mt-10">
            Buy and sell your favorite X rated movies Buy and sell your favorite X rated movies Buy and sell your favorite X rated movies
                </div>
            {/* two buttons glassmorphism */}
            <div className="flex flex-row justify-center w-2/4 gap-10 mt-10">
                <Link href="/marketplace/buy" className="bg-black bg-opacity-50 border-[1px] rounded-lg px-4 py-2 border-none outline-gray-700 text-white text-sm w-1/2 p-1">Buy</Link>
                <Link href="/" className="bg-black bg-opacity-50 border-[1px] rounded-lg px-4 py-2 border-none outline-gray-700 text-white text-sm w-1/2 p-1">Sell</Link>
            </div>
            </div>
        </div>
    )
}