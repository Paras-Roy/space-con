"use client"
import { useState } from "react"
import Enquiry from "@/components/enquiry/page";
export default function Product(props) {
    const { id } = props.params;

    const products = [
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
    const data = products.find((product) => product.id == id);
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const [selectedImage, setSelectedImage] = useState(data.image[0]);
    return (
        <div className="bg-gray-900 mt-24 w-3/4 text-white min-h-full p-8">
            <Enquiry product={data} isOpen={isOpen} toggleModal={toggleModal} />
            <div className="w-full mx-auto flex">
                <div className="w-1/2 pr-6">
                    <img
                        src={selectedImage}
                        alt={data.name}
                        className="w-full h-auto rounded-lg"
                    />
                    <div className="flex mt-4">
                        {data.image.map((thumbnail, index) => (
                            <div
                                key={index}
                                className={`w-1/3 p-2 opacity-50 cursor-pointer ${selectedImage === thumbnail ? 'border-gray-500 opacity-100 border-[1px]' : ''
                                    }`}
                                onClick={() => setSelectedImage(thumbnail)}
                            >
                                <img src={thumbnail} alt={`Thumbnail ${index}`} className="w-full h-auto rounded-lg" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/2 pl-6">
                    <h1 className="text-2xl font-semibold mb-4">{data.name}</h1>
                    <p className="text-gray-400 text-ba mb-4">{data.description}</p>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Features</h2>
                        <ul className="list-disc pl-6 mt-2">
                            {data.features.map((feature, index) => (
                                <li key={index} className="text-gray-400">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Applications</h2>
                        <ul className="list-disc pl-6 mt-2">
                            {data.applications.map((application, index) => (
                                <li key={index} className="text-gray-400">
                                    {application}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Tags</h2>
                        <div className="flex flex-wrap mt-2">
                            {data.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded-lg mr-2 mb-2"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 flex gap-10 justify-end">
                        <button onClick={toggleModal} className="bg-white bg-opacity-10 border-[1px] rounded-lg px-4 py-2 border-gray-600 outline-gray-700 text-white text-sm w-1/2 p-1 transition duration-300 ease-in-out hover:bg-opacity-20 hover:border-opacity-70 hover:text-opacity-90">
                            Enquire
                        </button>
                        <button className="bg-white bg-opacity-10 border-[1px] rounded-lg px-4 py-2 border-gray-600 outline-gray-700 text-white text-sm w-1/2 p-1 transition duration-300 ease-in-out hover:bg-opacity-20 hover:border-opacity-70 hover:text-opacity-90">
                            Add to Favourite
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}