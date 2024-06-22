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
    faCheck,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "flowbite-react";
export default function Authenticated({
    user,
    children,
    isChapterPanelVisible = true,
    chapterId,
    topicId,
}) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
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
            <LoginHeader user={user} />
            <div className="relative flex h-full">
                <Sidebar
                    collapsedWidth="0"
                    width="162px"
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
                                            <div className="p-4 bg-slate-50 flex justify-between items-start">
                                                <button className=" text-base ">
                                                    The Oath of Citizenship
                                                </button>
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    className="text-green-500 "
                                                />
                                            </div>
                                            <div className="p-4 bg-slate-50 mt-1 flex justify-between items-start">
                                                <button className="bg-slate-50  text-base text-gray-800 text-start">
                                                    A message to the new citizen
                                                </button>
                                                <FontAwesomeIcon
                                                    icon={faTimes}
                                                    className="text-red-500 "
                                                />
                                            </div>
                                        </div>
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
                             ? "left-64  ml-64"
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
