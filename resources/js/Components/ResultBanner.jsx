import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faArrowUpRightFromSquare,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function ResultBanner({ setIsBannerVisible }) {
    return (
        <section className="relative m-10 shadow-lg rounded-xl border-gray-700 p-8 overflow-hidden">
            {/* Right-top half-circle */}
            <div className="absolute top-0 right-0 h-[575px] w-[575px] bg-amber-200 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 h-[575px] w-[535px] bg-red-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
                <div className="text-right mr-3 overlay">
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="text-2xl z-10 cursor-pointer"
                        onClick={() => setIsBannerVisible(false)}
                    />
                </div>

                <div className="max-w-xl mx-auto text-center">
                    <h1 className="text-3xl md:text-3xl font-bold mb-4 text-gray-900">
                        Pass on Your First Attempt.
                        <span className="text-indigo-600">
                            <br /> Guaranteed.
                        </span>
                    </h1>
                    <p className="text-sm md:text-sm text-gray-500 mb-4">
                        Be fully prepared to ace your Canadian Citizenship Test.
                        Gain complete access to our comprehensive preparation
                        program.
                    </p>
                    <div className="container mx-auto px-4 py-2 md:py-4">
                        <div className="max-w-xl mx-auto">
                            <div className="text-left">
                                <h1 className="text-base md:text-lg font-bold mb-2 text-gray-900">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-lime-700 mr-4"
                                    />
                                    Featured Highlights
                                </h1>

                                <p className="text-sm md:text-base text-gray-600 mb-4 ml-8">
                                    Access questions from the official test. Use
                                    simulation tests, flashcards, and other
                                    essential tools to prepare.
                                </p>
                            </div>

                            <div className="text-left">
                                <h1 className="text-base md:text-lg font-bold mb-2 text-gray-900">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-lime-700 mr-4"
                                    />
                                    An Industry-Leading Success Rate
                                </h1>

                                <p className="text-sm md:text-base text-gray-600 mb-4 ml-8">
                                    More people fail than you'd expect. Start
                                    preparing with us today to pass on your
                                    first try.
                                </p>
                            </div>

                            <div className="text-left">
                                <h1 className="text-base md:text-lg font-bold mb-4 text-gray-900">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-lime-700 mr-4"
                                    />{" "}
                                    Trusted by Over 12,230 New Canadian Citizens
                                </h1>
                            </div>
                            <div className="container mx-auto px-4 mt-4 sm:mt-8 flex justify-center">
                                <button className="bg-primary text-white px-16 py-2 rounded-full shadow-xl">
                                    Unlock all questions{" "}
                                    <FontAwesomeIcon
                                        icon={faArrowUpRightFromSquare}
                                        className="text-white ml-2"
                                    />
                                </button>
                            </div>
                            <p className="text-xs md:text-sm mt-4 text-gray-600">
                                Opens in new window, your results won’t be lost
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
