export default function HomeChapterCard({
    image,
    name,
    title,
    description,
    questions,
    mistakes,
    auth,
}) {
    return (
        <div className="continer mx-auto bg-slate-50 rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg hover:shadow-gray-300 flex flex-col h-full">
            {/* Image */}
            <img
                src={image}
                alt="Photo"
                className="rounded-t-2xl w-full h-48 object-cover" // Fixed height for uniformity
            />

            {/* Lock Icon */}
            <div className="absolute top-2 right-2 z-20 bg-white rounded-2xl px-1 py-1">
                {(!auth || !auth.subscription) && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#5f6368"
                    >
                        <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                    </svg>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 px-5 py-4">
                {" "}
                {/* Flex-grow for equal height */}
                <div className="flex flex-wrap items-center">
                    <h3 className="text-base font-bold">
                        {name} - {title}
                    </h3>
                </div>
                <p className="text-gray-500 text-base">{description}</p>
            </div>

            <div className="flex flex-col md:flex-row px-5 pb-5">
                {/* Questions Section */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <div className="flex flex-row items-center">
                        <div>
                            <p className="font-bold text-lg tracking-wide mb-1">
                                {questions}
                            </p>
                            <p className="text-base font-normal text-gray-500">
                                Questions
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mistakes Section */}
                <div className="w-full md:w-1/2">
                    <div className="flex flex-row items-center">
                        <div>
                            <p className="font-bold text-lg tracking-wide mb-1">
                                {mistakes} Mistakes
                            </p>
                            <p className="text-base font-normal text-gray-500">
                                Allowed to pass
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
