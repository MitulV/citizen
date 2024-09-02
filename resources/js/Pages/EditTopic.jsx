import React, { useState } from "react";
import MyCKEditor from "@/Components/MyCKEditor";
import { Link } from "@inertiajs/react";

export default function EditTopic({ topicId, chapterId, existingContent }) {
    const [content, setContent] = useState(existingContent);

    const handleEditorChange = (data) => {
        setContent(data);
    };

    const saveDetails = () => {
        console.log("Editor Data Saved:", editorData);
        // Implement save logic here
    };
    return (
        <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
            <MyCKEditor value={content} onChange={handleEditorChange} />
            <Link
                href={route("createTopic.update", {
                    topicId,
                    chapterId,
                    content,
                })}
                method="post"
                as="button"
                className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Update Details
            </Link>
        </div>
    );
}