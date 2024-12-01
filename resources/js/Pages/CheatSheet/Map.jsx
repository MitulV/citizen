import CanadaMap from "@/Components/CanadaMap";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const MapSVG = () => {
    return (
        <div>
            <img src="/images/Political_map_of_Canada.svg" alt="Map" />
        </div>
    );
};

export default function Map({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head>
                <title>
                    Interactive Map - Canadian Citizenship Test -
                    CitizenTestPrep
                </title>
                <meta
                    name="description"
                    content="Utilize our Interactive Map to visualize key Canadian locations relevant to the citizenship test!"
                />
            </Head>

            {/* Main content */}
            <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 rounded-3xl">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-600">
                    Interactive Map
                </h1>
                <p className="text-lg text-gray-500 mt-4 mb-10"></p>

                {/* Canada Map Component */}
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[40rem] mx-auto mt-9">
                    <MapSVG />
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
