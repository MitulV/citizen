import React from "react";
import {
    ClassicEditor,
    Context,
    Alignment,
    Bold,
    Essentials,
    Italic,
    Paragraph,
    Table,
    TableToolbar,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResizeEditing,
    ImageResizeHandles,
    ImageResize,
    ImageInsertViaUrl,
    AutoImage,
    Heading,
    ContextWatchdog,
    List,
} from "ckeditor5";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";

// Ensure you have the necessary CSS for CKEditor
import "ckeditor5/ckeditor5.css";

const EditorShow = ({ value, onChange }) => {
    return (
        <CKEditorContext context={Context} contextWatchdog={ContextWatchdog}>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    plugins: [
                        Essentials,
                        Bold,
                        Italic,
                        Paragraph,
                        Alignment,
                        Table,
                        TableToolbar,
                        Image,
                        ImageToolbar,
                        ImageCaption,
                        ImageStyle,
                        ImageInsertViaUrl,
                        ImageResizeEditing,
                        ImageResizeHandles,
                        ImageResize,
                        AutoImage,
                        Heading,
                        List,
                    ],

                    heading: {
                        options: [
                            {
                                model: "paragraph",
                                title: "Paragraph",
                                class: "ck-heading_paragraph",
                            },
                            {
                                model: "heading1",
                                view: "h1",
                                title: "Heading 1",
                                class: "ck-heading_heading1",
                            },
                            {
                                model: "heading2",
                                view: "h2",
                                title: "Heading 2",
                                class: "ck-heading_heading2",
                            },
                            {
                                model: "heading3",
                                view: "h3",
                                title: "Heading 3",
                                class: "ck-heading_heading3",
                            },
                        ],
                    },
                }}
                data={value}
                onReady={(editor) => {
                    editor.enableReadOnlyMode("readonly-mode");
                }}
            />
        </CKEditorContext>
    );
};

export default EditorShow;
