import { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import LoginHeader from "@/Components/LoginHeader";
import Footer from "@/Components/Footer";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen,faCube,faFileLines,faImage,faGem } from "@fortawesome/free-solid-svg-icons"; // Ensure the correct icon is imported

export default function Authenticated({ user, header, children }) {
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const styleRef=useRef(null);
    useEffect(()=>{
        if(styleRef.current){
            styleRef.current.classList.remove('css-1t8x7v1');
        }
    })

    return (
        <div>
            <LoginHeader />
            <div className="relative flex h-full ">
                <Sidebar ref={styleRef}
                    collapsedWidth="0"
                    collapsed={collapsed}
                    backgroundColor="rgb(254,117,62)"
                >
                    <Menu>
                        <MenuItem className="w-full m-2 mt-10">
                            <Link href={route("dashboard")} className="no-underline">
                                <button className="hover:bg-white hover:text-primary text-white rounded-full w-40 px-4 py-2 no-hover">
                                    <FontAwesomeIcon icon={faBookOpen} className="mr-2" /> Study Guide
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2">
                            <Link href={route("simulation.test")} className="">
                                <button className="hover:bg-white hover:text-primary text-white rounded-full w-40 px-4 py-2 no-hover">
                                <FontAwesomeIcon icon={faCube}  className="mr-2"/>  Simulations
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2">
                            <Link href={route("practice.test")} className="no-underline">
                                <button className="hover:bg-white hover:text-primary text-white rounded-full w-40 px-4 py-2 no-hover">
                                <FontAwesomeIcon icon={faFileLines} className="mr-2" />  Chapter Tests
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2">
                            <Link href={route("flashcard")} className="no-underline">
                                <button className="hover:bg-white hover:text-primary text-white rounded-full w-40 px-4 py-2 no-hover">
                                <FontAwesomeIcon icon={faImage} className="mr-2"/> Flashcards
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2">
                            <Link href={route("dashboard")} className="no-underline">
                                <button className="hover:bg-white hover:text-primary text-white rounded-full w-40 px-4 py-2 no-hover">
                                <FontAwesomeIcon icon={faGem} className="mr-2"/> Cheat Sheets
                                </button>
                            </Link>
                        </MenuItem>
                    </Menu>
                </Sidebar>
                <button
                    onClick={toggleSidebar}
                    className={`absolute z-10 top-5 
                      ${collapsed ? "left-0 ml-0" : "left-56 ml-6"} 
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
