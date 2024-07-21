import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function GovQuestions({ auth }) {
    return (
        <>
            {" "}
            <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
                <Head title="Government Questions" />
            </AuthenticatedLayout>
        </>
    );
}
