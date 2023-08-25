import ProductCard from "@/components/productcard/page";

export default function Buy() {

    const products = [
        {
            id: 1,
            name: 'UAV Propulsion Combo',
            description: 'Experience unmatched drone performance with UAV Propulsion Combo, delivering powerful thrust, extreme weather resilience, lightweight efficiency, and versatile compatibility for commercial and agricultural missions.',
            features:
                [
                    "Powerful Thrust: Generates 10.8kg thrust per axis for versatile use.",
                    "Extreme Weather Resilience: IP55 rating for water and dust resistance.",
                    "Lightweight Efficiency: 1.3kg per axis for maximum payload capacity.",
                    "Versatile Compatibility: Compatible with a wide range of drones.",
                    "Easy Installation: Quick-release design for fast and easy installation.",
                    "Safe Flight: Built-in safety features for safe flight.",
                ],
            applications:
                [
                    "Agriculture",
                    "Inspection",
                    "Mapping",
                    "Search & Rescue",
                    "Security",
                    "Surveying",
                ],
            tags:
                [
                    " Drone Accessories",
                    "Drone Components",
                    "Drone Spare Parts",
                    "High-Performance Combo",
                    "Drone Propulsion Combo",
                    "UAV Propulsion Combo",
                    "Reliable Drone Combo",
                ],
                image: "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/097a9500b505c42a0b2c549a48513070.JPG",
        },{
            id: 2,
            name: 'UAV Propulsion Combo',
            description: 'Experience unmatched drone performance with UAV Propulsion Combo, delivering powerful thrust, extreme weather resilience, lightweight efficiency, and versatile compatibility for commercial and agricultural missions.',
            features:
                [
                    "Powerful Thrust: Generates 10.8kg thrust per axis for versatile use.",
                    "Extreme Weather Resilience: IP55 rating for water and dust resistance.",
                    "Lightweight Efficiency: 1.3kg per axis for maximum payload capacity.",
                    "Versatile Compatibility: Compatible with a wide range of drones.",
                    "Easy Installation: Quick-release design for fast and easy installation.",
                    "Safe Flight: Built-in safety features for safe flight.",
                ],
            applications:
                [
                    "Agriculture",
                    "Inspection",
                    "Mapping",
                    "Search & Rescue",
                    "Security",
                    "Surveying",
                ],
            tags:
                [
                    " Drone Accessories",
                    "Drone Components",
                    "Drone Spare Parts",
                    "High-Performance Combo",
                    "Drone Propulsion Combo",
                    "UAV Propulsion Combo",
                    "Reliable Drone Combo",
                ],
                image: "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/097a9500b505c42a0b2c549a48513070.JPG",
        },
    ];

    return (
        <div className="flex mt-24 flex-col items-center w-3/4 min-h-screen">
            <div className="flex flex-row justify-center gap-10 w-full">
                <input
                    type="text"
                    className="search-input bg-transparent border-[1px] rounded-lg px-4 py-2 border-gray-600 outline-gray-700 text-white text-sm w-6/12 p-1"
                    placeholder="Search..."
                />
                <button className="bg-white bg-opacity-10 border-[1px] rounded-lg px-4 py-2 border-gray-600 outline-gray-700 text-white text-sm w-1/12 p-1">Search</button>
            </div>

            <div className="flex flex-row justify-center gap-10 w-full mt-10">
                {
                    products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                })}
                </div>

        </div>
    )
}