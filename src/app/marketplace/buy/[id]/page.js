export default function Product(props)
{
    const {id} = props.params;
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
    const data = products.find((product) => product.id == id);
    return (
        <div className="bg-gray-900 mt-24 w-3/4 text-white min-h-full p-8">
          <div className="w-full mx-auto flex">
            <div className="w-1/2 pr-6">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2 pl-6">
              <h1 className="text-2xl font-semibold mb-4">{data.name}</h1>
              <p className="text-gray-400 text-base mb-4">{data.description}</p>
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
                <button className="bg-white bg-opacity-10 border-[1px] rounded-lg px-4 py-2 border-gray-600 outline-gray-700 text-white text-sm w-1/2 p-1 transition duration-300 ease-in-out hover:bg-opacity-20 hover:border-opacity-70 hover:text-opacity-90">
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