import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

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
        <div className="bg-slate-50 rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg hover:shadow-gray-300 flex flex-col h-full">
            {/* Image */}
            <img
                src={image}
                alt="Photo"
                className="rounded-t-2xl w-full h-48 object-cover" // Fixed height for uniformity
            />

            {/* Lock Icon */}
            <div className="absolute top-2 right-2 z-20 bg-white rounded-xl p-1">
                {(!auth || !auth.subscription) && (
                    <FontAwesomeIcon
                        icon={faLock}
                        className="text-black text-sm"
                    />
                )}
            </div>

            {/* Content */}
            <div className="flex-1 px-5 py-4">
                {" "}
                {/* Flex-grow for equal height */}
                <h3 className="text-lg font-bold">{name}</h3>
                <h4 className="text-gray-800 text-lg font-semibold">{title}</h4>
                <p className="text-gray-500 text-base">{description}</p>
            </div>

            <div className="flex flex-col md:flex-row px-5 pb-5">
                {/* Questions Section */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <div className="flex flex-row items-center">
                        <div>
                            <h3 className="font-bold text-lg tracking-wide mb-1">
                                {questions}
                            </h3>
                            <h4 className="text-base font-normal text-gray-500">
                                Questions
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Mistakes Section */}
                <div className="w-full md:w-1/2">
                    <div className="flex flex-row items-center">
                        <div>
                            <h3 className="font-bold text-lg tracking-wide mb-1">
                                {mistakes} Mistakes
                            </h3>
                            <h4 className="text-base font-normal text-gray-500">
                                Allowed to pass
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
