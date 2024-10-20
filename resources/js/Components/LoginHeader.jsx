import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faBars,
    faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { Button, Dropdown, MegaMenu, Navbar } from "flowbite-react";

export default function LoginHeader({ user }) {
    const [isMobile, setIsMobile] = useState(false);

    // Set `isMobile` based on the screen width
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // sm breakpoint (640px)
        };

        // Initial check
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <MegaMenu>
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
                <div className="flex items-center">
                    <Link href={route("homePage")}>
                        <span className="text-2xl font-bold leading-6 text-left">
                            <img
                                src="/images/logo.svg"
                                alt="Logo"
                                className="h-[1.60rem] w-40 ml-8"
                            />
                        </span>
                    </Link>
                </div>

                <div className="flex items-center bg-primary hover:bg-primary text-white px-4 py-2 rounded-full">
                    <Dropdown
                        label={
                            <>
                                {/* Show FontAwesome bars icon on mobile */}
                                <span className="sm:hidden">
                                    <FontAwesomeIcon icon={faBars} />
                                </span>

                                {/* Show user name on larger screens */}
                                <span className="hidden sm:inline">
                                    {user.name}
                                </span>
                            </>
                        }
                        placement="bottom"
                        inline
                        className="rounded-xl mt-2 border-none"
                        arrowIcon={!isMobile} // Show arrow on larger screens, hide on mobile
                    >
                        <Dropdown.Item className="text-stone-500 px-8">
                            <Link href={route("dashboard")}>Dashboard</Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="text-stone-500 px-8 ">
                            <Link href={route("profile.billing")}>Billing</Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="text-stone-500 px-8 ">
                            <Link href={route("profile.edit")}>Profile</Link>
                        </Dropdown.Item>

                        <Dropdown.Item className="text-stone-500 px-8 ">
                            <Link
                                as="span"
                                href={route("logout")}
                                method="post"
                            >
                                Log out
                            </Link>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </MegaMenu>
    );
}
