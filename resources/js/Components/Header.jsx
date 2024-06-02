import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faBars
} from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return (
        <>
        <header className="bg-white shadow-md">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <span className="text-2xl font-black leading-6 text-left">
                                <span className="text-blue-500">Citizen</span>
                                TestPrep
                            </span>
                        </div>

                        <nav className="hidden md:flex md:items-center md:justify-end space-x-4">
                            <a
                                href="#"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                Help <FontAwesomeIcon icon={faChevronDown} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                Reviews <FontAwesomeIcon icon={faChevronDown} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                Resource
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                About
                            </a>
                        </nav>

                        <div className="md:hidden">
                            <button
                                id="mobile-menu-button"
                                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                            >
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>

                        <div className="hidden md:block">
                            <button className="border-2 border-primary bg-white text-gray-800 px-4 py-2 rounded-full mr-4">
                                Sign In
                            </button>
                            <button className="bg-primary text-white px-4 py-2 rounded-full">
                                Pass the first time, guaranteed
                            </button>
                        </div>
                    </div>

                    <div
                        id="mobile-menu"
                        className="md:hidden bg-white shadow-md absolute w-full top-full left-0 mt-2 z-10 hidden"
                    >
                        <div className="px-4 py-2">
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-gray-900 py-2"
                            >
                                Help
                            </a>
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-gray-900 py-2"
                            >
                                Reviews
                            </a>
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-gray-900 py-2"
                            >
                                Resource
                            </a>
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-gray-900 py-2"
                            >
                                About
                            </a>
                        </div>
                    </div>
                </header>
        </>
    );
}