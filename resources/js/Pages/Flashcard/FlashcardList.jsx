import { Link } from "@inertiajs/react";
import TopicDetail from "./FlashcardDetail";

export default function FlashcardList({ auth, chapters }) {
    return (
        <>
            <div>
                {chapters.map((chapter) => (
                    <div key={chapter.id}>
                        <h2>{chapter.name}</h2>
                        <ul>
                            {chapter.topics.map((topic) => (
                                <>
                                    <TopicDetail topic={topic} />
                                    <li key={topic.id}>
                                        <Link
                                            href={route("topicList", {
                                                chapterId: chapter.id,
                                                topicId: topic.id,
                                            })}
                                        >
                                            {topic.name}
                                        </Link>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}
