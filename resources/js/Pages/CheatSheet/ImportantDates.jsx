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
                    desc: "1215",
                },
                {
                    icon: exclamationIcon,
                    title: "Charter of Rights & Amended Constitution",
                    subtitle:
                        "The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms.",
                    desc: "1982",
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
                    desc: "1604",
                },
                {
                    icon: exclamationIcon,
                    title: "Aboriginal Territorial Rights",
                    subtitle:
                        "The territorial rights of the Aboriginal People were first guaranteed in 1763.",
                    desc: "1763",
                },
                {
                    icon: exclamationIcon,
                    title: "Canada’s Constitutional Document",
                    subtitle:
                        "Canada’s original constitutional document was created in 1867.",
                    desc: "1867",
                },
                {
                    icon: exclamationIcon,
                    title: "The “First Nations” Term",
                    subtitle:
                        "The term “First Nations” became popular in the 1970s.",
                    desc: "1970s",
                },
            ],
        },
        {
            header: "Canada's History",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "Magna Carta / Great charter of freedoms",
                    subtitle: "Magna carta is signed in England.",
                    desc: "2015",
                },
                {
                    icon: exclamationIcon,
                    title: "Charter of Rights & Amended Constitution",
                    subtitle:
                        "The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms.",
                    desc: "1982",
                },
            ],
        },
        {
            header: "Rights and Responsibilities",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "Magna Carta / Great charter of freedoms",
                    subtitle: "Magna carta is signed in England.",
                    desc: "2015",
                },
                {
                    icon: exclamationIcon,
                    title: "Charter of Rights & Amended Constitution",
                    subtitle:
                        "The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms.",
                    desc: "1982",
                },
            ],
        },
        {
            header: "Rights and Responsibilities",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "Magna Carta / Great charter of freedoms",
                    subtitle: "Magna carta is signed in England.",
                    desc: "2015",
                },
                {
                    icon: exclamationIcon,
                    title: "Charter of Rights & Amended Constitution",
                    subtitle:
                        "The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms.",
                    desc: "1982",
                },
            ],
        },
        {
            header: "Rights and Responsibilities",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "Magna Carta / Great charter of freedoms",
                    subtitle: "Magna carta is signed in England.",
                    desc: "2015",
                },
                {
                    icon: exclamationIcon,
                    title: "Charter of Rights & Amended Constitution",
                    subtitle:
                        "The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms.",
                    desc: "1982",
                },
            ],
        },
        {
            header: "Rights and Responsibilities",
            timeline: [
                {
                    icon: exclamationIcon,
                    title: "Magna Carta / Great charter of freedoms",
                    subtitle: "Magna carta is signed in England.",
                    desc: "2015",
                },
                {
                    icon: exclamationIcon,
                    title: "Charter of Rights & Amended Constitution",
                    subtitle:
                        "The Constitution of Canada was amended in 1982 to entrench the Canadian Charter of Rights and Freedoms.",
                    desc: "1982",
                },
            ],
        },
        // You can add more accordion objects here
    ];
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head title="Important Dates" />
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
                                    {...t.icon}
                                >
                                    <h1 className="text-2xl">{t.title}</h1>
                                    {t.subtitle && (
                                        <h4 className="vertical-timeline-element-subtitle">
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
