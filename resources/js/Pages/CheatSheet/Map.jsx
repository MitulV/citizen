import CanadaMap from "@/Components/CanadaMap";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Map({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head title="Interactive Map" />

            {/* Main content */}
            <section className="container mx-auto bg-gray-50 rounded-xl flex flex-col items-center justify-center sm:mx-10 md:mx-40 lg:mx-60 xl:mx-80 mt-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-600 text-center mt-10">
                    Interactive Map
                </h1>

                {/* Canada Map Component */}
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[40rem] mx-auto mt-9">
                    <CanadaMap />
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
