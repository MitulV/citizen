import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";
import { Button, MegaMenu, Navbar } from "flowbite-react";

export default function HeaderOld() {
    return (
        <MegaMenu>
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
                <div className="flex items-center">
                    <Link href={route("homePage")}>
                        <img
                            src="/images/logo.svg"
                            className="w-44 h-[1.60rem]"
                            alt="Logo"
                        />
                    </Link>
                </div>

                <Navbar.Toggle className="md:hidden bg-primary hover:bg-primary text-white rounded-full border-none" />
                <Navbar.Collapse className="md:flex flex-grow items-center justify-center">
                    <Navbar.Link className="md:flex">
                        <MegaMenu.Dropdown toggle={<>Help </>}>
                            <ul className="space-y-4 p-4">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary"
                                    >
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </MegaMenu.Dropdown>
                    </Navbar.Link>
                    <Navbar.Link className="md:flex">
                        <MegaMenu.Dropdown toggle={<>Resources </>}>
                            <ul className="space-y-4 p-4">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary"
                                    >
                                        Test Locations
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-primary"
                                    >
                                        Driving Tips
                                    </Link>
                                </li>
                            </ul>
                        </MegaMenu.Dropdown>
                    </Navbar.Link>
                    <Navbar.Link href="#" className="md:flex">
                        Reviews
                    </Navbar.Link>
                    <Navbar.Link href="#" className="md:flex">
                        About
                    </Navbar.Link>
                </Navbar.Collapse>

                <div className="hidden md:flex items-center space-x-4 ">
                    <Link
                        href={route("register")}
                        className="border-2 border-primary bg-white text-gray-800 px-4 py-2 rounded-full"
                    >
                        Sign In
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
