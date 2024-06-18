import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";
import { Button, Dropdown, MegaMenu, Navbar } from "flowbite-react";

export default function Header() {
    return (
        <MegaMenu>
            <div className="container flex justify-between items-center px-2 py-2">
                <div className="flex items-center">
                    <Link href={route("homePage")}>
                        <span className="text-2xl font-bold leading-6 text-left">
                            <img src="/images/logo.png" alt="Logo" className="h-8" />
                        </span>
                    </Link>
                </div>

                <Navbar.Toggle className="bg-primary hover:bg-primary text-white rounded-full border-none" />
               
                <div className="flex items-center space-x-4">
                    <Button>
                        <FontAwesomeIcon icon={faCircleNotch} spin />
                    </Button>
                    <Dropdown
                        label="Profile Name"
                        inline={true}
                        className="bg-primary hover:bg-primary text-white rounded-full border-none"
                    >
                        <Dropdown.Item>
                            <Link href={route("homePage")}>View Profile</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link href={route("homePage")}>Settings</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link href={route("homePage")}>Logout</Link>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </MegaMenu>
    );
}
