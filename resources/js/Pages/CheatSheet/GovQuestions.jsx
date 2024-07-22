import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function GovQuestions({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head title="Government Questions" />

            {/* Main content */}
            <section className="container mx-auto px-4 py-8 bg-gray-50 rounded-3xl">
                {/* Main Heading */}
                <h1 className="text-4xl font-bold mb-8 text-gray-600 text-center">
                    Government Questions
                </h1>

                {/* Subheading and paragraph */}
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-600">
                        Know Your Government
                    </h2>
                    <p className="text-lg text-gray-500">
                        During your official Canadian Citizenship Test, you
                        might be asked questions about the Canadian government
                        on a federal, provincial/territorial, and/or municipal
                        level. Please make a note of all the answers below.
                    </p>
                </div>

                {/* Federal Government Table */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-600">
                        Federal Government
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 border-b text-left">
                                        Reference Questions
                                    </th>
                                    <th className="py-2 px-4 border-b text-left">
                                        Answer
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(2)].map((_, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className={
                                            rowIndex % 2 === 0
                                                ? "bg-gray-100"
                                                : "bg-white"
                                        }
                                    >
                                        <td className="py-2 px-4 border-b">
                                            Row {rowIndex + 1} Col 1
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            Row {rowIndex + 1} Col 2
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Text Box with Dropdown */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-600">
                        Interactive Text Box
                    </h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Click to open list..."
                            className="w-full py-2 px-4 border border-gray-300 rounded-lg"
                        />
                        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg hidden">
                            <li className="py-2 px-4 hover:bg-gray-100">
                                Option 1
                            </li>
                            <li className="py-2 px-4 hover:bg-gray-100">
                                Option 2
                            </li>
                            <li className="py-2 px-4 hover:bg-gray-100">
                                Option 3
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Additional Table */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-600">
                        Additional Information
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 border-b text-left">
                                        Column 1
                                    </th>
                                    <th className="py-2 px-4 border-b text-left">
                                        Column 2
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(3)].map((_, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className={
                                            rowIndex % 2 === 0
                                                ? "bg-gray-100"
                                                : "bg-white"
                                        }
                                    >
                                        <td className="py-2 px-4 border-b">
                                            Row {rowIndex + 1} Col 1
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            Row {rowIndex + 1} Col 2
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
