import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";
import { Button, MegaMenu, Navbar } from "flowbite-react";

export default function Header() {
    return (
        <MegaMenu>
            <div className="container flex justify-between items-center pl-16 pr-0 py-2">
                <div className="flex items-center">
                    <Link href={route("homePage")}>
                        <span className="text-2xl font-bold leading-6 text-left">
                            <img src="/images/logo.png" className="w-40 h-6" alt="Logo" />
                        </span>
                    </Link>
                </div>

                <Navbar.Toggle className="bg-primary hover:bg-primary text-white rounded-full border-none" />
                <Navbar.Collapse>
                    <Navbar.Link>
                        <MegaMenu.Dropdown toggle={<>Help</>}>
                            <ul>
                                <div className="space-y-4 p-4">
                                    <li>
                                        <Link href="#" className="hover:text-primary">
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-primary">
                                            FAQ
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </MegaMenu.Dropdown>
                    </Navbar.Link>
                    <Navbar.Link>
                        <MegaMenu.Dropdown toggle={<>Resources</>}>
                            <ul>
                                <div className="space-y-4 p-4">
                                    <li>
                                        <Link href="#" className="hover:text-primary">
                                            Test Locations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-primary">
                                            Driving Tips
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </MegaMenu.Dropdown>
                    </Navbar.Link>
                    <Navbar.Link href="#">Reviews</Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                </Navbar.Collapse>

                <div className="hidden md:flex items-center space-x-4">
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
