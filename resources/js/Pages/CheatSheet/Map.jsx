import CanadaMap from "@/Components/CanadaMap";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Map({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head title="Interactive Map" />

            {/* Main content */}
            <section className="container mx-auto px-4 py-8 sm:px-10  md:px-10 lg:px-16 xl:px-20 bg-gray-50 rounded-xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-600">
                    Interactive Map
                </h1>

                {/* Canada Map Component */}
                <CanadaMap />
            </section>
        </AuthenticatedLayout>
    );
}
