import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import LoginHeader from "@/Components/LoginHeader";
import Footer from "@/Components/Footer";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookOpen,
    faCube,
    faFileLines,
    faImage,
    faGem,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "flowbite-react";
import {
    faCheck,
    faTimes,
    faClock,
    faRedo,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
export default function Authenticated({
    user,
    children,
    isChapterPanelVisible = true,
    chapterId,
    topicId,
}) {
    const [collapsed, setCollapsed] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false); // State for first dropdown
    const [dropdownOpen2, setDropdownOpen2] = useState(false); // State for second dropdown

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const toggleDropdown1 = () => {
        setDropdownOpen1(!dropdownOpen1);
    };

    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
    };

    const closeDropdown1 = () => {
        setDropdownOpen1(false);
    };

    const closeDropdown2 = () => {
        setDropdownOpen2(false);
    };

    useEffect(() => {
        // Select all li elements with the class css-1t8x7v1 and remove that class
        const elements = document.querySelectorAll("li.css-1t8x7v1");
        elements.forEach((element) => {
            element.classList.remove("css-1t8x7v1");
        });
    }, []); // Empty dependency array means this runs once after the initial render

    return (
        <div>
            <LoginHeader />
            <div className="relative flex h-full">
                <Sidebar
                    collapsedWidth="0"
                    width="177px"
                    collapsed={collapsed}
                    backgroundColor="rgb(254,117,62)"
                >
                    <Menu>
                        <MenuItem
                            className="w-full m-2 mt-10"
                            component="span"
                            style={{
                                margin: "10px 0 20px 0",
                                color: "black",
                            }}
                        >
                            <Link
                                href={route("dashboard")}
                                className="no-underline"
                            >
                                <button className="hover:bg-white hover:text-primary text-white rounded-full w-40 px-4 py-2 no-hover">
                                    <FontAwesomeIcon
                                        icon={faBookOpen}
                                        className="mr-2"
                                    />
                                    Study Guide
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2" component="span">
                            <Link href={route("simulation.test")} className="">
                                <button className="hover:bg-white hover:text-primary text-white rounded-full w-40 px-4 py-2 no-hover">
                                    <FontAwesomeIcon
                                        icon={faCube}
                                        className="mr-2"
                                    />
                                    Simulations
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2" component="span">
                            <Link
                                href={route("practice.test")}
                                className="no-underline"
                            >
                                <button className="hover:bg-white hover:text-primary text-white rounded-full w-40 px-4 py-2 no-hover">
                                    <FontAwesomeIcon
                                        icon={faFileLines}
                                        className="mr-2"
                                    />
                                    Chapter Tests
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2" component="span">
                            <Link
                                href={route("flashcard")}
                                className="no-underline"
                            >
                                <button className="hover:bg-white hover:text-primary text-white rounded-full w-40 px-4 py-2 no-hover">
                                    <FontAwesomeIcon
                                        icon={faImage}
                                        className="mr-2"
                                    />
                                    Flashcards
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2" component="span">
                            <Link
                                href={route("dashboard")}
                                className="no-underline"
                            >
                                <button className="hover:bg-white hover:text-primary text-white rounded-full w-40 px-4 py-2 no-hover">
                                    <FontAwesomeIcon
                                        icon={faGem}
                                        className="mr-2"
                                    />
                                    Cheat Sheets
                                </button>
                            </Link>
                        </MenuItem>
                    </Menu>
                </Sidebar>
                {isChapterPanelVisible && (
                    <Sidebar
                        collapsedWidth="0"
                        width="350px"
                        collapsed={collapsed}
                        backgroundColor="rgb(255,255,255)"
                    >
                        <Menu
                            menuItemStyles={{
                                button: {
                                    [`&.active`]: {
                                        backgroundColor: "#13395e",
                                        color: "#b6c8d9",
                                    },
                                },
                            }}
                        >
                            <Accordion>
                                <Accordion.Panel>
                                    <Accordion.Title>Chapter 1</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="text-gray-800 text-start">
                                            <div className="p-4 bg-slate-50 ">
                                                <button className=" text-base ">
                                                    The Oath of Citizenship
                                                </button>
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    className="text-green-500 "
                                                />
                                            </div>
                                            <div className="p-4 bg-slate-50 mt-1 ">
                                                <button className="bg-slate-50  text-base text-gray-800 text-start">
                                                    A message to the new citizen
                                                </button>
                                                <FontAwesomeIcon
                                                    icon={faTimes}
                                                    className="text-red-500 "
                                                />
                                            </div>
                                            <div className="p-4 bg-slate-50 mt-1">
                                                <button className="bg-slate-50  text-base text-gray-800 text-start">
                                                    About the citizen
                                                </button>
                                            </div>
                                            <div className="p-4 bg-slate-50 mt-1 ">
                                                <button className="bg-slate-50 text-base text-gray-800 text-start">
                                                    Transition to the crown
                                                </button>
                                            </div>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                        Is there a Figma file available?
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            Flowbite is first conceptualized and
                                            designed using the Figma software so
                                            everything you see in the library
                                            has a design equivalent in our Figma
                                            file.
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Check out the
                                            <a
                                                href="https://flowbite.com/figma/"
                                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                                            >
                                                Figma design system
                                            </a>
                                            based on the utility classes from
                                            Tailwind CSS and components from
                                            Flowbite.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                        What are the differences between
                                        Flowbite and Tailwind UI?
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            The main difference is that the core
                                            components from Flowbite are open
                                            source under the MIT license,
                                            whereas Tailwind UI is a paid
                                            product. Another difference is that
                                            Flowbite relies on smaller and
                                            standalone components, whereas
                                            Tailwind UI offers sections of
                                            pages.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            However, we actually recommend using
                                            both Flowbite, Flowbite Pro, and
                                            even Tailwind UI as there is no
                                            technical reason stopping you from
                                            using the best of two worlds.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            Learn more about these technologies:
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                            <li>
                                                <a
                                                    href="https://flowbite.com/pro/"
                                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                >
                                                    Flowbite Pro
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://tailwindui.com/"
                                                    rel="nofollow"
                                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                >
                                                    Tailwind UI
                                                </a>
                                            </li>
                                        </ul>
                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>
                        </Menu>
                    </Sidebar>
                )}

                <button
                    onClick={toggleSidebar}
                    className={`absolute z-10 top-5 
                     ${
                         collapsed
                             ? "left-0 ml-0"
                             : isChapterPanelVisible
                             ? "left-64  ml-44"
                             : "left-44 ml-0"
                     } 
                      transform rotate-180 p-1 w-8 h-8 bg-white rounded-l-full transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-lg`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-left"
                    >
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
}
