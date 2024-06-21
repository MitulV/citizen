import { useState } from "react";
import { Link } from "@inertiajs/react";
import LoginHeader from "@/Components/LoginHeader";
import Footer from "@/Components/Footer";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function Authenticated({ user, header, children }) {
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div>
            <LoginHeader />
            <div className="relative flex h-full">
                <Sidebar collapsedWidth="0" collapsed={collapsed}>
                    <Menu>
                        <MenuItem
                            component={<Link href={route("dashboard")} />}
                        >
                            Study Guide
                        </MenuItem>
                        <MenuItem
                            component={<Link href={route("simulation.test")} />}
                        >
                            Simulations
                        </MenuItem>

                        <MenuItem
                            component={<Link href={route("practice.test")} />}
                        >
                            Chapter Tests
                        </MenuItem>

                        <MenuItem
                            component={<Link href={route("flashcard")} />}
                        >
                            Flashcards
                        </MenuItem>

                        <MenuItem
                            component={<Link href={route("dashboard")} />}
                        >
                            Cheat Sheets
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
