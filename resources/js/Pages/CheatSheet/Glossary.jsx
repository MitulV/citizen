import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Glossary({ auth }) {
    return (
        <>
            {" "}
            <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
                <Head title="Glossary" />
            </AuthenticatedLayout>
        </>
    );
}
