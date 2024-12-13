import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import GuestLayout from "@/Layouts/GuestLayout";

export default function Faqs({}) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <GuestLayout>
            <Head>
                <title>Frequently Asked Questions - CitizenTestPrep</title>
                <meta
                    name="description"
                    content="Explore the Frequently Asked Questions about the Canadian Citizenship Test at CitizenTestPrep."
                />
            </Head>

            <div className="container mx-auto max-w-screen-lg  rounded-2xl px-4 md:px-16 lg:px-8 xl:px-44">
                <h1 className="text-4xl font-bold m-10 text-center">
                    Frequently Asked Questions
                </h1>
                <Accordion
                    className="p-5"
                    open={open === 1}
                    icon={<Icon id={1} open={open} />}
                >
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        Who can take the Canadian Citizenship Test?
                    </AccordionHeader>
                    <AccordionBody className="text-base">
                        Anyone aged 18 to 54 when they apply for citizenship is
                        required to take the citizenship test. This test checks
                        if you know enough about Canada and understand the
                        rights and responsibilities of being a citizen. If you
                        are 55 or older when you apply, you don’t need to take
                        the test. However, if you turn 55 while your application
                        is being processed, you may still need to take the test
                        if you were under 55 when you applied.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className="p-5"
                    open={open === 2}
                    icon={<Icon id={2} open={open} />}
                >
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        Is the Canadian Citizenship Test hard?
                    </AccordionHeader>
                    <AccordionBody className="text-base">
                        The test is based on the Discover Canada guide, which
                        explains Canadian history, values, institutions, and the
                        rights and responsibilities of citizenship. If you study
                        the guide carefully, you should be well-prepared. The
                        test includes questions about: Facts and ideas from
                        Discover Canada Canada’s history, institutions, and
                        values The responsibilities and rights of Canadian
                        citizens
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className="p-5"
                    open={open === 3}
                    icon={<Icon id={3} open={open} />}
                >
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        How long after applying will I take the test?
                    </AccordionHeader>
                    <AccordionBody className="text-base">
                        The time between applying and taking the test depends on
                        how quickly your application is processed. You will
                        receive an email with the test date and location. Check
                        the Client Application Status service regularly to track
                        updates. If you change your address, update it online to
                        avoid missing any notices.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className="p-5"
                    open={open === 4}
                    icon={<Icon id={4} open={open} />}
                >
                    <AccordionHeader onClick={() => handleOpen(4)}>
                        What happens if I fail the citizenship test?
                    </AccordionHeader>
                    <AccordionBody className="text-base">
                        If you fail the first test, you can retake it in 4 to 8
                        weeks (this timing may vary). If you fail a second time,
                        you will need to attend a hearing with a citizenship
                        official. If you fail the hearing, your application will
                        be denied, and you’ll need to start over by submitting a
                        new application and paying the fees.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className="p-5"
                    open={open === 5}
                    icon={<Icon id={5} open={open} />}
                >
                    <AccordionHeader onClick={() => handleOpen(5)}>
                        What if I miss my appointment with IRCC?
                    </AccordionHeader>
                    <AccordionBody className="text-base">
                        If you can’t attend your appointment, inform IRCC as
                        soon as possible by writing to them. You can send your
                        request to reschedule by mail, using the Web form, or
                        online. Include your reason for missing the appointment.
                        If you miss the appointment and don’t contact IRCC
                        within the time specified in the notice, your
                        application will be closed, and you’ll need to apply
                        again and pay the fees.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className="p-5"
                    open={open === 6}
                    icon={<Icon id={6} open={open} />}
                >
                    <AccordionHeader onClick={() => handleOpen(6)}>
                        How do I know if I passed the test?
                    </AccordionHeader>
                    <AccordionBody className="text-base">
                        You will get your results immediately after taking the
                        test. If you pass and meet all the other requirements,
                        you may receive your citizenship ceremony date at the
                        same time. If not, you will get a letter with the
                        ceremony details later. If you don’t pass the test the
                        first time, you can retake it. If you pass the second
                        time, you will get a letter with your ceremony date. If
                        a hearing is required, you will get a letter afterward
                        letting you know if the judge or officer granted you
                        citizenship and when the ceremony will take place.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className="p-5"
                    open={open === 7}
                    icon={<Icon id={7} open={open} />}
                >
                    <AccordionHeader onClick={() => handleOpen(7)}>
                        What is the format of the citizenship test?
                    </AccordionHeader>
                    <AccordionBody className="text-base">
                        The test has 20 multiple-choice questions, and you have
                        30 minutes to complete it.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className="p-5"
                    open={open === 8}
                    icon={<Icon id={8} open={open} />}
                >
                    <AccordionHeader onClick={() => handleOpen(8)}>
                        What score do I need to pass?
                    </AccordionHeader>
                    <AccordionBody className="text-base">
                        You must answer at least 15 out of 20 questions
                        correctly (75%) to pass.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className="p-5"
                    open={open === 9}
                    icon={<Icon id={9} open={open} />}
                >
                    <AccordionHeader onClick={() => handleOpen(9)}>
                        Can I take the test in my native language?
                    </AccordionHeader>
                    <AccordionBody className="text-base">
                        You can take the test in one of the 20 supported
                        languages. However, to become a Canadian citizen, you
                        also need to show basic communication skills in English
                        or French.
                    </AccordionBody>
                </Accordion>
            </div>
        </GuestLayout>
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
