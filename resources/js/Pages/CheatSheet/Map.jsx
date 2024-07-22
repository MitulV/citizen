import CanadaMap from "@/Components/CanadaMap";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Map({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head title="Interactive Map" />

            {/* Main content */}
            <section className="container  px-20 py-8 bg-gray-50 rounded-3x mx-96">
                <h1 className="text-4xl font-bold mb-8 text-gray-600">
                    Interactive Map
                </h1>

                {/* Canada Map Component */}
                <CanadaMap />
            </section>
        </AuthenticatedLayout>
    );
}
