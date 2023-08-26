import { useState } from "react";

export default function Requirements(props) {
    const { toggleModal, isOpen } = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [lookingFor, setLookingFor] = useState("");
    const [requirements, setRequirements] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the submission logic, such as sending the form data to a backend server.
        toggleModal();
    };

    return (
        <div className={`backdrop-blur-xl fixed z-50 inset-0 flex items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-gray-900 rounded-xl shadow-lg w-1/3 p-8">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold">Post Requirements</h1>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="rounded-lg bg-gray-800 bg-opacity-20 border-[1px] border-gray-600 outline-gray-700 text-white text-sm p-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="rounded-lg bg-gray-800 bg-opacity-20 border-[1px] border-gray-600 outline-gray-700 text-white text-sm p-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact" className="text-sm">Contact</label>
                            <input
                                type="tel"
                                id="contact"
                                className="rounded-lg bg-gray-800 bg-opacity-20 border-[1px] border-gray-600 outline-gray-700 text-white text-sm p-2"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lookingFor" className="text-sm">What are you looking for?</label>
                            <input
                                type="text"
                                id="lookingFor"
                                className="rounded-lg bg-gray-800 bg-opacity-20 border-[1px] border-gray-600 outline-gray-700 text-white text-sm p-2"
                                value={lookingFor}
                                onChange={(e) => setLookingFor(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="requirements" className="text-sm">Specific Requirements</label>
                            <textarea
                                id="requirements"
                                rows="4"
                                className="rounded-lg bg-gray-800 bg-opacity-20 border-[1px] border-gray-600 outline-gray-700 text-white text-sm p-2"
                                value={requirements}
                                onChange={(e) => setRequirements(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200">
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={toggleModal}
                                className="bg-white bg-opacity-10 border-[1px] rounded-lg px-4 py-2 border-gray-600 outline-gray-700 text-white text-sm ml-2 hover:bg-opacity-20 hover:border-opacity-70 hover:text-opacity-90"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
