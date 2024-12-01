import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function GovQuestions({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head>
                <title>
                    Government Questions - Canadian Citizenship Test -
                    CitizenTestPrep
                </title>
                <meta
                    name="description"
                    content="Explore Government Questions to understand Canada's political structure for the citizenship test!"
                />
            </Head>

            {/* Main content */}

            <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 rounded-3xl">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-600">
                    Government Questions
                </h1>
                <p className="text-lg text-gray-500 mt-4 mb-10"></p>

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
                    <h2 className="text-3xl mt-20  font-semibold mb-2 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 text-gray-600">
                        Provincial/Territorial Government
                    </h2>
                    <h4>Alberta </h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        AB Questions
                                    </th>
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Answers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The representative of the King in your
                                        province, the Lieutenant Governor:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Salma Lakhani
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The Head of Government, the Premier:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Danielle Smith
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the provincial party in
                                        power:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        United Conservative Party
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The names of the provincial opposition
                                        parties and leaders are:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.elections.ab.ca/parties-and-candidates/parties"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        Your provincial representative:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://streetkey.elections.ab.ca"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 className="mt-10">British Columbia</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        BC Questions
                                    </th>
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Answers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The representative of the King in your
                                        province, the Lieutenant Governor:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Janet Austin
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The Head of Government, the Premier:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        David Eby
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the provincial party in
                                        power:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        New Democratic Party of British Columbia
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The names of the provincial opposition
                                        parties and leaders are:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://elections.bc.ca/docs/fin/Registered-Political-Parties-Information.pdf"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        Your provincial representative:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.leg.bc.ca/learn-about-us/members"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 className="mt-10">Manitoba</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        MB Questions
                                    </th>
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Answers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The representative of the King in your
                                        province, the Lieutenant Governor:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Anita R. Neville
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The Head of Government, the Premier:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Heather Stefanson
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the provincial party in
                                        power:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Progressive Conservative Party of
                                        Manitoba
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The names of the provincial opposition
                                        parties and leaders are:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.electionsmanitoba.ca/en/Political_Participation/Registered_Political_Parties"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        Your provincial representative:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.electionsmanitoba.ca/en/voting/MyVotingInfo"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 className="mt-10">New Brunswick</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        NB Questions
                                    </th>
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Answers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The representative of the King in your
                                        province, the Lieutenant Governor:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Brenda Murphy
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The Head of Government, the Premier:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Blaine Higgs
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the provincial party in
                                        power:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        New Brunswick Progressive Conservative
                                        Party
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The names of the provincial opposition
                                        parties and leaders are:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.electionsnb.ca/content/enb/en/parties_assoc/rpp.html"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        Your provincial representative:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www1.gnb.ca/elections/en/provstreetkey/provskinformation-e.asp"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 className="mt-10">Newfoundland & Labrador</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        NL Questions
                                    </th>
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Answers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The representative of the King in your
                                        province, the Lieutenant Governor:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Joan Marie Aylward
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The Head of Government, the Premier:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Andrew Furey
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the provincial party in
                                        power:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Liberal Party
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The names of the provincial opposition
                                        parties and leaders are:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.elections.gov.nl.ca/elections/parties/official.html"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        Your provincial representative:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.elections.gov.nl.ca/elections/voters/search.html"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 className="mt-10">Nova Scotia</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        NS Questions
                                    </th>
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Answers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The representative of the King in your
                                        province, the Lieutenant Governor:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Arthur LeBlanc
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The Head of Government, the Premier:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Tim Houston
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the provincial party in
                                        power:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Nova Scotia Liberal Party
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The names of the provincial opposition
                                        parties and leaders are:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://electionsnovascotia.ca/candidates-and-parties/registered-parties"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        Your provincial representative:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://enstools.electionsnovascotia.ca/edinfo2012/"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 className="mt-10">Ontario</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        ON Questions
                                    </th>
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Answers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The representative of the King in your
                                        province, the Lieutenant Governor:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Edith Dumont
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The Head of Government, the Premier:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Olivia Chow
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the provincial party in
                                        power:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Progressive Conservative Party of
                                        Ontario
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The names of the provincial opposition
                                        parties and leaders are:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://finances.elections.on.ca/en/registered-parties"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        Your provincial representative:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.elections.on.ca/en/voting-in-ontario/electoral-districts.html"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 className="mt-10">Prince Edward Island</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        PI Questions
                                    </th>
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Answers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The representative of the King in your
                                        province, the Lieutenant Governor:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Antoinette Perry
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The Head of Government, the Premier:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Dennis King
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the provincial party in
                                        power:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Progressive Conservative Party of Prince
                                        Edward Island
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The names of the provincial opposition
                                        parties and leaders are:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.electionspei.ca/candidates-and-parties/registered-political-parties"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        Your provincial representative:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.electionspei.ca/candidates-and-parties/registered-political-parties"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 className="mt-10">Quebec</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        QC Questions
                                    </th>
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Answers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The representative of the King in your
                                        province, the Lieutenant Governor:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Manon Jeannotte
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The Head of Government, the Premier:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        François Legault
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the provincial party in
                                        power:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Coalition Avenir Québec
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The names of the provincial opposition
                                        parties and leaders are:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.electionsquebec.qc.ca/english/provincial/rapeq/political-parties.php"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        Your provincial representative:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="http://www.assnat.qc.ca/en/deputes/index.html#listeDeputes"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 className="mt-10">Saskatchewan</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-gray-500">
                            <thead>
                                <tr className="bg-white">
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        SK Questions
                                    </th>
                                    <th className="py-4 px-4 border border-black text-left w-1/2">
                                        Answers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The representative of the King in your
                                        province, the Lieutenant Governor:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Russell Mirasty
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The Head of Government, the Premier:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Scott Moe
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        The name of the provincial party in
                                        power:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        Saskatchewan Party
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-4 px-4 border border-black">
                                        The names of the provincial opposition
                                        parties and leaders are:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.elections.sk.ca/candidates-political-parties/political-parties"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="py-4 px-4 border border-black">
                                        Your provincial representative:
                                    </td>
                                    <td className="py-4 px-4 border border-black">
                                        <a
                                            className="text-blue-800 underline"
                                            href="https://www.elections.sk.ca/voters/gis"
                                            target="_blank"
                                        >
                                            Find out here
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
