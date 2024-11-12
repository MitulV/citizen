import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import LoginHeader from "@/Components/LoginHeader";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";
import {
    faBookOpen,
    faCube,
    faFileLines,
    faImage,
    faGem,
} from "@fortawesome/free-solid-svg-icons";
import StudyGuidePanel from "@/Components/SidebarPanel/StudyGuidePanel";
import ChapterTestPanel from "@/Components/SidebarPanel/ChapterTestPanel";
import FlashcardPanel from "@/Components/SidebarPanel/FlashcardPanel";
import CheatSheetPanel from "@/Components/SidebarPanel/CheatSheetPanel";

export default function AuthenticatedLayout({
    user,
    children,
    isChapterPanelVisible = false,
    chapterId,
    topicId,
    chapters,
}) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        const elements = document.querySelectorAll("li.css-1t8x7v1");
        elements.forEach((element) => {
            element.classList.remove("css-1t8x7v1");
        });

        if (window.innerWidth < 768) {
            setCollapsed(true); // Collapse for mobile screens
        } else {
            setCollapsed(false); // Expand for larger screens
        }
    }, []);

    const { url } = usePage();

    return (
        <div>
            <LoginHeader user={user} />
            <div className="flex h-full">
                <Sidebar
                    collapsedWidth="0"
                    width="210px"
                    collapsed={collapsed}
                    backgroundColor="rgb(254,117,62)"
                    className="fixed top-0 left-0 h-screen !overflow-hidden" // Sidebar stays full-height and fixed on the screen
                >
                    <Menu className="h-full !overflow-hidden">
                        <MenuItem
                            className="w-full  h-full m-2 mt-10"
                            component="span"
                        >
                            <Link href={route("dashboard")}>
                                <button
                                    className={`rounded-full w-44 px-4 py-2 flex items-center ${
                                        url.startsWith("/guide")
                                            ? "bg-white text-primary"
                                            : "text-white hover:bg-white hover:text-primary"
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faBookOpen}
                                        className="mr-4"
                                    />
                                    Study Guide
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2  " component="span">
                            <Link href={route("simulation.info")}>
                                <button
                                    className={`rounded-full w-44 px-4 py-2 flex items-center ${
                                        url.startsWith("/simulation")
                                            ? "bg-white text-primary"
                                            : "text-white hover:bg-white hover:text-primary"
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faCube}
                                        className="mr-4"
                                    />
                                    Simulations
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2" component="span">
                            <Link href={route("practice.test")}>
                                <button
                                    className={`rounded-full w-44 px-4 py-2 flex items-center ${
                                        url.startsWith("/practice")
                                            ? "bg-white text-primary"
                                            : "text-white hover:bg-white hover:text-primary"
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faFileLines}
                                        className="mr-4"
                                    />
                                    Chapter Tests
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2" component="span">
                            <Link href={route("flashcard")}>
                                <button
                                    className={`rounded-full w-44 px-4 py-2 flex items-center ${
                                        url.startsWith("/flashcard")
                                            ? "bg-white text-primary"
                                            : "text-white hover:bg-white hover:text-primary"
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faImage}
                                        className="mr-4"
                                    />
                                    Flashcards
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2" component="span">
                            <Link href={route("cheatSheets")}>
                                <button
                                    className={`rounded-full w-44 px-4 py-2 flex items-center ${
                                        url.startsWith("/cheat-sheets")
                                            ? "bg-white text-primary"
                                            : "text-white hover:bg-white hover:text-primary"
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faGem}
                                        className="mr-4"
                                    />
                                    Cheat Sheets
                                </button>
                            </Link>
                        </MenuItem>
                    </Menu>
                </Sidebar>
                {isChapterPanelVisible && url.startsWith("/guide") && (
                    <StudyGuidePanel
                        chapters={chapters}
                        collapsed={collapsed}
                    />
                )}

                {isChapterPanelVisible && url.startsWith("/practice-tests") && (
                    <ChapterTestPanel
                        chapters={chapters}
                        collapsed={collapsed}
                    />
                )}

                {isChapterPanelVisible && url.startsWith("/flashcards") && (
                    <FlashcardPanel chapters={chapters} collapsed={collapsed} />
                )}

                {isChapterPanelVisible && url.startsWith("/cheat-sheets") && (
                    <CheatSheetPanel collapsed={collapsed} />
                )}

                <button
                    onClick={toggleSidebar}
                    className={`absolute top-24 z-10 ${
                        collapsed
                            ? "left-0 ml-0"
                            : isChapterPanelVisible
                            ? "left-60 ml-64"
                            : "left-52 ml-0"
                    } transform rotate-180 p-1 w-8 h-8 bg-white rounded-l-full transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-lg`}
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
                <main className="flex-1 bg-slate-100">{children}</main>
            </div>
        </div>
    );
}
