import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter,faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <footer className="pt-8 bg-slate-50 text-black">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center md:text-left md:col-span-2">
                    <div className="flex items-center">
                        <span className="text-xl font-black leading-6">
                            <span className="text-blue-500">
                                Citizen
                            </span>{" "}
                            TestPrep
                        </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                        We're the top online destination for
                        preparing for the Canadian Citizenship Test.
                        We want you to feel confident and ready on
                        test day. Use our study materials and
                        resources to pass with a 100% success
                        guarantee.
                    </p>
                    <ul className="mt-2 text-xs">
                        <li>info@example.com | +1 234 567 890</li>
                    </ul>
                </div>

                <div className="mt-4 md:mt-0">
                    <h3 className="text-sm font-semibold mb-2">
                        About
                    </h3>
                    <ul className="text-xs">
                        <li>
                            <a href="#" className="text-gray-600">
                                Who We Are
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600">
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600">
                                Accuracy Commitment
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mt-4 md:mt-0">
                    <h3 className="text-sm font-semibold mb-2">
                        Platform
                    </h3>
                    <ul className="text-xs">
                        <li>
                            <a href="#" className="text-gray-600">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600">
                                Customer Reviews
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
                            <a href="#" className="text-gray-600">
                                Study Guide
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600">
                                Practice Tests
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600">
                                Diagnostic Test
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600">
                                FAQs
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="py-2 text-white bg-secondary">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <p className="text-sm">
                    © 2024 CitizenTestPrep All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="#"
                        className="text-white hover:text-gray-300"
                    >
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-white text-lg"
                        />{" "}
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-gray-300"
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-white text-lg"
                        />{" "}
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-gray-300"
                    >
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-white text-lg"
                        />{" "}
                    </a>
                    <a
                        href="#"
                        className="text-white hover:text-gray-300"
                    >
                        <FontAwesomeIcon
                            icon={faYoutube}
                            className="text-white text-lg"
                        />{" "}
                    </a>
                </div>
            </div>
        </div>
    </footer>
    );
}