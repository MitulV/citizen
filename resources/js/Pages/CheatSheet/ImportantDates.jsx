import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

export default function ImportantDates({ auth }) {
    const exclamationIcon = {
        icon: <FontAwesomeIcon icon={faExclamation} />,
        iconStyle: { background: "rgb(81, 81, 81)", color: "#fff" },
    };

    const accordions = [
        {
            header: "Rights and Responsibilities",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "Magna Carta / Great charter of freedoms",
                    subtitle: "Magna carta is signed in England.",
                    date: "1215",
                },
                {
                    icon: exclamationIcon,
                    title: "Charter of Rights & Amended Constitution",
                    subtitle:
                        "The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms.",
                    date: "1982",
                },
            ],
        },
        {
            header: "Who We Are",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "Acadian Settlement",
                    subtitle:
                        "The Acadians are the descendants of French colonists who began settling in what are now the Maritime provinces in 1604.",
                    date: "1604",
                },
                {
                    icon: exclamationIcon,
                    title: "Aboriginal Territorial Rights",
                    subtitle:
                        "The territorial rights of the Aboriginal People were first guaranteed in 1763.",
                    date: "1763",
                },
                {
                    icon: exclamationIcon,
                    title: "Canada’s Constitutional Document",
                    subtitle:
                        "Canada’s original constitutional document was created in 1867.",
                    date: "1867",
                },
                {
                    icon: exclamationIcon,
                    title: "The “First Nations” Term",
                    subtitle:
                        "The term “First Nations” became popular in the 1970s.",
                    date: "1970s",
                },
            ],
        },
        {
            header: "Canada’s History",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "John Cabot",
                    subtitle:
                        "John Cabot’s journey, which produced the first map of Canada’s east coast, marked the beginning of European exploration..",
                    date: "1497",
                },
                {
                    icon: exclamationIcon,
                    title: "Jacques Cartier",
                    subtitle:
                        "For French King Francis I, Jacques Cartier made three trips across the Atlantic to lay claim to the territory.",
                    date: "1534 to 1542",
                },
                {
                    icon: exclamationIcon,
                    title: "The name “Canada”",
                    subtitle: "The name “Canada” began appearing on maps.",
                    date: "1550",
                },
                {
                    icon: exclamationIcon,
                    title: "The First European Outpost",
                    subtitle:
                        "French explorers Samuel de Champlain and Pierre de Monts founded the first European outpost north of Florida.",
                    date: "1604",
                },
                {
                    icon: exclamationIcon,
                    title: "Hudson’s Bay",
                    subtitle:
                        "King Charles II of England gave exclusive trading rights to the Hudson’s Bay Company over the watershed that drained into Hudson Bay.",
                    date: "1670",
                },
                {
                    icon: exclamationIcon,
                    title: "The First Representative Assembly",
                    subtitle:
                        "In Halifax, Nova Scotia, the first representative assembly was chosen.",
                    date: "1758",
                },
                {
                    icon: exclamationIcon,
                    title: "The Quebec Act.",
                    subtitle:
                        "King Charles II of England gave exclusive trading rights to the Hudson’s Bay Company over the watershed that drained into Hudson Bay.",
                    date: "1774",
                },
                {
                    icon: exclamationIcon,
                    title: "The Battle of Trafalgar",
                    subtitle:
                        "The defeat of Napoleon Bonaparte’s fleet in the Battle of Trafalgar.",
                    date: "1805",
                },
                {
                    icon: exclamationIcon,
                    title: "Canada vs America",
                    subtitle: "The United States invaded Canada in June.",
                    date: "1812",
                },
                {
                    icon: exclamationIcon,
                    title: "Canada’s Victory",
                    subtitle: "America’s attempt to conquer Canada failed.",
                    date: "1814",
                },
                {
                    icon: exclamationIcon,
                    title: "Napoleon Overthrown",
                    subtitle:
                        "Napoleon was overthrown by the Duke of Wellington..",
                    date: "1815",
                },
                {
                    icon: exclamationIcon,
                    title: "Stock Exchange",
                    subtitle: "The opening of the Montreal Stock Exchange.",
                    date: "1832",
                },
                {
                    icon: exclamationIcon,
                    title: "Slavery Abolished",
                    subtitle:
                        "Slavery was abolished by the British Parliament throughout the Empire.",
                    date: "1833",
                },
                {
                    icon: exclamationIcon,
                    title: "The Province of Canada",
                    subtitle:
                        "The Province of Canada was formed by combining Upper and Lower Canada.",
                    date: "1840",
                },
                {
                    icon: exclamationIcon,
                    title: "Responsible Government",
                    subtitle:
                        "Nova Scotia became the first British North American colony to attain full responsible government.",
                    date: "1847 to 1848",
                },
                {
                    icon: exclamationIcon,
                    title: "Sir Louis-Hippolyte La Fontaine",
                    subtitle:
                        "Sir Louis-Hippolyte La Fontaine was the first leader of a responsible administration and a supporter of the rights of the French language.",
                    date: "1849",
                },
                {
                    icon: exclamationIcon,
                    title: "Dominion of Canada",
                    subtitle:
                        "The phrase “Dominion of Canada” was proposed by Sir Leonard Tilley.",
                    date: "1864",
                },
                {
                    icon: exclamationIcon,
                    title: "Fathers, Constitution, Monarchy & Governments",
                    subtitle:
                        "The Fathers of Confederation founded the Dominion of Canada on July 1st, giving birth to the nation we know today.",
                    date: "1867",
                },
                {
                    icon: exclamationIcon,
                    title: "RCMP",
                    subtitle:
                        "The Royal Canadian Mounted Police (RCMP) was established.",
                    date: "1873",
                },
                {
                    icon: exclamationIcon,
                    title: "Women’s Voting Rights in Manitoba",
                    subtitle:
                        "The majority of Canadian women who are over 21 now have the ability to cast a ballot in federal elections.",
                    date: "1918",
                },
                {
                    icon: exclamationIcon,
                    title: "The Flag Colors",
                    subtitle:
                        "The national colors of Canada were chosen by King George V. (white and red).",
                    date: "1921",
                },
                {
                    icon: exclamationIcon,
                    title: "The Great Depression",
                    subtitle:
                        "The Great Depression, sometimes known as the “Dirty Thirties,” was caused by the stock market crash.",
                    date: "1929",
                },
                {
                    icon: exclamationIcon,
                    title: "The Bank of Canada",
                    subtitle: "The Bank of Canada was created.",
                    date: "1934",
                },
                {
                    icon: exclamationIcon,
                    title: "D-Day",
                    subtitle:
                        "In World War II, Canadians captured Juno Beach on June 6 as part of the Allied invasion of Normandy on D-Day.",
                    date: "1944",
                },
            ],
        },
        {
            header: "Modern Canada",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "The Untamed Wilderness",
                    subtitle:
                        "The Group of Seven, who created a painting technique to represent the untamed wilderness scenes, had their roots in 1920.",
                    date: "1920",
                },
                {
                    icon: exclamationIcon,
                    title: "Old Age Security",
                    subtitle: "Old Age Security was devised.",
                    date: "1927",
                },
                {
                    icon: exclamationIcon,
                    title: "Employment Insurance",
                    subtitle:
                        "The federal government established unemployment insurance (referred to as “employment insurance”).",
                    date: "1940",
                },
                {
                    icon: exclamationIcon,
                    title: "Old Age Security",
                    subtitle: "Old Age Security was devised.",
                    date: "1927",
                },
                {
                    icon: exclamationIcon,
                    title: "Alberta Oil",
                    subtitle:
                        "The ability to vote was granted to Japanese Canadians.",
                    date: "1947",
                },
                {
                    icon: exclamationIcon,
                    title: "Voting for Japanese Canadians",
                    subtitle: "Old Age Security was devised.",
                    date: "1948",
                },
                {
                    icon: exclamationIcon,
                    title: "Aboriginal Voting Rights",
                    subtitle:
                        "Voting rights were granted to Aboriginal People.",
                    date: "1960",
                },
                {
                    icon: exclamationIcon,
                    title: "The Quiet Revolution",
                    subtitle:
                        "Quebec went through an era of rapid change known as “the Quiet Revolution”.",
                    date: "1960s",
                },
                {
                    icon: exclamationIcon,
                    title: "Pensions",
                    subtitle:
                        "The creation of the Canada and Quebec Pension Plans.",
                    date: "1965",
                },
                {
                    icon: exclamationIcon,
                    title: "French and English Languages",
                    subtitle:
                        "The Official Languages Act, passed by Parliament, guarantees French and English services in the federal government across Canada.",
                    date: "1969",
                },
                {
                    icon: exclamationIcon,
                    title: "Cancer Fight",
                    subtitle:
                        "Terry Fox, a British Columbian who lost his right leg to cancer when he was 18, launched the “”Marathon of Hope”” to raise funds for cancer research. He became a Canadian hero.",
                    date: "1980",
                },
                {
                    icon: exclamationIcon,
                    title: "Basketball",
                    subtitle: "James Naismith, a Canadian, created basketball.",
                    date: "1891",
                },
            ],
        },
        {
            header: "How Canadians Govern Themselves",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "Constitution Act, Monarchy & Responsible Government",
                    subtitle:
                        "The British North America Act, commonly referred to as the Constitution Act, was adopted by the British Parliament.Canada became a constitutional monarchy.The responsibilities of the federal and provincial governments were outlined and defined.”",
                    date: "1867",
                },
            ],
        },
        {
            header: "Canadian Symbols",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "The Maple Leaf",
                    subtitle:
                        "Canada adopted the maple leaf as a symbol of Canada.",
                    date: "1700s",
                },
                {
                    icon: exclamationIcon,
                    title: "Ice Hockey",
                    subtitle: "Ice hockey gets invented in Canada.",
                    date: "1800s",
                },
                {
                    icon: exclamationIcon,
                    title: "The Victoria Cross",
                    subtitle: "Ice hockey gets invented in Canada.",
                    date: "1800s",
                },
                {
                    icon: exclamationIcon,
                    title: "Parliament Buildings",
                    subtitle: "The buildings for the Parliament were finished.",
                    date: "1860s",
                },
                {
                    icon: exclamationIcon,
                    title: "The Flag Colors",
                    subtitle:
                        "The national colors of Canada were chosen by King George V. (white and red).",
                    date: "1821",
                },
                {
                    icon: exclamationIcon,
                    title: "Peace Tower",
                    subtitle:
                        "The Peace Tower, built in honor of the First World War, has been finished.",
                    date: "1827",
                },
                {
                    icon: exclamationIcon,
                    title: "Canada’s Monarch (now King Charles III)",
                    subtitle: "Canada’s monarch became Queen Elizabeth II.",
                    date: "1852",
                },
                {
                    icon: exclamationIcon,
                    title: "Flag",
                    subtitle:
                        " For the first time, the modern Canadian flag was raised.",
                    date: "1865",
                },
                {
                    icon: exclamationIcon,
                    title: "Honours System",
                    subtitle:
                        " The Order of Canada served as the foundation for Canada’s own honours system.",
                    date: "1967",
                },
                {
                    icon: exclamationIcon,
                    title: "French and English Languages",
                    subtitle:
                        " The Official Languages Act, passed by Parliament, guarantees French and English services in the federal government across Canada.",
                    date: "1969",
                },
                {
                    icon: exclamationIcon,
                    title: "National Anthem",
                    subtitle: "  O Canada was declared the national anthem.",
                    date: "1980",
                },
            ],
        },
        {
            header: "Canada’s Economy",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "Free Trade",
                    subtitle:
                        "Canada implemented free trade agreements with the United States.",
                    date: "1988",
                },
            ],
        },
        // Other accordion objects
    ];

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head>
                <title>
                    Important Dates - Canadian Citizenship Test -
                    CitizenTestPrep
                </title>
                <meta
                    name="description"
                    content="Discover Important Dates for the Canadian Citizenship Test to familiarize yourself with key events!"
                />
            </Head>
            <div className="p-4 mx-auto max-w-screen-lg sm:mx-4 md:mx-10 lg:mx-20 xl:mx-8 bg-slate-50">
                {accordions.map((accordion, index) => (
                    <Accordion
                        key={index}
                        open={open === index + 1}
                        icon={<Icon id={index + 1} open={open} />}
                    >
                        <AccordionHeader onClick={() => handleOpen(index + 1)}>
                            {accordion.header}
                        </AccordionHeader>
                        <AccordionBody>
                            <VerticalTimeline lineColor="rgb(81,81,81)">
                                {accordion.timeline.map((t, i) => (
                                    <VerticalTimelineElement
                                        key={i}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{}}
                                        contentArrowStyle={{
                                            borderRight:
                                                "7px solid rgb(81, 81, 81)",
                                        }}
                                        position={"right"}
                                        date={
                                            <div className="text-xl ml-4 font-bold text-black">
                                                {t.date}
                                            </div>
                                        } // Apply Tailwind CSS class here
                                        {...t.icon}
                                    >
                                        <h1 className="text-2xl">{t.title}</h1>
                                        {t.subtitle && (
                                            <h4 className="text-base vertical-timeline-element-subtitle">
                                                {t.subtitle}
                                            </h4>
                                        )}
                                        {t.desc && <p>{t.desc}</p>}
                                    </VerticalTimelineElement>
                                ))}
                            </VerticalTimeline>
                        </AccordionBody>
                    </Accordion>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}
