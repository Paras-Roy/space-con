import { useState } from "react";

export default function Enquiry(props) {
    const { product, toggleModal, isOpen } = props;
    const [units, setUnits] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleModal();
    };

    const increaseUnits = () => {
        setUnits(units + 1);
    };

    const decreaseUnits = () => {
        if (units > 1) {
            setUnits(units - 1);
        }
    };

    return (
        <div className={`backdrop-blur-xl fixed z-50 inset-0 flex items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-gray-900 rounded-xl shadow-lg w-1/3 p-8">
                <div className="flex flex-row mb-4 justify-around">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img src={product.image[0]} alt={product.name} className="object-cover w-full h-full" />
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-400">Select number of units:</p>
                        <div className="flex items-center mt-2">
                            <button onClick={decreaseUnits} className="bg-gray-800 text-white px-3 py-1 rounded-md">
                                -
                            </button>
                            <span className="mx-2 text-lg text-gray-300">{units}</span>
                            <button onClick={increaseUnits} className="bg-gray-800 text-white px-3 py-1 rounded-md">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">Enquiry</h1>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm">Name</label>
                            <input type="text" id="name" required className="rounded-lg bg-gray-800 bg-opacity-20 border-[1px] border-gray-600 outline-gray-700 text-white text-sm p-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input type="email" id="email" required className="rounded-lg bg-gray-800 bg-opacity-20 border-[1px] border-gray-600 outline-gray-700 text-white text-sm p-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm">Phone</label>
                            <input type="tel" id="phone" required className="rounded-lg bg-gray-800 bg-opacity-20 border-[1px] border-gray-600 outline-gray-700 text-white text-sm p-2" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm">Specific Requirements (Optional)</label>
                            <textarea id="message" rows="4" className="rounded-lg bg-gray-800 bg-opacity-20 border-[1px] border-gray-600 outline-gray-700 text-white text-sm p-2"></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200">
                                Submit
                            </button>
                            <button type="button" onClick={toggleModal} className="bg-white bg-opacity-10 border-[1px] rounded-lg px-4 py-2 border-gray-600 outline-gray-700 text-white text-sm ml-2 hover:bg-opacity-20 hover:border-opacity-70 hover:text-opacity-90">
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
