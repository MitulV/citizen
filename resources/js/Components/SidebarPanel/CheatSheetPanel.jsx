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
                                    href=""
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    <button className="text-base text-gray-800 text-start">
                                        Pass Probability
                                    </button>
                                </Link>

                                <Link
                                    replace
                                    href=""
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    <button className="text-base text-gray-800 text-start">
                                        Important People
                                    </button>
                                </Link>
                                <Link
                                    replace
                                    href=""
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    <button className="text-base text-gray-800 text-start">
                                        Important Dates
                                    </button>
                                </Link>
                                <Link
                                    replace
                                    href=""
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    <button className="text-base text-gray-800 text-start">
                                        Government Questions
                                    </button>
                                </Link>
                                <Link
                                    replace
                                    href=""
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    <button className="text-base text-gray-800 text-start">
                                        Interactive Map
                                    </button>
                                </Link>
                                <Link
                                    replace
                                    href=""
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    <button className="text-base text-gray-800 text-start">
                                        Glossary
                                    </button>
                                </Link>
                                <Link
                                    replace
                                    href=""
                                    className="text-gray-800 text-start p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                >
                                    <button className="text-base text-gray-800 text-start">
                                        Frequently Asked Questions
                                    </button>
                                </Link>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </Menu>
            </Sidebar>
        </>
    );
}
