import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function GovQuestions({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head title="Government Questions" />

            {/* Main content */}
            <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:mx-8 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 bg-gray-50 rounded-3xl">
                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold  text-gray-600 py-4 sm:py-2 md:py-4 lg:py-4 xl:py-4 ">
                    Government Questions
                </h1>

                {/* Subheading and paragraph */}
                <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold py-4  text-gray-600">
                        Know Your Government
                    </h2>
                    <p className="text-lg py-4 text-gray-500 ">
                        During your official Canadian Citizenship Test, you
                        might be asked questions about the Canadian government
                        on a federal, provincial/territorial, and/or municipal
                        level. Please make a note of all the answers below.
                    </p>
                </div>

                {/* Federal Government Table */}
                <div className="mb-6 ">
                    <h2 className="text-3xl  font-semibold mb-4 text-gray-600">
                        Federal Government
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4  border border-black text-left w-1/2">
                                        Reference Questions
                                    </th>
                                    <th className="py-4  px-4 border border-black text-left w-1/2">
                                        Answer
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4  px-4 border border-black">
                                        Head of State:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        The Sovereign (His Majesty King Charles
                                        III)
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The name of representative of the King
                                        of Canada, the Governor General:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Mary Simon
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The Head of Government, the Prime
                                        Minister:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Justin Trudeau
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The name of political party in power:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Liberal Party of Canada
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the Leader of the
                                        Opposition:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Pierre Poilievre
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the party representing His
                                        Majesty’s Loyal Opposition:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Conservative Party of Canada
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The names of the other opposition
                                        parties and leaders:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Find out
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        Your Members of Parliament (MP) in
                                        Ottawa:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Find out by typing your postal code
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        Your federal electoral district:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Find out by typing your postal code
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Text Box with Dropdown */}
                <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
                    <h2 className="text-3xl  font-semibold mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 text-gray-600">
                        Interactive Text Box
                    </h2>
                </div>

                {/* Additional Table */}
                <div>
                    <h2 className="text-3xl font-semibold mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 text-gray-600">
                        Additional Information
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Reference Questions
                                    </th>
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Answer
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the municipality where I
                                        live is:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Only you can know this one.
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the head of the municipal
                                        government (mayor or reeve) is:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Find out for cities, otherwise, call
                                        your local city hall.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
