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

                <div className="flex items-center space-x-4 bg-primary hover:bg-primary text-white px-4 py-2 rounded-full">
                    <Dropdown
                        label={user.name}
                        placement="bottom"
                        inline
                        className="rounded-xl mt-2 border-none"
                    >
                        <Dropdown.Item className="text-stone-500 px-8 ">
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
