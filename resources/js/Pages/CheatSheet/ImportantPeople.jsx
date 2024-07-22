import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ImportantPeople({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head title="Important People" />

            {/* Main content */}
            <section className="container px-4 py-8 bg-slate-50 mx-auto sm:mx-0 md:mx-60 rounded-3xl">
                <h1 className="text-4xl font-bold mb-4 text-gray-600 sm:mx-0 md:mx-10">
                    Important People
                </h1>
                <p className="text-lg text-gray-500  sm:mx-0 md:mx-10 mt-4 mb-10">
                    Delve into the lives and legacies of influential figures who
                    have left an indelible mark on Canada’s vibrant history and
                    cultural identity, offering essential insights for those
                    embarking on their citizenship journey.
                </p>

                <div className="flex items-center justify-center md:mx-10">
                    {/* Left column with image */}
                    <div className="flex-none justify-center py-10">
                        <img
                            src="/images/import.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-64 mt-8 md:mt-0 ml-10">
                        <h1 className="text-3xl font-bold mb-4 text-cyan-600">
                            John Buchan
                        </h1>
                        <p className="text-lg text-gray-500">
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
