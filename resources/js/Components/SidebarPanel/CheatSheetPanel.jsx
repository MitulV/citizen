import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import LoginHeader from "@/Components/LoginHeader";
import Footer from "@/Components/Footer";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "flowbite-react";
export default function CheatSheetPanel({ collapsed }) {
    return (
        <>
            <Sidebar
                collapsedWidth="0"
                width="285px"
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
                    <Accordion className="border-0">
                        <Accordion.Panel>
                            <Accordion.Content>
                                <Link
                                    replace
                                    href={route("importantPeople")}
                                    className={`text-gray-800 text-start p-4 mt-1 flex justify-between items-start ${
                                        route().current("importantPeople")
                                            ? "bg-slate-100"
                                            : ""
                                    }`}
                                >
                                    Important People
                                </Link>
                                <hr></hr>
                                <Link
                                    replace
                                    href={route("importantDates")}
                                    className={`text-gray-800 text-start p-4 mt-1 flex justify-between items-start ${
                                        route().current("importantDates")
                                            ? "bg-slate-100"
                                            : ""
                                    }`}
                                >
                                    Important Dates
                                </Link>
                                <hr></hr>
                                <Link
                                    replace
                                    href={route("govQuestions")}
                                    className={`text-gray-800 text-start p-4 mt-1 flex justify-between items-start ${
                                        route().current("govQuestions")
                                            ? "bg-slate-100"
                                            : ""
                                    }`}
                                >
                                    Government Questions
                                </Link>
                                <hr></hr>
                                <Link
                                    replace
                                    href={route("map")}
                                    className={`text-gray-800 text-start p-4 mt-1 flex justify-between items-start ${
                                        route().current("map")
                                            ? "bg-slate-100"
                                            : ""
                                    }`}
                                >
                                    Interactive Map
                                </Link>
                                <hr></hr>
                                <Link
                                    replace
                                    href={route("glossary")}
                                    className={`text-gray-800 text-start p-4 mt-1 flex justify-between items-start ${
                                        route().current("glossary")
                                            ? "bg-slate-100"
                                            : ""
                                    }`}
                                >
                                    Glossary
                                </Link>
                                <hr></hr>
                                <Link
                                    replace
                                    href={route("faq")}
                                    className={`text-gray-800 text-start p-4 mt-1 flex justify-between items-start ${
                                        route().current("faq")
                                            ? "bg-slate-100"
                                            : ""
                                    }`}
                                >
                                    Frequently Asked Questions
                                </Link>
                                <hr></hr>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </Menu>
            </Sidebar>
        </>
    );
}
