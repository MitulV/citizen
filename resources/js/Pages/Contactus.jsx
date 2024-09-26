import { Link, Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import GuestLayout from "@/Layouts/GuestLayout";

export default function Contactus({ auth, chapters }) {
    return (
        <>
            <GuestLayout>
                <Head title="Contact Us" />
                <div className="bg-slate-50 min-h-screen">
                    <div className="container mx-auto p-10">
                        <h1 className="text-4xl font-bold mb-10 text-center">
                            Contact Us
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-8">
                                <p className="text-zinc-500 my-4 text-lg">
                                    Thank you for your interest in
                                    CitizenTestPrep.ca. We are dedicated to
                                    delivering excellent service and support to
                                    our learners. If you have any inquiries or
                                    need assistance regarding our program,
                                    please feel free to reach out to us using
                                    the contact information provided below. We
                                    are here to help you succeed.
                                </p>
                                {/* Email and Phone Number Row */}
                                <div className="flex flex-col md:flex-row md:space-x-8 text-lg">
                                    <div className="flex items-center space-x-4">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="w-6 h-6 text-zinc-500"
                                        />
                                        <p className="text-zinc-500">
                                            contact@citizentestprep.ca
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-4 md:mt-0 space-x-4">
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className="w-6 h-6 text-zinc-500"
                                        />
                                        <p className="text-zinc-500">
                                            672-558-4037
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Right Column */}
                            <div className="bg-slate-50 text-lg p-6 rounded-lg">
                                <form className="space-y-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-zinc-500 my-4"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Your name"
                                            className="w-full px-4 py-4 border border-gray-300 rounded-lg text-zinc-100"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-zinc-500 my-4"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Your Working email"
                                            className="w-full px-4 py-4 border border-gray-300 rounded-lg text-zinc-100"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-zinc-500 my-4"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Your message"
                                            className="w-full h-40 px-4 py-4 border border-gray-300 rounded-lg text-zinc-100"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full px-4 py-2 bg-primary text-white rounded-full hover:bg-blue-600"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
