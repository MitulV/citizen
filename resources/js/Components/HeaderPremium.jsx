import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, usePage } from "@inertiajs/react";
import { MegaMenu, Navbar, Avatar, Dropdown } from "flowbite-react";

export default function HeaderPremium({ user }) {
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
                            src="/images/logo.svg"
                            className="w-36 h-[1.60rem]"
                            alt="Logo"
                        />
                    </Link>
                </div>

                {/* Hamburger Icon for small screens */}
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="bg-primary hover:bg-primary text-white px-4 rounded-full border-none p-2"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                {/* Menu for small screens */}
                {isMenuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white shadow-lg lg:hidden text-stone-500 text-sm z-10">
                        <ul className="space-y-1">
                            <Navbar>
                                <Link
                                    href={route("about")}
                                    className="hover:text-primary block ml-1"
                                >
                                    Features
                                </Link>
                            </Navbar>
                            <Navbar>
                                <Link
                                    href={route("about")}
                                    className="hover:text-primary block ml-1"
                                >
                                    About
                                </Link>
                            </Navbar>

                            <Navbar>
                                <Link
                                    href={route("about")}
                                    className="hover:text-primary block ml-1"
                                >
                                    Pricing
                                </Link>
                            </Navbar>

                            <li className="mx-5 pt-3">
                                <Link
                                    href={
                                        user
                                            ? route("dashboard")
                                            : route("login")
                                    }
                                    className="border text-lg md:text-xl xl:text-xl font-bold border-primary bg-white text-gray-800 px-4 py-2 rounded-full block text-center mx-auto w-auto"
                                >
                                    {user ? "Dashboard" : "Sign In"}
                                </Link>
                            </li>

                            <li className="mx-5 pt-2 pb-3">
                                <Link
                                    href={route("premiumPage")}
                                    className="bg-primary text-white text-lg md:text-xl xl:text-xl font-bold px-4 py-2 rounded-full block text-center mx-auto w-auto"
                                >
                                    Get Instant Access
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Navbar for medium and large screens */}
                <Navbar.Collapse className="hidden md:hidden lg:flex flex-grow items-center justify-center ">
                    <Navbar className="lg:flex">
                        <Link
                            href={route("about")}
                            className="hover:text-primary cursor-pointer"
                        >
                            Features
                        </Link>
                    </Navbar>
                    <Navbar className="lg:flex">
                        <Link
                            href={route("about")}
                            className="hover:text-primary cursor-pointer"
                        >
                            Pricing
                        </Link>
                    </Navbar>
                    <Navbar className="lg:flex">
                        <Link
                            href={route("about")}
                            className="hover:text-primary cursor-pointer"
                        >
                            Pass Guarantee
                        </Link>
                    </Navbar>
                </Navbar.Collapse>

                {/* User and Premium Links for large screens */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Link
                        href={user ? route("dashboard") : route("login")}
                        className="border border-primary bg-white text-gray-800 px-4 py-2 rounded-full flex justify-center items-center"
                    >
                        {user ? "Dashboard" : "Sign In"}
                    </Link>

                    <Link
                        href={route("premiumPage")}
                        className="bg-primary text-white px-4 py-2 rounded-full text-nowrap"
                    >
                        Get Instant Access
                    </Link>
                </div>
            </div>
        </MegaMenu>
    );
}
