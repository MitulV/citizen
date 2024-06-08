import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";
import { Button, MegaMenu, Navbar } from "flowbite-react";

export default function HeaderNew() {
    return (
        <MegaMenu>
            <div className="container flex justify-between items-center px-2 py-2">
                <Navbar.Brand href="/" className="flex items-center">
                    <span className="text-2xl font-black leading-6 text-left">
                        <span className="text-blue-500">Citizen</span>
                        TestPrep
                    </span>
                </Navbar.Brand>

                <Navbar.Toggle className="bg-primary hover:bg-primary text-white rounded-full border-none" />
                <Navbar.Collapse>
                    <Navbar.Link>
                        <MegaMenu.Dropdown toggle={<>Help</>}>
                            <ul>
                                <div className="space-y-4 p-4">
                                    <li>
                                        <Link href="#" className="hover:text-primary">About Us</Link>
                                    </li>
                                    <li>
                                    <Link href="#" className="hover:text-primary">Library</Link>
                                    </li>
                                </div>
                            </ul>
                        </MegaMenu.Dropdown>
                    </Navbar.Link>
                    <Navbar.Link>
                        <MegaMenu.Dropdown toggle={<>Reviews</>}>
                            <ul>
                                <div className="space-y-4 p-4">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-primary"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:text-primary"
                                        >
                                            Library
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </MegaMenu.Dropdown>
                    </Navbar.Link>
                    <Navbar.Link href="#">Resource</Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                </Navbar.Collapse>

                <div className="hidden md:block">
                        <Link
                            href={route("register")}
                            as="button"
                            className="border-2 border-primary bg-white text-gray-800 px-4 py-1 rounded-full mr-4"
                        >
                            Sign In
                        </Link>

                        <Link
                            href={route("premiumPage")}
                            as="button"
                            className="bg-primary text-white px-4 py-1 rounded-full"
                        >
                            Pass the first time, guaranteed
                        </Link>
                </div>
            </div>
        </MegaMenu>
    );
}
