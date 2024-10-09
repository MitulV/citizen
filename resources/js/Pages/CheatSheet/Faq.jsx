import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function Faq({ auth }) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={true}>
            <Head>
                <title>
                    Frequently Asked Questions - Canadian Citizenship Test -
                    CitizenTestPrep
                </title>
                <meta
                    name="description"
                    content="Check out FAQs about the Canadian Citizenship Test for clear answers to common concerns!"
                />
            </Head>
            <div className="p-4 mx-auto max-w-screen-lg sm:mx-10 md:mx-20 lg:mx-40 xl:mx-8 bg-slate-50 rounded-2xl">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        Who’s qualified to take the Canadian Citizenship Test?
                    </AccordionHeader>
                    <AccordionBody>
                        Anybody between the ages of 18-54 years at the time of
                        applying is qualified to take the citizenship test. The
                        test is used to determine if one has enough knowledge of
                        Canada and the privileges that come with being a
                        citizen. If you are above 55 years at the time of
                        applying, you don’t have to take this test. However, if
                        you happen to turn 55 years as the application is being
                        processed, you can still have the test if you were below
                        55 years when signing your application.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        Is the Canadian Citizenship Test difficult?
                    </AccordionHeader>
                    <AccordionBody>
                        The test covers various subjects and topics, which are
                        found in the study guide titled Discover Canada: the
                        (rights and responsibilities) of citizenship. You should
                        make sure you study the guide as you prepare for the
                        test. On the actual test, you can expect questions such
                        as: The ideas and facts that Discover Canada presents;
                        Your knowledge about Canada’s history, institutions,
                        values, and history; And the responsibilities and rights
                        that being a citizen present.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        After applying for Citizenship, how long does it take
                        before you do the Citizenship Test?
                    </AccordionHeader>
                    <AccordionBody>
                        The time it takes between submitting the application and
                        doing the Canadian citizenship test varies depending on
                        individual applications. For instance, it varies
                        depending on the processing times and different cases.
                        We will send you an email to let you know about the
                        location and time of the test. It’s the official
                        confirmation that you will take the citizenship test.
                        You should ensure you check the CLIENT APPLICATION
                        STATUS service to know when your notice is mailed. If
                        you move your location, you should make sure you inform
                        us. Update your current address online. If you require
                        fast processing, you should check if you qualify.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                        Where can I find test questions to help me prepare for
                        the Citizenship Test?
                    </AccordionHeader>
                    <AccordionBody>
                        CitizenTest has over 600+ test questions to get you
                        ready for exam day.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(5)}>
                        What happens if I fail the Citizenship Test?
                    </AccordionHeader>
                    <AccordionBody>
                        If you failed the official Canadian Citizenship Test,
                        IRCC will arrange for you to take another test if you
                        still meet the criteria for citizenship. Normally, the
                        second test follows the first one by 4 to 8 weeks,
                        though this can vary. If you fail a 2nd time, IRCC will
                        send you a notification requesting that you appear at a
                        hearing with a citizenship authority. IRCC will reject
                        your application if, after three tries, you are still
                        unable to pass the test. To try once more, you must
                        restart the entire Citizenship application process.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(6)}>
                        What happens if I failed to attend my appointment with
                        IRCC? Can it be rescheduled?
                    </AccordionHeader>
                    <AccordionBody>
                        Yes. If one is not available on the time and date of the
                        appointment, you can write a letter with reasons why you
                        can’t attend. You should send it to the IRCC office that
                        you were to make the appointment. You can send the
                        letter by mail, using the Web form, or online. Your
                        meeting can be rescheduled to a different date. If you
                        aren’t able to attend the appointment, you should
                        contact us within a specific period. The notice that is
                        sent when you are being invited will inform you of the
                        period that you should contact us. You should use the
                        Web form to explain why you missed the appointment.
                        Remember that failure to do this will lead to the
                        closing of your application. You will need to apply
                        again and pay the necessary fees.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(7)}>
                        How can I know if I passed the Canadian Citizenship
                        Test?
                    </AccordionHeader>
                    <AccordionBody>
                        You will receive the results of the test just after you
                        take it. If you pass the test and meet the requirements
                        of being a citizen, you may receive the citizenship
                        ceremony date at the same period that you receive the
                        results. If we fail to provide you with the date, you
                        will receive a letter that informs you of the time and
                        date of the ceremony. You can also obtain the letter 2
                        to 4 weeks before the actual ceremony. The event will
                        usually take place within 6 months after you pass the
                        citizenship test. If you don’t pass the test in the
                        first instance, you can choose to write it again. If you
                        pass it on the second try, you will receive a letter by
                        email or date, just as you would have received it during
                        the first exam. If you’re required to attend a hearing
                        with the citizenship judge or officer, you will be
                        notified by a letter after the interview. It will inform
                        you if the judge or officer has provided you with
                        citizenship and the date of the ceremony.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(8)}>
                        What is the format of the citizenship test?
                    </AccordionHeader>
                    <AccordionBody>
                        The citizenship test is a multiple-choice exam
                        consisting of 20 questions. Test takers are given 30
                        minutes to complete the test.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(9)}>
                        What is the pass mark for the citizenship test?
                    </AccordionHeader>
                    <AccordionBody>
                        To pass the citizenship test, test takers must answer at
                        least 15 out of 20 questions correctly, or a 75% pass
                        mark.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 10}
                    icon={<Icon id={10} open={open} />}
                >
                    <AccordionHeader onClick={() => handleOpen(10)}>
                        Can I take the citizenship test in my native language?
                    </AccordionHeader>
                    <AccordionBody>
                        Test takers have the option of taking the citizenship
                        test in one of the 20 languages that are supported by
                        the test. However, test takers must also demonstrate an
                        ability to communicate in English or French at a basic
                        level in order to become a Canadian citizen.
                    </AccordionBody>
                </Accordion>
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
