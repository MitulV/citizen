import React from "react";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faExclamation,
    faChevronLeft,
    faCheck,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "@inertiajs/react";

export default function TheTimeLine({ chapter, topic }) {
    const exclamationIcon = {
        icon: <FontAwesomeIcon icon={faExclamation} />,
        iconStyle: { background: "rgb(81, 81, 81)", color: "#fff" },
    };

    const accordion = [
        {
            chapter: 1,
            timeline: [
                {
                    title: "How long have settlers contributed to Canada’s growth?",
                    subtitle:
                        "For 400 years, settlers and immigrants have contributed to the diversity and richness of our country, which is built on a proud history and a strong identity.",
                    date: "400 Years",
                },
            ],
        },
        {
            chapter: 2,
            timeline: [
                {
                    title: "Magna Carta / Great Charter of Freedoms",
                    subtitle: "Magna Carta is signed in England.",
                    date: "1215",
                },
                {
                    title: "Charter of Rights & Amended Constitution",
                    subtitle:
                        "The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms.",
                    date: "1982",
                },
            ],
        },
        {
            chapter: 3,
            timeline: [
                {
                    title: "Acadian Settlement",
                    subtitle:
                        "The Acadians are the descendants of French colonists who began settling in what are now the Maritime provinces.",
                    date: "1604",
                },
                {
                    title: "Aboriginal Territorial Rights",
                    subtitle:
                        "The territorial rights of the Aboriginal People were first guaranteed.",
                    date: "1763",
                },
                {
                    title: "Canada’s Constitutional Document",
                    subtitle:
                        "Canada’s original constitutional document was created.",
                    date: "1867",
                },
                {
                    title: "The 'First Nations' Term",
                    subtitle: "The term 'First Nations' became popular.",
                    date: "1970s",
                },
            ],
        },
        {
            chapter: 4,
            timeline: [
                {
                    title: "John Cabot",
                    subtitle:
                        "John Cabot’s journey produced the first map of Canada’s east coast, marking the beginning of European exploration.",
                    date: "1497",
                },
                {
                    title: "Jacques Cartier",
                    subtitle:
                        "For French King Francis I, Jacques Cartier made three trips across the Atlantic to lay claim to the territory.",
                    date: "1534 to 1542",
                },
                {
                    title: "The name 'Canada'",
                    subtitle: "The name 'Canada' began appearing on maps.",
                    date: "1550",
                },
                {
                    title: "The First European Outpost",
                    subtitle:
                        "French explorers Samuel de Champlain and Pierre de Monts founded the first European outpost north of Florida.",
                    date: "1604",
                },
                {
                    title: "Hudson’s Bay",
                    subtitle:
                        "King Charles II of England granted exclusive trading rights to the Hudson’s Bay Company.",
                    date: "1670",
                },
                {
                    title: "The First Representative Assembly",
                    subtitle:
                        "In Halifax, Nova Scotia, the first representative assembly was chosen.",
                    date: "1758",
                },
                {
                    title: "The Quebec Act",
                    subtitle:
                        "The Quebec Act was passed by the British Parliament.",
                    date: "1774",
                },
                {
                    title: "The Battle of Trafalgar",
                    subtitle:
                        "The defeat of Napoleon Bonaparte’s fleet in the Battle of Trafalgar.",
                    date: "1805",
                },
                {
                    title: "Canada vs America",
                    subtitle: "The United States invaded Canada in June.",
                    date: "1812",
                },
                {
                    title: "Canada’s Victory",
                    subtitle: "America’s attempt to conquer Canada failed.",
                    date: "1814",
                },
                {
                    title: "Napoleon Overthrown",
                    subtitle:
                        "Napoleon was overthrown by the Duke of Wellington.",
                    date: "1815",
                },
                {
                    title: "Stock Exchange",
                    subtitle: "The opening of the Montreal Stock Exchange.",
                    date: "1832",
                },
                {
                    title: "Slavery Abolished",
                    subtitle:
                        "Slavery was abolished by the British Parliament throughout the Empire.",
                    date: "1833",
                },
                {
                    title: "The Province of Canada",
                    subtitle:
                        "The Province of Canada was formed by combining Upper and Lower Canada.",
                    date: "1840",
                },
                {
                    title: "Responsible Government",
                    subtitle:
                        "Nova Scotia became the first British North American colony to attain full responsible government.",
                    date: "1847 to 1848",
                },
                {
                    title: "Sir Louis-Hippolyte La Fontaine",
                    subtitle:
                        "Sir Louis-Hippolyte La Fontaine was the first leader of a responsible administration and a supporter of French language rights.",
                    date: "1849",
                },
                {
                    title: "Dominion of Canada",
                    subtitle:
                        "The phrase 'Dominion of Canada' was proposed by Sir Leonard Tilley.",
                    date: "1864",
                },
                {
                    title: "Fathers, Constitution, Monarchy & Governments",
                    subtitle:
                        "The Fathers of Confederation founded the Dominion of Canada on July 1st.",
                    date: "1867",
                },
                {
                    title: "RCMP",
                    subtitle:
                        "The Royal Canadian Mounted Police (RCMP) was established.",
                    date: "1873",
                },
                {
                    title: "Women’s Voting Rights in Manitoba",
                    subtitle:
                        "Manitoba became the first province in Canada to grant women the right to vote.",
                    date: "1916",
                },
                {
                    title: "Shock Troops of the British Empire",
                    subtitle:
                        "The Canadian Corps captured Vimy Ridge, securing their reputation for valour.",
                    date: "1917",
                },
                {
                    title: "Women’s Voting Rights Nationwide",
                    subtitle:
                        "The majority of Canadian women over 21 gained the right to vote in federal elections.",
                    date: "1918",
                },
                {
                    title: "The Flag Colors",
                    subtitle:
                        "The national colors of Canada were chosen by King George V (white and red).",
                    date: "1921",
                },
                {
                    title: "The Great Depression",
                    subtitle:
                        "The Great Depression, also known as the 'Dirty Thirties,' was caused by the stock market crash.",
                    date: "1929",
                },
                {
                    title: "The Bank of Canada",
                    subtitle: "The Bank of Canada was created.",
                    date: "1934",
                },
                {
                    title: "D-Day",
                    subtitle:
                        "Canadians captured Juno Beach on June 6 as part of the Allied invasion of Normandy during World War II.",
                    date: "1944",
                },
            ],
        },
        {
            chapter: 5,
            timeline: [
                {
                    title: "Basketball",
                    subtitle: "James Naismith, a Canadian, created basketball.",
                    date: "1891",
                },
                {
                    title: "Old Age Security",
                    subtitle: "Old Age Security was devised.",
                    date: "1927",
                },
                {
                    title: "The Untamed Wilderness",
                    subtitle:
                        "The Group of Seven, who pioneered a painting technique to depict the untamed wilderness, began in 1920.",
                    date: "1920",
                },
                {
                    title: "Employment Insurance",
                    subtitle:
                        "The federal government established unemployment insurance (now called employment insurance).",
                    date: "1940",
                },
                {
                    title: "Alberta Oil",
                    subtitle:
                        "The discovery of oil in Alberta launched Canada’s modern energy sector.",
                    date: "1947",
                },
                {
                    title: "Voting for Japanese Canadians",
                    subtitle:
                        "The right to vote was granted to Japanese Canadians.",
                    date: "1948",
                },
                {
                    title: "The Quiet Revolution",
                    subtitle:
                        "Quebec experienced rapid social and political change during the era known as 'The Quiet Revolution'.",
                    date: "1960s",
                },
                {
                    title: "Aboriginal Voting Rights",
                    subtitle:
                        "Voting rights were granted to Aboriginal People.",
                    date: "1960",
                },
                {
                    title: "Pensions",
                    subtitle:
                        "The Canada and Quebec Pension Plans were created.",
                    date: "1965",
                },
                {
                    title: "French and English Languages",
                    subtitle:
                        "The Official Languages Act guarantees federal government services in both French and English.",
                    date: "1969",
                },
                {
                    title: "Cancer Fight",
                    subtitle:
                        "Terry Fox launched the 'Marathon of Hope' to raise funds for cancer research, becoming a Canadian hero.",
                    date: "1980",
                },
            ],
        },
        {
            chapter: 6,
            timeline: [
                {
                    title: "Constitution Act, Monarchy & Responsible Government",
                    subtitle:
                        "The British North America Act, also known as the Constitution Act, was adopted by the British Parliament. Canada became a constitutional monarchy, and the responsibilities of federal and provincial governments were defined.",
                    date: "1867",
                },
            ],
        },
        {
            chapter: 7,
            timeline: [],
        },
        {
            chapter: 8,
            timeline: [],
        },
        {
            chapter: 9,
            timeline: [
                {
                    title: "The Maple Leaf",
                    subtitle:
                        "Canada adopted the maple leaf as a national symbol.",
                    date: "1700s",
                },
                {
                    title: "Ice Hockey",
                    subtitle: "Ice hockey was invented in Canada.",
                    date: "1800s",
                },
                {
                    title: "The Victoria Cross",
                    subtitle:
                        "The highest honor, the Victoria Cross, began to be awarded.",
                    date: "1854",
                },
                {
                    title: "Parliament Buildings",
                    subtitle:
                        "The buildings for the Parliament of Canada were completed.",
                    date: "1860s",
                },
                {
                    title: "The Flag Colors",
                    subtitle:
                        "Canada's national colors (white and red) were chosen by King George V.",
                    date: "1921",
                },
                {
                    title: "Peace Tower",
                    subtitle:
                        "The Peace Tower, built in honor of the First World War, was completed.",
                    date: "1927",
                },
                {
                    title: "Canada’s Monarch (now King Charles III)",
                    subtitle: "Queen Elizabeth II became Canada's monarch.",
                    date: "1952",
                },
                {
                    title: "Flag",
                    subtitle:
                        "For the first time, the modern Canadian flag was raised.",
                    date: "1965",
                },
                {
                    title: "French and English Languages",
                    subtitle:
                        "The Official Languages Act guaranteed French and English services in Canada's federal government.",
                    date: "1969",
                },
                {
                    title: "Honours System",
                    subtitle:
                        "The Order of Canada became the foundation of Canada's own honours system.",
                    date: "1967",
                },
                {
                    title: "National Anthem",
                    subtitle: "'O Canada' was declared the national anthem.",
                    date: "1980",
                },
            ],
        },
        {
            chapter: 10,
            timeline: [
                {
                    title: "Free Trade",
                    subtitle:
                        "Canada implemented free trade agreements with the United States.",
                    date: "1988",
                },
            ],
        },
        {
            chapter: 11,
            timeline: [],
        },
    ];

    // Find the chapter's timeline based on the chapter prop
    const selectedChapter = accordion.find(
        (item) => String(item.chapter) === chapter
    );

    return (
        <div className="container mx-auto">
            <div className="p-4 mt-10 mx-auto max-w-screen-lg sm:mx-4 md:mx-10 lg:mx-20 xl:mx-8 ">
                {selectedChapter ? (
                    <VerticalTimeline lineColor="rgb(81,81,81)">
                        {selectedChapter.timeline.map((t, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={{}}
                                contentArrowStyle={{
                                    borderRight: "7px solid rgb(81, 81, 81)",
                                }}
                                position={"right"}
                                date={
                                    <div className="text-xl ml-4 font-bold text-black">
                                        {t.date}
                                    </div>
                                }
                                {...exclamationIcon}
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
                ) : (
                    <p>No timeline found for this chapter.</p>
                )}
            </div>
        </div>
    );
}
