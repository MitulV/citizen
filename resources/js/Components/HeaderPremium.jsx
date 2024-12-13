import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, usePage } from "@inertiajs/react";
import { MegaMenu, Navbar, Avatar, Dropdown } from "flowbite-react";
import { Link as ScrollLink } from "react-scroll";

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
                            src="/images/CitizenTestPrep.svg"
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
                        aria-label="Open menu"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                {/* Menu for small screens */}
                {isMenuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white shadow-lg lg:hidden text-stone-500 text-sm z-10">
                        <ul className="space-y-1">
                            <Navbar>
                                <ScrollLink
                                    to="Features"
                                    smooth={true}
                                    duration={1000}
                                    offset={-50}
                                    className="hover:text-primary cursor-pointer"
                                >
                                    Features
                                </ScrollLink>
                            </Navbar>
                            <Navbar>
                                <ScrollLink
                                    to="pricing"
                                    smooth={true}
                                    duration={1000}
                                    offset={-50}
                                    className="hover:text-primary cursor-pointer"
                                >
                                    Pricing
                                </ScrollLink>
                            </Navbar>

                            <Navbar>
                                <ScrollLink
                                    to="passguarantee"
                                    smooth={true}
                                    duration={1000}
                                    offset={-50}
                                    className="hover:text-primary cursor-pointer"
                                >
                                    Pass Guarantee
                                </ScrollLink>
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
                                <ScrollLink
                                    to="pricing"
                                    smooth={true}
                                    duration={1000}
                                    offset={-50}
                                    className="bg-primary text-white text-lg md:text-xl xl:text-xl font-bold px-4 py-2 rounded-full block text-center mx-auto w-auto"
                                >
                                    Get Instant Access
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Navbar for medium and large screens */}
                <Navbar.Collapse className="hidden md:hidden lg:flex flex-grow items-center justify-center ">
                    <Navbar className="lg:flex">
                        <ScrollLink
                            to="Features"
                            smooth={true}
                            duration={1000}
                            offset={-50}
                            className="hover:text-primary cursor-pointer"
                        >
                            Features
                        </ScrollLink>
                    </Navbar>
                    <Navbar className="lg:flex">
                        <ScrollLink
                            to="pricing"
                            smooth={true}
                            duration={1000}
                            offset={-50}
                            className="hover:text-primary cursor-pointer"
                        >
                            Pricing
                        </ScrollLink>
                    </Navbar>
                    <Navbar className="lg:flex">
                        <ScrollLink
                            to="passguarantee"
                            smooth={true}
                            duration={1000}
                            offset={-50}
                            className="hover:text-primary cursor-pointer"
                        >
                            Pass Guarantee
                        </ScrollLink>
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

                    <ScrollLink
                        to="pricing"
                        smooth={true}
                        duration={1000}
                        offset={-50}
                        className="bg-primary text-white px-4 py-2 rounded-full text-nowrap cursor-pointer"
                    >
                        Get Instant Access
                    </ScrollLink>
                </div>
            </div>
        </MegaMenu>
    );
}
