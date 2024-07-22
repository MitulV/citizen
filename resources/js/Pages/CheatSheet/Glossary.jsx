import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Glossary({ auth }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
                <Head title="Glossary" />

                {/* Main content */}
                <section className="container max-w-screen-lg px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:mx-auto lg:mx-auto xl:mx-60 bg-slate-50 rounded-3xl">
                    <h1 className="text-4xl font-bold mb-8 text-gray-600 text-center">
                        Glossary
                    </h1>

                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                                Term {index + 1}
                            </h2>
                            <p className="text-lg text-gray-500">
                                This is the definition of term {index + 1}. It
                                explains the meaning of the term in a clear and
                                concise manner. It explains the meaning of the
                                term in a clear and concise manner.
                            </p>
                        </div>
                    ))}
                </section>
            </AuthenticatedLayout>
        </>
    );
}
