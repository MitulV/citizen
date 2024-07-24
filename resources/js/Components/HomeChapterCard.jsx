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
        <>
            <div className="bg-slate-50 rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg hover:shadow-gray-300 max-w-sm">
                <img src={image} alt="Photo 1" className="max-w-sm" />
                <div className="absolute top-2 right-2 z-20 bg-white rounded-xl">
                    {(!auth || !auth.subscription) && (
                        <FontAwesomeIcon
                            icon={faLock}
                            className="text-black text-sm"
                        />
                    )}
                </div>
                <h1 className="px-5 py-4 text-lg font-bold">{name}</h1>
                <h2 className="px-5 text-gray-800 text-lg font-semibold">
                    {title}
                </h2>
                <p className="text-gray-500 px-5 text-base">{description}</p>
                <div className="container mx-auto px-4 flex flex-col md:flex-row">
                    <div className="md:w-1/2 w-full mb-4 md:mb-0 py-6">
                        <div className="flex flex-row items-center">
                            <div>
                                <h1 className="font-bold text-lg tracking-wide mb-1">
                                    {questions}
                                </h1>
                                <p className="text-base font-normal text-gray-500">
                                    Questions
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full py-6">
                        <div className="flex flex-row items-center">
                            <div>
                                <h1 className="font-bold text-lg tracking-wide mb-1">
                                    {mistakes} Mistakes
                                </h1>
                                <p className="text-base font-normal text-gray-500">
                                    Allowed to pass
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
