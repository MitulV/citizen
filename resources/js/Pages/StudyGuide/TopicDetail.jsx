export default function TopicDetail({ auth, topic }) {
    return (
        <>
            <div className="max-w-2xl mx-auto px-4 p-20">
                <div>
                    <p className="text-blue-400">All lesson</p>
                    <h1 className="text-3xl font-bold mb-4 text-gray-600">
                        Lesson 1
                    </h1>
                </div>
                <div className="mb-8">
                    <img
                        src="https://www.citizentest.ca/wp-content/uploads/2024/01/citizentest_chapter_image_Oath_of_citizenship-1.jpg"
                        className="w-full"
                    />
                </div>

                <div>
                    <p className="text-gray-600">
                        {" "}
                        <h1 className="text-2xl font-bold mb-4 text-gray-800">
                            Understanding the Oath
                        </h1>
                        embodying the collective identity of all Canadians,
                        rather than to artifacts like a constitution, a symbol
                        like a flag, or a geopolitical entity like a nation.
                        Within our{" "}
                    </p>
                </div>
            </div>
        </>
    );
}
