import { Link, Head, useForm } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import GuestLayout from "@/Layouts/GuestLayout";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contactus({ success }) {
    // Initialize useForm hook for managing form state
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        message: "",
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/contact-us", {
            onSuccess: () => {
                // Show success message using toast
                toast.success(
                    "Thank you for your message. We will get back to you shortly."
                );

                reset();
            },
        });
    };

    return (
        <GuestLayout>
            <Head>
                <title>Contact us - CitizenTestPrep</title>
                <meta
                    name="description"
                    content="Get in touch with CitizenTestPrep for any questions or support regarding your citizenship test preparation. We're here to help you succeed!"
                />
            </Head>
            <div className="bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-60 xl:px-60 py-14">
                    <h1 className="text-3xl sm:text-4xl text-center font-bold mb-6 sm:mb-8 py-8">
                        Contact Us
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-8">
                            <p className="text-zinc-500 my-4 text-lg">
                                Thank you for your interest in
                                CitizenTestPrep.ca. We are dedicated to
                                delivering excellent service and support to our
                                learners. If you have any inquiries or need
                                assistance regarding our program, please feel
                                free to reach out to us using the contact
                                information provided below. We are here to help
                                you succeed.
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
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="bg-slate-50 text-lg m-2 rounded-lg">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-zinc-500 mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="Your name"
                                        className="w-full px-4 py-4 mb-2 border border-gray-300 rounded-lg"
                                    />
                                    {errors.name && (
                                        <div className="text-red-500">
                                            {errors.name}
                                        </div>
                                    )}
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
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="Your working email"
                                        className="w-full px-4 py-4  mb-2 border border-gray-300 rounded-lg"
                                    />
                                    {errors.email && (
                                        <div className="text-red-500">
                                            {errors.email}
                                        </div>
                                    )}
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
                                        value={data.message}
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                        placeholder="Your message"
                                        className="w-full h-40 px-4 py-4 border border-gray-300 rounded-lg"
                                    ></textarea>
                                    {errors.message && (
                                        <div className="text-red-500">
                                            {errors.message}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full px-4 py-2 bg-primary text-white rounded-full hover:bg-blue-600"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Toast container for notifications */}
                <ToastContainer />
            </div>
        </GuestLayout>
    );
}
