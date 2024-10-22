import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="container mx-auto  px-0 md:px-16 lg:px-8 xl:px-44 ">
            <div className="px-4 sm:px-6 md:px-8  pt-10  bg-white text-black ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex  md:justify-start">
                            <span className="text-xl font-black leading-6">
                                <span className="text-blue-500">Citizen</span>{" "}
                                TestPrep
                            </span>
                        </div>

                        {/* Content for small screens */}
                        <p className=" mx-2 text-sm md:text-xs text-justify text-gray-500 mt-5 sm:hidden">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque vero eos et accusamus et iusto.
                        </p>

                        {/* Content for larger screens */}
                        <p className="hidden sm:block text-sm md:text-xs text-gray-500 mt-5">
                            We're the top online destination for preparing for
                            the Canadian Citizenship Test. We want you to feel
                            confident and ready on test day. Use our study
                            materials and resources to pass with a 100% success
                            guarantee.
                        </p>

                        <div className="mt-8 sm:flex sm:flex-col  md:hidden lg:hidden xl:hidden">
                            <h3 className="text-sm md:text-sm text-gray-500 text-left ">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="mr-2 "
                                />
                                hello@citizentestprep.ca
                            </h3>
                            <h3 className="text-sm md:text-sm text-gray-500 mt-4 sm:mt-0 text-left">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="mr-2 "
                                />{" "}
                                +1 672-558-4037
                            </h3>
                        </div>
                    </div>

                    {/* Other sections remain unchanged */}
                    <div className="mt-2 md:mt-0 md:ml-20 xl:ml-40">
                        <h3 className="text-sm font-semibold mb-2">About</h3>
                        <ul className="text-xs space-y-3">
                            <li>
                                <a
                                    href={route("about")}
                                    className="text-gray-500"
                                >
                                    Who We Are
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("terms")}
                                    className="text-gray-500"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("privacyPolicy")}
                                    className="text-gray-500"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("refund")}
                                    className="text-gray-500"
                                >
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className=" md:ml-10 xl:ml-24">
                        <h3 className="text-sm font-semibold mb-2">Platform</h3>
                        <ul className="text-xs space-y-3">
                            <li>
                                <a
                                    href={route("contact")}
                                    className="text-gray-500 "
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("about")}
                                    className="text-gray-500"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-500">
                                    News & Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className=" xl:ml-10">
                        <h3 className="text-sm font-semibold mb-2 md:mb-5 ">
                            Resources
                        </h3>
                        <ul className="text-xs space-y-3">
                            <li>
                                <a
                                    href={route("dashboard")}
                                    className="text-gray-500"
                                >
                                    Study Guide
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("testInfoPage", {
                                        chapter_id: 12,
                                    })}
                                    className="text-gray-500"
                                >
                                    Practice Tests
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("testInfoPage", {
                                        chapter_id: 12,
                                    })}
                                    className="text-gray-500"
                                >
                                    Diagnostic Test
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("faqs")}
                                    className="text-gray-500"
                                >
                                    FAQs
                                </a>
                            </li>
                        </ul>

                        {/* Add space after the list on small screens */}
                        <div className="mt-10 sm:mt-10"></div>
                    </div>
                </div>

                <div className="my-4 hidden md:flex flex-wrap items-center justify-center md:justify-start">
                    <h3 className="text-xs md:text-sm text-gray-600">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        hello@citizentestprep.ca
                    </h3>
                    <h3 className="text-xs md:text-sm text-gray-500 ml-4">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> +1
                        672-558-4037
                    </h3>
                </div>
            </div>

            <div className="container mx-auto py-2 text-white bg-secondary">
                <div className="px-8 sm:px-14 md:px-8 lg:px-12 xl:px-4 flex flex-col sm:flex-row items-center justify-between">
                    {/* Sentence first on small screens, left side on larger screens */}
                    <p className="text-xs mx-8 font-thin text-center sm:text-left order-2 sm:order-none mt-2 md:mt-0">
                        © 2024 CitizenTestPrep All rights reserved.
                    </p>

                    {/* Icons second on small screens, right side on larger screens */}
                    <div className="flex space-x-4 mb-2 sm:mb-0 order-1 sm:order-none sm:ml-auto">
                        <a
                            href="https://www.facebook.com/profile.php?id=61566797242585"
                            className="text-white hover:text-gray-300"
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="text-white text-sm"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/citizentestprep/ "
                            className="text-white hover:text-gray-300"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-white text-sm"
                            />
                        </a>
                        <a
                            href="https://x.com/citizentestprep"
                            className="text-white hover:text-gray-300"
                        >
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="text-white text-sm"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCUvM0foDlasYhSOWFey8TnA"
                            className="text-white hover:text-gray-300"
                        >
                            <FontAwesomeIcon
                                icon={faYoutube}
                                className="text-white text-sm"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
