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
        <footer className="pt-8 bg-slate-50 text-black">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex  md:justify-start">
                            <span className="text-xl font-black leading-6">
                                <span className="text-blue-500">Citizen</span>{" "}
                                TestPrep
                            </span>
                        </div>
                        <p className="text-sm md:text-xs text-gray-600 mt-2">
                            We're the top online destination for preparing for
                            the Canadian Citizenship Test. We want you to feel
                            confident and ready on test day. Use our study
                            materials and resources to pass with a 100% success
                            guarantee.
                        </p>
                        <div className="mt-4 sm:flex sm:flex-col sm:items-left md:hidden lg:hidden xl:hidden">
                            <h3 className="text-xs md:text-sm text-gray-600 mt-2">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="mr-2"
                                />
                                hello@citizentestprep.ca
                            </h3>
                            <h3 className="text-xs md:text-sm text-gray-600 mt-2 sm:mt-0">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="mr-2"
                                />{" "}
                                +1 672-558-4037
                            </h3>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <h3 className="text-sm font-semibold mb-2">About</h3>
                        <ul className="text-xs">
                            <li>
                                <a
                                    href={route("about")}
                                    className="text-gray-600"
                                >
                                    Who We Are
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("terms")}
                                    className="text-gray-600"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("privacyPolicy")}
                                    className="text-gray-600"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("refund")}
                                    className="text-gray-600"
                                >
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <h3 className="text-sm font-semibold mb-2">Platform</h3>
                        <ul className="text-xs">
                            <li>
                                <a
                                    href={route("contact")}
                                    className="text-gray-600"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("about")}
                                    className="text-gray-600"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-600">
                                    News & Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <h3 className="text-sm font-semibold mb-2">
                            Resources
                        </h3>
                        <ul className="text-xs">
                            <li>
                                <a
                                    href={route("dashboard")}
                                    className="text-gray-600"
                                >
                                    Study Guide
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("testInfoPage", {
                                        chapter_id: 12,
                                    })}
                                    className="text-gray-600"
                                >
                                    Practice Tests
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("testInfoPage", {
                                        chapter_id: 12,
                                    })}
                                    className="text-gray-600"
                                >
                                    Diagnostic Test
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("faqs")}
                                    className="text-gray-600"
                                >
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="my-4 hidden md:flex flex-wrap items-center justify-center md:justify-start">
                    <h3 className="text-xs md:text-sm text-gray-600">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        hello@citizentestprep.ca
                    </h3>
                    <h3 className="text-xs md:text-sm text-gray-600 ml-4">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> +1
                        672-558-4037
                    </h3>
                </div>
            </div>

            <div className="py-2 text-white bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-xs md:text-sm text-center sm:text-left mb-2 sm:mb-0">
                        © 2024 CitizenTestPrep All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=61566797242585"
                            className="text-white hover:text-gray-300"
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className="text-white text-lg"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/citizentestprep/ "
                            className="text-white hover:text-gray-300"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-white text-lg"
                            />
                        </a>
                        <a
                            href="https://x.com/citizentestprep"
                            className="text-white hover:text-gray-300"
                        >
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="text-white text-lg"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCUvM0foDlasYhSOWFey8TnA "
                            className="text-white hover:text-gray-300"
                        >
                            <FontAwesomeIcon
                                icon={faYoutube}
                                className="text-white text-lg"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
