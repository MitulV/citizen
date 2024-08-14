import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function ImportantPeople({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head title="Important People" />

            {/* Main content */}
            <section className="container px-4 py-8 bg-slate-50 mx-auto sm:px-6 lg:px-80 xl:mx-60 lg:ml-10 rounded-3xl">
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
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import2.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Marjorie Turner-Bailey
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Olympian Marjorie Turner-Bailey of Nova Scotia is a
                            descendant of black Loyalists, escaped slaves and
                            freed men and women of African origin who in the
                            1780s fled to Canada from America, where slavery
                            remained legal until 1863.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import3.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            John Cabot
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            John Cabot, an Italian immigrant to England, was the
                            first to map Canada’s Atlantic shore, setting foot
                            on Newfoundland or Cape Breton Island in 1497 and
                            claiming the New Founde Land for England. English
                            settlement did not begin until 1610.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import4.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Jacques Cartier
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Jacques Cartier was the first European to explore
                            the St. Lawrence River and to set eyes on
                            present-day Québec City and Montreal.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import5.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Count Frontenac
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Count Frontenac refused to surrender Quebec to the
                            English in 1690, saying: “My only reply will be from
                            the mouths of my cannons!”
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import6.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Pierre Le Moyne
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Pierre Le Moyne, Sieur d’Iberville, was a great hero
                            of New France, winning many victories over the
                            English, from James Bay in the north to Nevis in the
                            Caribbean, in the late 17th and early 18th
                            centuries.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import8.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            John Graves Simcoe
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Lieutenant Colonel John Graves Simcoe was Upper
                            Canada’s first Lieutenant Governor and founder of
                            the City of York (now Toronto). Simcoe also made
                            Upper Canada the first province in the British
                            Empire to abolish slavery
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import7.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Sir Guy Carleton (Lord Dorchester)
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Sir Guy Carleton (Lord Dorchester), as Governor of
                            Quebec, defended the rights of the Canadiens,
                            defeated an American military invasion of Quebec in
                            1775, and supervised the Loyalist migration to Nova
                            Scotia and Quebec in 1782-83.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import9.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Mary Ann Shadd Cary
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Mary Ann Shadd Cary was an outspoken activist in the
                            movement to abolish slavery in the USA. In 1853 she
                            became the first woman publisher in Canada, helping
                            to found and edit The Provincial Freeman, a weekly
                            newspaper dedicated to anti-slavery, black
                            immigration to Canada, temperance (urging people to
                            drink less alcohol), and upholding British rule.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import10.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Sir Isaac Brock and Chief Tecumseh
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Major General Sir Isaac Brock and Chief Tecumseh.
                            Together, British troops, First Nations, and
                            Canadian volunteers defeated an American invasion in
                            1812-14
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import11.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            The Duke of Wellington
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            The Duke of Wellington sent some of his best
                            soldiers to defend Canada in 1814. He then chose
                            Bytown (Ottawa) as the endpoint of the Rideau Canal,
                            part of a network of forts to prevent the U.S.A.
                            from invading Canada again. Wellington, who defeated
                            Napoleon in 1815, therefore played a direct role in
                            founding the national capital
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import12.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Laura Secord{" "}
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            In 1813, Laura Secord, pioneer wife and mother of
                            five children, made a dangerous 19 mile (30 km)
                            journey on foot to warn Lieutenant James FitzGibbon
                            of a planned American attack. Her bravery
                            contributed to victory at the Battle of Beaver Dams.
                            She is recognized as a heroine to this day.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import13.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Sir Louis-Hippolyte La Fontaine
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Sir Louis-Hippolyte La Fontaine, a champion of
                            French language rights, became the first head of a
                            responsible government (similar to a prime minister)
                            in Canada in 1849.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import14.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Sir John A. Macdonald{" "}
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Sir John A. Macdonald, the first Prime Minister of
                            the Dominion of Canada.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import15.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Sir Sam Steele{" "}
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Sir Sam Steele: A great frontier hero, Mounted
                            Policeman, and soldier of the Queen.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import16.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Gabriel Dumont{" "}
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Métis Resistance: Gabriel Dumont was the Métis’
                            greatest military leader.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import17.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Sir Arthur Currie
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Sir Arthur Currie, a reserve officer, became
                            Canada’s greatest soldier.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import19.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Agnes Macphail
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Agnes Macphail, a farmer and teacher, became the
                            first woman MP in 1921
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import18.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Phil Edwards
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Phil Edwards was a Canadian track and field
                            champion. Born in British Guiana, he won bronze
                            medals for Canada in the 1928, 1932, and 1936
                            Olympics, then graduated from McGill University
                            Medical School. He served as a captain in the
                            Canadian Army during the Second World War, and, as a
                            Montreal doctor, became an expert in tropical
                            diseases.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import20.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Donovan Bailey
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Donovan Bailey became a world record sprinter and
                            double Olympic gold medallist.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import21.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Chantal Petitclerc{" "}
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Chantal Petitclerc became a world champion
                            wheelchair racer and Paralympic gold medalist.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import22.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Terry Fox
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            In 1980, Terry Fox, a British Columbian who lost his
                            right leg to cancer at the age of 18, began a
                            cross-country run, the “Marathon of Hope,” to raise
                            money for cancer research. He became a hero to
                            Canadians.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import23.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Wayne Gretzky
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            One of the greatest hockey players of all time,
                            Wayne Gretzky, played for the Edmonton Oilers from
                            1979 to 1988.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import24.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Mark Tewksbury
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Mark Tewksbury, Olympic gold medallist and prominent
                            activist for gay and lesbian Canadians.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import25.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Paul Henderson{" "}
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            In 1972, Paul Henderson scored the winning goal for
                            Canada in the Canada-Soviet Summit Series. This goal
                            is often referred to as “the goal heard around the
                            world” and is still remembered today as an important
                            event in both sports and cultural history
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import26.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Catriona Le May Doan{" "}
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Catriona Le May Doan carries the flag after winning
                            a gold medal in speed skating at the 2002 Olympic
                            Winter Games
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import27.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Sir Frederick Banting{" "}
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Sir Frederick Banting of Toronto and Charles Best
                            discovered Insulin, a hormone to treat diabetes that
                            has saved 16 million lives world.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import28.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            David Johnston
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            David Johnston, 28th Governor General since
                            Confederation
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import29.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Colonel Alexander Roberts Dunn
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Lieutenant Alexander Roberts Dunn, born in
                            present-day Toronto, served in the British Army in
                            the Charge of the Light Brigade at Balaclava (1854)
                            in the Crimean War, and was the first Canadian to be
                            awarded the Victoria Cross.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import30.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Able Seaman William Hall
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Able Seaman William Hall of Horton, Nova Scotia,
                            whose parents were American slaves, was the first
                            black man to be awarded the V.C. for his role in the
                            Siege of Lucknow during the Indian Rebellion of
                            1857.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import31.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Brigadier Paul Triquet{" "}
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Captain Paul Triquet of Cabano, Quebec, earned the
                            V.C. leading his men and a handful of tanks in the
                            attack on Casa Berardi in Italy in 1943 during the
                            Second World War, and was later a Brigadier.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import32.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Filip Konowal
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Corporal Filip Konowal, born in Ukraine, showed
                            exceptional courage in the Battle of Hill 70 in
                            1917, and became the first member of the Canadian
                            Corps not born in the British Empire to be awarded
                            the V.C.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import33.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Air Marshal William A. Bishop
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Air Marshal William A. Bishop, better known as
                            flying ace Billy Bishop, V.C. Flying ace Captain
                            Billy Bishop, born in Owen Sound, Ontario, earned
                            the V.C. in the Royal Flying Corps during the First
                            World War, and was later an honorary Air Marshal of
                            the Royal Canadian Air Force.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import34.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Lieutenant Robert Hampton Gray
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Lieutenant Robert Hampton Gray, a navy pilot born in
                            Trail, B.C., was killed while bombing and sinking a
                            Japanese warship in August 1945, a few days before
                            the end of the Second World War, and was the last
                            Canadian to receive the V.C. to date.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left column with image */}
                    <div className="flex-none w-full md:w-auto justify-center py-10">
                        <img
                            src="/images/import35.jpg"
                            alt="Image 1"
                            className="object-cover w-full md:w-60 h-auto rounded-xl"
                        />
                    </div>

                    {/* Right column with h1 and p tags */}
                    <div className="flex-auto w-full md:w-64 mt-8 md:mt-0 md:ml-10">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-cyan-600">
                            Sir William Logan
                        </h1>
                        <p className="text-base sm:text-lg text-gray-500">
                            Sir William Logan, a world-famous geologist, born in
                            Montreal in 1798 to Scottish immigrant parents.
                            Logan founded and directed the Geological Survey of
                            Canada from 1842 to 1869 and is considered one of
                            Canada’s greatest scientist.
                        </p>
                    </div>
                </div>
                <hr className="mt-8 border-t-2 border-gray-200" />
            </section>
        </AuthenticatedLayout>
    );
}
