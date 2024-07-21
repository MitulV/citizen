import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Faq({ auth }) {
    return (
        <>
            {" "}
            <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
                <Head title="FAQ" />
            </AuthenticatedLayout>
        </>
    );
}
