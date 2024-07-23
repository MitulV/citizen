import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

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

    const timeline = [
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
    ];
    return (
        <>
            {" "}
            <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
                <Head title="Important Dates" />

                <VerticalTimeline lineColor="rgb(81,81,81)">
                    {timeline.map((t, i) => {
                        const contentStyle = {};
                        const arrowStyle = {
                            borderRight: "7px solid  rgb(81, 81, 81)",
                        };
                        return (
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={contentStyle}
                                contentArrowStyle={arrowStyle}
                                position={"right"}
                                {...t.icon}
                            >
                                {t.title ? (
                                    <React.Fragment>
                                        <h1 className="text-2xl">{t.title}</h1>
                                        {t.subtitle && (
                                            <h4 className="vertical-timeline-element-subtitle">
                                                {t.subtitle}
                                            </h4>
                                        )}
                                        {t.desc && <p>{t.desc}</p>}
                                    </React.Fragment>
                                ) : undefined}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </AuthenticatedLayout>
        </>
    );
}
