import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import LoginHeader from "@/Components/LoginHeader";
import Footer from "@/Components/Footer";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";
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
export default function ChapterTestPanel({ chapters, collapsed }) {
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
                        {chapters.map((chapter, index) => (
                            <Accordion.Panel key={chapter.id}>
                                <Accordion.Title>
                                    Chapter {index + 1}
                                </Accordion.Title>
                                <Accordion.Content>
                                    <div className="text-gray-800 text-start">
                                        {chapter.tests.map((test) => (
                                            <Link
                                                replace
                                                href={`/practice-tests/${
                                                    chapter.id
                                                }${
                                                    test.id ? `/${test.id}` : ""
                                                }`}
                                                key={test.id}
                                            >
                                                <div
                                                    className="p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                                    key={test.id}
                                                >
                                                    <button className="text-base text-gray-800 text-start">
                                                        {test.name}
                                                    </button>
                                                    <FontAwesomeIcon
                                                        icon={
                                                            test.is_completed_by_user
                                                                ? faCheck
                                                                : faTimes
                                                        }
                                                        className={
                                                            test.is_completed_by_user
                                                                ? "text-green-500"
                                                                : "text-red-500"
                                                        }
                                                    />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </Accordion.Content>
                            </Accordion.Panel>
                        ))}
                    </Accordion>
                </Menu>
            </Sidebar>
        </>
    );
}