import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";
import { MegaMenu, Navbar } from "flowbite-react";

export default function Header({ user }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <MegaMenu>
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
                <div className="flex items-center">
                    <Link href={route("homePage")}>
                        <img
                            src="/images/logo.png"
                            className="w-44 h-7"
                            alt="Logo"
                        />
                    </Link>
                </div>

                {/* Hamburger Icon for small screens */}
                <div className="block md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="bg-primary hover:bg-primary text-white rounded-full border-none p-2"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                {/* Menu for small screens */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden text-stone-500">
                        <ul className="space-y-4 p-4">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary block"
                                >
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary block"
                                >
                                    Resources
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={route("about")}
                                    className="hover:text-primary block"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={
                                        user
                                            ? route("dashboard")
                                            : route("login")
                                    }
                                    className="border-2 border-primary bg-white text-gray-800 px-4 py-2 rounded-full block text-center mx-auto w-80"
                                >
                                    {user ? "Dashboard" : "Sign In"}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={route("premiumPage")}
                                    className="bg-primary text-white px-4 py-2 rounded-full block text-center mx-auto w-80"
                                >
                                    Unlock All Questions
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Navbar for medium and large screens */}
                <Navbar.Collapse className="hidden md:flex flex-grow items-center justify-center">
                    <Navbar className="md:flex">
                        <MegaMenu.Dropdown toggle={<>Help </>}>
                            <ul className="space-y-4 p-4">
                                <li>
                                    <Link
                                        href={route("faqs")}
                                        className="hover:text-primary"
                                    >
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("contact")}
                                        className="hover:text-primary"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </MegaMenu.Dropdown>
                    </Navbar>
                    <Navbar className="md:flex">
                        <MegaMenu.Dropdown toggle={<>Resources </>}>
                            <ul className="space-y-4 p-4">
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        className="hover:text-primary"
                                    >
                                        Study Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("testInfoPage", {
                                            chapter_id: 12,
                                        })}
                                        className="hover:text-primary"
                                    >
                                        Practice Tests
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("testInfoPage", {
                                            chapter_id: 12,
                                        })}
                                        className="hover:text-primary"
                                    >
                                        Diagnostic Test
                                    </Link>
                                </li>
                            </ul>
                        </MegaMenu.Dropdown>
                    </Navbar>
                    <Navbar className="md:flex">
                        <Link
                            href={route("about")}
                            className="hover:text-primary cursor-pointer"
                        >
                            About
                        </Link>
                    </Navbar>
                </Navbar.Collapse>

                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        href={user ? route("dashboard") : route("login")}
                        className="border-2 border-primary bg-white text-gray-800 px-4 py-2 rounded-full"
                    >
                        {user ? "Dashboard" : "Sign In"}
                    </Link>

                    <Link
                        href={route("premiumPage")}
                        className="bg-primary text-white px-4 py-2 rounded-full"
                    >
                        Pass the first time, guaranteed
                    </Link>
                </div>
            </div>
        </MegaMenu>
    );
}
