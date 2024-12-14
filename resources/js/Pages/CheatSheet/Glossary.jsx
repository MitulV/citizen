import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Glossary({ auth, collapsedFromBackend }) {
    const [collapsed, setCollapsed] = useState(collapsedFromBackend === "true");
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                isChapterPanelVisible={true}
                collapsed={collapsed}
                toggleSidebar={toggleSidebar}
            >
                <Head>
                    <title>
                        Glossary - Canadian Citizenship Test - CitizenTestPrep
                    </title>
                    <meta
                        name="description"
                        content="Access the Glossary for important terms and concepts related to the Canadian Citizenship Test!"
                    />
                </Head>

                {/* Main content */}
                <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 rounded-3xl">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-600">
                        Glossary
                    </h1>
                    <p className="text-lg text-gray-500 mt-4 mb-10"></p>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Aboriginal People
                        </h2>
                        <p className="text-lg text-gray-500">
                            Before Europeans arrived, Aboriginal People, the
                            indigenous inhabitants of Canada, thrived on the
                            land. The initial European explorers, mistaking
                            Canada for the East Indies, encountered these native
                            peoples who sustained themselves through various
                            means. While some engaged in hunting and gathering,
                            others practiced agriculture, demonstrating a deep
                            connection to their environment and a diverse range
                            of survival strategies.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Aeronautics
                        </h2>
                        <p className="text-lg text-gray-500">
                            Aeronautics is the science of designing and building
                            aeroplanes.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Agriculture
                        </h2>
                        <p className="text-lg text-gray-500">
                            Farming and the methods that are used to raise and
                            look after crops and animals.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Amended
                        </h2>
                        <p className="text-lg text-gray-500">
                            To make minor changes in (a text) in order to make
                            it fairer, more accurate, or more up-to-date.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Anglophones
                        </h2>
                        <p className="text-lg text-gray-500">
                            People who speak English as a first language. There
                            are 18 million Anglophones in Canada.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Annual
                        </h2>
                        <p className="text-lg text-gray-500">
                            Annual events happen once every year.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Assembly
                        </h2>
                        <p className="text-lg text-gray-500">
                            Assembly means a group of people gathered together
                            in one place for a common purpose.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Ballot
                        </h2>
                        <p className="text-lg text-gray-500">
                            A ballot is a secret vote in which people select a
                            candidate in an election, or express their opinion
                            about something.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Bilateral
                        </h2>
                        <p className="text-lg text-gray-500">
                            Involving only the two groups or countries that are
                            directly concerned.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Bilingual
                        </h2>
                        <p className="text-lg text-gray-500">
                            Using two languages, especially officially.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Canadian Constitution
                        </h2>
                        <p className="text-lg text-gray-500">
                            A Constitution is the system of laws and conventions
                            by which a state governs itself; the basic law of a
                            country; the law of laws.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Colony
                        </h2>
                        <p className="text-lg text-gray-500">
                            A country or area under the full or partial
                            political control of another country, typically a
                            distant one, and occupied by settlers from that
                            country.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Compulsory
                        </h2>
                        <p className="text-lg text-gray-500">
                            Compulsory means required by law or rules. Mandatory
                            has the same meaning.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Conquer
                        </h2>
                        <p className="text-lg text-gray-500">
                            To take complete control of a country’s land and
                            resources.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Constitutional Act
                        </h2>
                        <p className="text-lg text-gray-500">
                            In 1791, It gave both Upper and Lower Canada the
                            right to have elections, to elect people into a
                            legislative assembly. The name Canada became
                            official at this time.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Constitutional Monarchy
                        </h2>
                        <p className="text-lg text-gray-500">
                            A constitutional monarchy is a system of government
                            in which a monarch (king or queen) shares power with
                            a constitutionally organized government. The monarch
                            has rights, duties, and responsibilities for a
                            country. Canada is a constitutional monarchy.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Convention
                        </h2>
                        <p className="text-lg text-gray-500">
                            A way in which something is usually done, especially
                            within a particular area or activity.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Defend
                        </h2>
                        <p className="text-lg text-gray-500">
                            To take action in order to protect them.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Descendant
                        </h2>
                        <p className="text-lg text-gray-500">
                            Someone related to a person or group of people who
                            lived at an earlier time.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Diverse
                        </h2>
                        <p className="text-lg text-gray-500">
                            Including or involving people from a range of
                            different social and ethnic backgrounds and of
                            different genders, sexual orientations, etc.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Election
                        </h2>
                        <p className="text-lg text-gray-500">
                            A process in which people vote to choose a person or
                            group of people to hold an official position.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Electoral Division
                        </h2>
                        <p className="text-lg text-gray-500">
                            For provincial elections, each province or territory
                            is divided into different areas called electoral
                            divisions.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Embody
                        </h2>
                        <p className="text-lg text-gray-500">
                            To embody an idea or quality means to be a symbol or
                            expression of that idea or quality.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            First Nations
                        </h2>
                        <p className="text-lg text-gray-500">
                            First Nations is a term used to describe Indigenous
                            peoples in Canada who are not Métis or Inuit. First
                            Nations people are original inhabitants of the land
                            that is now Canada, and were the first to encounter
                            sustained European contact, settlement and trade.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Fortress
                        </h2>
                        <p className="text-lg text-gray-500">
                            A castle or other large strong building, or a
                            well-protected place, which is intended to be
                            difficult for enemies to enter.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Founding Peoples
                        </h2>
                        <p className="text-lg text-gray-500">
                            They were the 3 groups of people who helped to start
                            Canada: Aboriginal peoples, the French and the
                            British.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Francophones
                        </h2>
                        <p className="text-lg text-gray-500">
                            People who speak French as a first language. There
                            are 7 million Francophones in Canada.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Gay
                        </h2>
                        <p className="text-lg text-gray-500">
                            A man who prefers to be in a couple with a man is a
                            gay person.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Guilty
                        </h2>
                        <p className="text-lg text-gray-500">
                            If someone is guilty of a crime or offence, they
                            have committed that crime or offence.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Habeas Corpus
                        </h2>
                        <p className="text-lg text-gray-500">
                            Habeas corpus is the right to challenge unlawful
                            detention by the state which means that if you are
                            arrested by the police and you haven’t done anything
                            illegal, you can challenge the police. It has come
                            from English common law.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Homosexual
                        </h2>
                        <p className="text-lg text-gray-500">
                            A person who is sexually attracted to people of
                            their own sex.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Honour
                        </h2>
                        <p className="text-lg text-gray-500">
                            An honour is a special award that is given to
                            someone, usually because they have done something
                            good or because they are greatly respected.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Innocent
                        </h2>
                        <p className="text-lg text-gray-500">
                            If someone is innocent, they did not commit a crime
                            which they have been accused of.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Insulin
                        </h2>
                        <p className="text-lg text-gray-500">
                            Insulin is a substance that most people produce
                            naturally in their body and which controls the level
                            of sugar in their blood.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Invade
                        </h2>
                        <p className="text-lg text-gray-500">
                            To enter it by force with an army.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Jury
                        </h2>
                        <p className="text-lg text-gray-500">
                            A group of citizens asked by law to give their
                            opinion and judgement on a question submitted in a
                            court of justice.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Kanata
                        </h2>
                        <p className="text-lg text-gray-500">
                            Means “village” in the Iroquoian language. The name
                            Canada comes from this word.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Landscape
                        </h2>
                        <p className="text-lg text-gray-500">
                            Everything you can see when you look across an area
                            of land, including hills, rivers, buildings, trees,
                            and plants.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Legislature
                        </h2>
                        <p className="text-lg text-gray-500">
                            The legislature of a particular state or country is
                            the group of people in it who have the power to make
                            and pass laws.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Lesbian
                        </h2>
                        <p className="text-lg text-gray-500">
                            A woman who prefers to be in a couple with a woman
                            is a lesbian.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Majority
                        </h2>
                        <p className="text-lg text-gray-500">
                            The majority of people or things in a group is more
                            than half of them.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Mandatory
                        </h2>
                        <p className="text-lg text-gray-500">
                            Mandatory means required by law or rules. Compulsory
                            has the same meaning.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Merchandise
                        </h2>
                        <p className="text-lg text-gray-500">
                            Goods (products) that are bought, sold, or traded.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Migrant
                        </h2>
                        <p className="text-lg text-gray-500">
                            A person who moves from one place to another,
                            especially in order to find work or better living
                            conditions.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Minority
                        </h2>
                        <p className="text-lg text-gray-500">
                            If you talk about a minority of people or things in
                            a larger group, you are referring to a number of
                            them that forms less than half of the larger group,
                            usually much less than half.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Monarch
                        </h2>
                        <p className="text-lg text-gray-500">
                            Monarch is a person (king or queen) who rules over a
                            kingdom. Also known as a sovereign.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Multicultural
                        </h2>
                        <p className="text-lg text-gray-500">
                            Relating to several cultural or ethnic groups within
                            a society.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Obey
                        </h2>
                        <p className="text-lg text-gray-500">
                            To do what you are told to do.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Parliament
                        </h2>
                        <p className="text-lg text-gray-500">
                            According to the Constitution Act, 1867, the term
                            Parliament refers to the Crown, the Senate and the
                            House of Commons — the institutions that together
                            create Canadian laws.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Peace, Order, and Good Government
                        </h2>
                        <p className="text-lg text-gray-500">
                            An important expression in the Canadian government
                            is the commitment to Peace, Order, and Good
                            Government. This expression was first used in 1867,
                            in the British North America Act. British North
                            America Act was Canada’s original constitutional
                            document.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Pharmaceuticals
                        </h2>
                        <p className="text-lg text-gray-500">
                            Pharmaceutical means connected with the industrial
                            production of medicine.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Preserving
                        </h2>
                        <p className="text-lg text-gray-500">
                            If you preserve a situation or condition, you make
                            sure that it remains as it is and does not change or
                            end.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Presumption
                        </h2>
                        <p className="text-lg text-gray-500">
                            A presumption is something that is accepted as true
                            but is not certain to be true.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Quebecers
                        </h2>
                        <p className="text-lg text-gray-500">
                            Quebecers are the people of Quebec, the vast
                            majority French-speaking.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Rapid
                        </h2>
                        <p className="text-lg text-gray-500">
                            Happening within a short time, speedily.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Referendum
                        </h2>
                        <p className="text-lg text-gray-500">
                            If a country holds a referendum on a policy, they
                            ask the people to vote on the policy and show
                            whether they agree with it or not.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Refugee
                        </h2>
                        <p className="text-lg text-gray-500">
                            People who have been forced to leave their homes or
                            their country, either because there is a war there
                            or because of their political or religious beliefs.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Significant
                        </h2>
                        <p className="text-lg text-gray-500">
                            A significant amount or effect is large enough to be
                            important or affect a situation to a noticeable
                            degree.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Sovereign
                        </h2>
                        <p className="text-lg text-gray-500">
                            Sovereign is a person (king or queen) who rules over
                            a kingdom. Also known as a monarch.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Supremacy
                        </h2>
                        <p className="text-lg text-gray-500">
                            The state or condition of being superior (more
                            powerful) to all others in authority, power, or
                            status.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Surrender
                        </h2>
                        <p className="text-lg text-gray-500">
                            To stop fighting or resisting someone and agree that
                            you have been beaten.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Territorial Rights
                        </h2>
                        <p className="text-lg text-gray-500">
                            In 1763, King George III promised to allow the
                            Aboriginal peoples to have the right to the land on
                            which they lived. These were called territorial
                            rights. But these promises were not always kept. Now
                            the promises to keep Aboriginal and territorial
                            rights are in the Canadian Constitution.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            The Great Dominion
                        </h2>
                        <p className="text-lg text-gray-500">
                            Poets and songwriters have referred to Canada as The
                            Great Dominion.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Trophy
                        </h2>
                        <p className="text-lg text-gray-500">
                            A prize, for example, a silver cup, that is given to
                            the winner of a competition or race.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            United Empire Loyalists
                        </h2>
                        <p className="text-lg text-gray-500">
                            Settlers who came from the United States to Canada
                            during and after the American Revolution.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Wounded
                        </h2>
                        <p className="text-lg text-gray-500">
                            Suffering from injuries, especially in a battle or
                            fight.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-600">
                            Head of State
                        </h2>
                        <p className="text-lg text-gray-500">
                            The Head of State is a King or Queen (a Sovereign),
                            who helps to maintain the rule of law that is in the
                            Constitution. Our current Head of State is King
                            Charles the Third.
                        </p>
                    </div>
                </section>
            </AuthenticatedLayout>
        </>
    );
}
