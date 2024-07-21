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
                width="337px"
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
                            <Accordion.Content>
                                <Link
                                    replace
                                    href={route("importantPeople")}
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    Important People
                                </Link>
                                <Link
                                    replace
                                    href={route("importantDates")}
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    Important Dates
                                </Link>
                                <Link
                                    replace
                                    href={route("govQuestions")}
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    Government Questions
                                </Link>
                                <Link
                                    replace
                                    href={route("map")}
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    Interactive Map
                                </Link>
                                <Link
                                    replace
                                    href={route("glossary")}
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    Glossary
                                </Link>
                                <Link
                                    replace
                                    href={route("faq")}
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    Frequently Asked Questions
                                </Link>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </Menu>
            </Sidebar>
        </>
    );
}
