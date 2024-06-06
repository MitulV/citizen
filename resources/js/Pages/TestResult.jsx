import React from "react";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faTimes,
    faClock,
    faRedo,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const RadialProgress = ({ percentage }) => {
    const radius = 80;
    const stroke = 10;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative h-100 h-100">
            <svg height={radius * 2} width={radius * 2}>
                <circle
                    stroke="gray"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset: 0 }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="green"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-black text-lg font-bold">
                {percentage}%
            </div>
        </div>
    );
};

export default function TestStart() {
    return (
        <>
            <Head title="Premium" />
            <Header />
            <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 md:p-10 bg-slate-50">
                {/* Left Side (spans 12 columns on small screens, 4 columns on large screens) */}
                <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col space-y-4 border rounded-xl bg-white p-6 md:p-10">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">How to Pass the first time</h1>
                    <ul className="space-y-2 text-gray-600 mt-4">
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
                            Access to Over 600+ Test Questions                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
                            Practice tests for each chapter
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
                            Unlimited exam simulation runs                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
                            Tailored study plan
                        </li>
                    </ul>
                    <div className="flex flex-col items-center mt-4">
                    <img
                            src="/images/testresult5.png"
                            alt="Placeholder"
                            className="w-60 h-80 gap-0 rounded-tl-[24px] rounded-tr-none rounded-br-none rounded-bl-none"
                        />                        <button className="bg-primary text-white px-6 py-2 rounded-full ">Pass with premium guaranteed </button>
                        <h2 className="text-base  mt-4">100% Money Back Guarantee</h2>
                    </div>
                </div>

                {/* Right Side (spans 12 columns on small screens, 8 columns on large screens) */}
                <div className="order-1 md:h-64 lg:order-2 lg:col-span-8 flex flex-col space-y-4 border rounded-xl bg-white p-6 md:p-10">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* Progress circle */}
                        <RadialProgress percentage={85.71} /> {/* Using the RadialProgress component */}
                        {/* Stats */}
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold">Great. You passed!</h1>
                            <p className="text-gray-600">There are more Practice questions left to go , Unlock 600+ practice questions today</p>
                            <button className="bg-primary text-white mt-4 px-6 py-2 rounded-full">Review</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
