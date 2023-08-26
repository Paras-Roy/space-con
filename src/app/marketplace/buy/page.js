"use client"
import { useState } from "react";
import ProductCard from "@/components/productcard/page";

export default function Buy() {

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const [products, setProducts] = useState([
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
            image: [
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/e8bf5216f49595a5f972f2361ca8e97d.png",
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/9ac0615b23581148d1ab638efd46fcd0.png",
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/11787a58ed22e003e9d79e3aef31b138.png",
            ],
        },
        {
            id: 2,
            name: 'UAV Propulsion B Combo',
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
            image: [
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/e8bf5216f49595a5f972f2361ca8e97d.png",
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/9ac0615b23581148d1ab638efd46fcd0.png",
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/11787a58ed22e003e9d79e3aef31b138.png",
            ],
        },
        {
            id: 7,
            name: "Rocket Engine Assembly",
            description: "It is designed for both, long term steady state and pulse mode operation. It operates in a wide pressure range at regulated pressure as well as in system blow down mode with flight heritage down to 6 bar inlet condition.",
            features:
                [
                    " Space Qualified.",
                ],
            applications:
                [
                    "Space Missions",
                ],
            tags:
                [
                    " Space applications",
                    "Space propulsion",
                    "Launcher",
                    "Rocket",
                ],
            image: ["https://defspace-prod-assets.sgp1.digitaloceanspaces.com/aad28f87e1d6421b85d26897748fbb5b.JPG",]
        },

{
            id: 3,
            name: "Liquid Fuel Rocket Engine",
            description: "IThe rocket engine, developed for the first stage of the rocket has a two-stage burning cycle system, which is the improved model of the engine. The improvement is made to win the severe competition in the artificial satellite business worldwide and is targeted to increase the reliability,.",
            features:
                [
                    " Thrust (vacuum) 112 ton",
                    "Isp(vacuum) 440sec",
                    "Weight 1,980kg",
                    "Length 3,670mm.",
                ],
            applications:
                [
                    "Rockets",
                ],
            tags:
                [
                    " Space applications",
                    " Space propulsion",
                    "Launcher",
                    "Rocket",
                ],
            image: ["https://defspace-prod-assets.sgp1.digitaloceanspaces.com/5c1d67a240de177238f12d196ee79dc6.JPG",]
        },

{
            id: 4,
            name: "Heavy-lift Launchers",
            description: "The rocket engine, developed for the first stage of the rocket has a two-stage burning cycle system, which is the improved model of the engine. The improvement is made to win the severe competition in the artificial satellite business worldwide and is targeted to increase the reliability,.",
            features:
                [
                    " Thrust (vacuum) 112 ton",
                    " Isp(vacuum) 440sec",
                    "Weight 1,980kg",
                    "Length 3,670mm.",
                ],
            applications:
                [
                    "Rockets",
                ],
            tags:
                [
                    "Space applications",
                    "Space propulsion",
                    "Launcher",
                    "Rocket",
                ],
            image: ["https://defspace-prod-assets.sgp1.digitaloceanspaces.com/e9fa6de5485ecd59a8d389dd340ddc7f.png"],
        },

{
            id: 5,
            name: "Heavy-lift Launchers",
            description: "The rocket engine, developed for the first stage of the rocket has a two-stage burning cycle system, which is the improved model of the engine. The improvement is made to win the severe competition in the artificial satellite business worldwide and is targeted to increase the reliability,.",
            features:
                [
                    "Thrust (vacuum) 112 ton",
                    "Isp(vacuum) 440sec",
                    "Weight 1,980kg",
                    "Length 3,670mm.",
                ],
            applications:
                [
                    "Rockets",
                ],
            tags:
                [
                    "Space applications",
                    "Space propulsion",

                    "Launcher",
                    "Rocket",
                ],
            image: ["https://defspace-prod-assets.sgp1.digitaloceanspaces.com/9b6ad730ba2481aabbd50ed545247e56.png"],
        }
    ]);

    const originalProducts = [
        {
            id: 1,
            name: 'UAV Aditya Combo',
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
            image: [
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/e8bf5216f49595a5f972f2361ca8e97d.png",
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/9ac0615b23581148d1ab638efd46fcd0.png",
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/11787a58ed22e003e9d79e3aef31b138.png",
            ],
        },
        {
            id: 2,
            name: 'UAV Paras Combo',
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
            image: [
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/e8bf5216f49595a5f972f2361ca8e97d.png",
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/9ac0615b23581148d1ab638efd46fcd0.png",
                "https://defspace-prod-assets.sgp1.digitaloceanspaces.com/11787a58ed22e003e9d79e3aef31b138.png",
            ],
        },
        {
            id: 7,
            name: "Rocket Engine Assembly",
            description: "It is designed for both, long term steady state and pulse mode operation. It operates in a wide pressure range at regulated pressure as well as in system blow down mode with flight heritage down to 6 bar inlet condition.",
            features:
                [
                    " Space Qualified.",
                ],
            applications:
                [
                    "Space Missions",
                ],
            tags:
                [
                    " Space applications",
                    "Space propulsion",
                    "Launcher",
                    "Rocket",
                ],
            image: ["https://defspace-prod-assets.sgp1.digitaloceanspaces.com/aad28f87e1d6421b85d26897748fbb5b.JPG"],
        },

        {
            id: 3,
            name: "Liquid Fuel Rocket Engine",
            description: "IThe rocket engine, developed for the first stage of the rocket has a two-stage burning cycle system, which is the improved model of the engine. The improvement is made to win the severe competition in the artificial satellite business worldwide and is targeted to increase the reliability,.",
            features:
                [
                    " Thrust (vacuum) 112 ton",
                    "Isp(vacuum) 440sec",
                    "Weight 1,980kg",
                    "Length 3,670mm.",
                ],
            applications:
                [
                    "Rockets",
                ],
            tags:
                [
                    " Space applications",
                    " Space propulsion",
                    "Launcher",
                    "Rocket",
                ],
            image: ["https://defspace-prod-assets.sgp1.digitaloceanspaces.com/5c1d67a240de177238f12d196ee79dc6.JPG",]
        },

        {
            id: 4,
            name: "Heavy-lift Launchers",
            description: "The rocket engine, developed for the first stage of the rocket has a two-stage burning cycle system, which is the improved model of the engine. The improvement is made to win the severe competition in the artificial satellite business worldwide and is targeted to increase the reliability,.",
            features:
                [
                    " Thrust (vacuum) 112 ton",
                    " Isp(vacuum) 440sec",
                    "Weight 1,980kg",
                    "Length 3,670mm.",
                ],
            applications:
                [
                    "Rockets",
                ],
            tags:
                [
                    "Space applications",
                    "Space propulsion",
                    "Launcher",
                    "Rocket",
                ],
            image: ["https://defspace-prod-assets.sgp1.digitaloceanspaces.com/e9fa6de5485ecd59a8d389dd340ddc7f.png",],
        },

        {
            id: 5,
            name: "Heavy-lift Launchers",
            description: "The rocket engine, developed for the first stage of the rocket has a two-stage burning cycle system, which is the improved model of the engine. The improvement is made to win the severe competition in the artificial satellite business worldwide and is targeted to increase the reliability,.",
            features:
                [
                    "Thrust (vacuum) 112 ton",
                    "Isp(vacuum) 440sec",
                    "Weight 1,980kg",
                    "Length 3,670mm.",
                ],
            applications:
                [
                    "Rockets",
                ],
            tags:
                [
                    "Space applications",
                    "Space propulsion",

                    "Launcher",
                    "Rocket",
                ],
            image: ["https://defspace-prod-assets.sgp1.digitaloceanspaces.com/9b6ad730ba2481aabbd50ed545247e56.png",],
        },
    ]

    const filterProducts = () => {
        const filteredProducts = originalProducts.filter((product) => {
            // name and tags include that word
            return product.name.toLowerCase().includes(search.toLowerCase()) || product.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
        });
        setProducts(filteredProducts);
        console.log(filteredProducts);
    }

    return (
        <div className="flex mt-24 flex-col items-center w-3/4 min-h-screen">
            <div className="flex flex-row justify-center gap-10 w-full">
                <input
                    type="text"
                    onChange={handleSearch}
                    className="search-input bg-transparent border-[1px] rounded-lg px-4 py-2 border-gray-600 outline-gray-700 text-white text-sm w-6/12 p-1"
                    placeholder="Search..."
                />
                <button onClick={filterProducts} className="bg-white bg-opacity-10 border-[1px] rounded-lg px-4 py-2 border-gray-600 outline-gray-700 text-white text-sm w-1/12 p-1">Search</button>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-20 w-full mt-10">
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