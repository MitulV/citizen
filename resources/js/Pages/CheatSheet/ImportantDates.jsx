import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ImportantDates({ auth }) {
    return (
        <>
            {" "}
            <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
                <Head title="Important Dates" />
            </AuthenticatedLayout>
        </>
    );
}
