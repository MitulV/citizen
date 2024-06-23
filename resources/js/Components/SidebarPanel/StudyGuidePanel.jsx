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
export default function StudyGuidePanel({ chapters, collapsed }) {
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
                                        {chapter.topics.map((topic) => (
                                            <Link
                                                replace
                                                href={`/guide/${chapter.id}${
                                                    topic.id
                                                        ? `/${topic.id}`
                                                        : ""
                                                }`}
                                                key={topic.id}
                                            >
                                                <div
                                                    className="p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                                    key={topic.id}
                                                >
                                                    <button className="text-base text-gray-800 text-start">
                                                        {topic.name}
                                                    </button>
                                                    <FontAwesomeIcon
                                                        icon={
                                                            topic.is_completed_by_user
                                                                ? faCheck
                                                                : faTimes
                                                        }
                                                        className={
                                                            topic.is_completed_by_user
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
