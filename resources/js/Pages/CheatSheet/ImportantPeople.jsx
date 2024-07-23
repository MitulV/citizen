import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ImportantPeople({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head title="Important People" />

            {/* Main content */}
            <section className="container px-4 py-8 bg-slate-50 mx-auto sm:px-6 lg:px-8 lg:ml-10 rounded-3xl">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-600">
                    Important People
                </h1>
                <p className="text-lg text-gray-500 mt-4 mb-10">
                    Delve into the lives and legacies of influential figures who
                    have left an indelible mark on Canada’s vibrant history and
                    cultural identity, offering essential insights for those
                    embarking on their citizenship journey.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            John Buchan
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            John Buchan, the 1st Baron Tweedsmuir, was a popular
                            Governor General of Canada (1935-40). Immigrant
                            groups, he said, “should retain their individuality
                            and each make its contribution to the national
                            character.” Each could learn “from the other, and …
                            while they cherish their own special loyalties and
                            traditions, they cherish not less that new loyalty
                            and tradition which springs from their union”
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
            </section>
        </AuthenticatedLayout>
    );
}
