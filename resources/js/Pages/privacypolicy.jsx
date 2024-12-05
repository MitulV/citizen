import { Link, Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import GuestLayout from "@/Layouts/GuestLayout";

export default function PrivacyPolicy({ auth, chapters }) {
    return (
        <>
            <GuestLayout>
                <Head>
                    <title>Privacy Policy - CitizenTestPrep</title>
                    <meta
                        name="description"
                        content="Discover CitizenTestPrep's Privacy Policy, detailing how we collect, use, and protect your personal information."
                    />
                </Head>
                <div className="bg-slate-50 min-h-screen">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                        <div className="max-w-3xl mx-auto py-12">
                            {/* Section 1 */}
                            <div className="text-center mb-8">
                                <h1 className="text-4xl font-bold mb-4">
                                    Privacy Policy of CitizenTestPrep
                                </h1>
                                <p className="text-lg mb-4 text-zinc-600 text-left">
                                    <span className="font-semibold">
                                        {" "}
                                        Effective Date:
                                    </span>{" "}
                                    June 14, 2024
                                </p>
                                <p className="text-lg text-left text-zinc-600 mb-8">
                                    CitizenTestPrep.ca ("we", "our", or "us") is
                                    committed to protecting the privacy of our
                                    users ("you" or "your"). This Privacy Policy
                                    explains how we collect, use, disclose, and
                                    safeguard your information when you visit
                                    our website CitizenTestPrep.ca. This
                                    document can be printed for reference by
                                    using the print command in the settings of
                                    any browser.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="py-4 rounded-lg ">
                                <div className="container mx-auto px-4">
                                    <h2 className="text-2xl font-bold mb-4">
                                        Detailed Information on the Processing
                                        of Personal Data
                                    </h2>
                                    <h3 className="text-xl font-bold mb-2 mt-10">
                                        Advertising
                                    </h3>
                                    <p className="text-lg mb-4 font-semibold text-zinc-600">
                                        Google AdSense (Google LLC):
                                    </p>
                                    <ul className="list-disc list-inside mb-4 text-zinc-600">
                                        <li className="mb-2">
                                            Personal Data: Cookies, Usage Data
                                        </li>
                                        <li className="mb-2">
                                            Privacy Policy:{" "}
                                            <a
                                                href=""
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-zinc-600"
                                            >
                                                Google AdSense Privacy Policy
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            Opt Out:{" "}
                                            <a
                                                href=""
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-zinc-600"
                                            >
                                                Google Ad Settings
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="text-lg mb-4 text-zinc-600 font-semibold">
                                        MoPub (MoPub Inc.):
                                    </p>
                                    <ul className="list-disc list-inside mb-4 text-zinc-600">
                                        <li className="mb-2">
                                            Personal Data: Cookies, Usage Data
                                        </li>
                                        <li className="mb-2">
                                            Privacy Policy:{" "}
                                            <a
                                                href=""
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-zinc-600"
                                            >
                                                MoPub Privacy Policy
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="text-lg mb-4 text-zinc-600">
                                        This document can be printed for
                                        reference by using the print command in
                                        the settings of any browser.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-2 mt-10">
                                        Analytics
                                    </h2>
                                    <p className="text-lg mb-4 text-zinc-600 ">
                                        Analytics services enable us to monitor
                                        and analyze web traffic and user
                                        behavior.
                                    </p>
                                    <p className="text-lg mb-4 text-zinc-600 font-semibold">
                                        Google Analytics (Universal Analytics)
                                        (Google Inc.):
                                    </p>
                                    <ul className="list-disc list-inside mb-4 text-zinc-600">
                                        <li className="mb-2">
                                            Personal Data: Cookies, Usage Data
                                        </li>
                                        <li className="mb-2">
                                            Privacy Policy:{" "}
                                            <a
                                                href=""
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-zinc-600"
                                            >
                                                Google Analytics Privacy Policy
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            Opt Out:{" "}
                                            <a
                                                href=""
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-zinc-600"
                                            >
                                                Google Analytics Opt Out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 2 - Detailed Information on the Processing of Personal Data */}
                            <div className="py-4 rounded-lg mb-8">
                                <div className="container mx-auto px-4">
                                    {/* Content Commenting */}
                                    <h2 className="text-2xl font-bold mb-2 ">
                                        Content Commenting
                                    </h2>
                                    <p className="text-lg mb-4 text-zinc-600">
                                        Content commenting services allow users
                                        to make and publish comments on our
                                        content.
                                    </p>
                                    <p className="text-lg mb-4 text-zinc-600 font-semibold">
                                        Facebook Comments (Facebook, Inc.):
                                    </p>
                                    <ul className="list-disc list-inside mb-4 text-zinc-600">
                                        <li className="mb-2">
                                            Personal Data: Cookies, Usage Data
                                        </li>
                                        <li className="mb-2">
                                            Privacy Policy:{" "}
                                            <a
                                                href=""
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-red-500"
                                            >
                                                Facebook Comments Privacy Policy
                                            </a>
                                        </li>
                                    </ul>

                                    {/* Content Performance and Features Testing */}
                                    <h2 className="text-2xl font-bold mb-2 mt-10">
                                        Content Performance and Features Testing
                                        (A/B Testing)
                                    </h2>
                                    <p className="text-lg mb-4 text-zinc-600">
                                        These services allow us to track and
                                        analyze user responses to changes in our
                                        website.
                                    </p>
                                    <p className="text-lg mb-4 text-zinc-600 font-semibold">
                                        Visual Website Optimizer (Wingify):
                                    </p>
                                    <ul className="list-disc list-inside mb-4">
                                        <li className="mb-2">
                                            Personal Data: Cookies, Usage Data
                                        </li>
                                        <li className="mb-2">
                                            Privacy Policy: Visual Website
                                            Optimizer Privacy Policy :{" "}
                                        </li>
                                    </ul>

                                    {/* Displaying Content from External Platforms */}
                                    <div className="py-2 rounded-lg mb-8">
                                        <div className="container mx-auto">
                                            <h2 className="text-2xl font-bold mb-4">
                                                Displaying Content from External
                                                Platforms
                                            </h2>

                                            <p className="text-lg mb-4 text-zinc-600">
                                                These services allow us to
                                                display content hosted on
                                                external platforms directly on
                                                our website.
                                            </p>

                                            <ul className="list-disc">
                                                <h2 className="text-xl font-bold mb-2 text-zinc-600">
                                                    Google Fonts (Google Inc.)
                                                </h2>
                                                <li className="mb-6">
                                                    <ul className="ml-2">
                                                        <li className="text-lg mb-1 text-zinc-600">
                                                            Personal Data: Usage
                                                            Data, Various Types
                                                            of Data
                                                        </li>
                                                        <li className="text-lg mb-1 text-zinc-600">
                                                            Privacy Policy:{" "}
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-zinc-600"
                                                            >
                                                                Google Fonts
                                                                Privacy Policy
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="mb-6">
                                                    <h2 className="text-xl font-bold mb-2 text-zinc-600">
                                                        Adobe Fonts (Adobe
                                                        Systems Incorporated)
                                                    </h2>
                                                    <ul className="ml-4">
                                                        <li className="text-lg mb-1 text-zinc-600">
                                                            Personal Data: Usage
                                                            Data, Various Types
                                                            of Data
                                                        </li>
                                                        <li className="text-lg mb-1 text-zinc-600">
                                                            Privacy Policy:{" "}
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-red-600"
                                                            >
                                                                Adobe Fonts
                                                                Privacy Policy
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="mb-6">
                                                    <h2 className="text-xl font-bold mb-2 text-zinc-600">
                                                        Google Maps Widget
                                                        (Google Inc.)
                                                    </h2>
                                                    <ul className="ml-4">
                                                        <li className="text-lg mb-1 text-zinc-600">
                                                            Personal Data:
                                                            Cookies, Usage Data
                                                        </li>
                                                        <li className="text-lg mb-1 text-zinc-600">
                                                            Privacy Policy:{" "}
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-zinc-600"
                                                            >
                                                                Google Maps
                                                                Privacy Policy
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="mb-6">
                                                    <h2 className="text-xl font-bold mb-2 text-zinc-600">
                                                        YouTube Video Widget
                                                        (Google Inc.)
                                                    </h2>
                                                    <ul className="ml-4">
                                                        <li className="text-lg mb-1 text-zinc-600">
                                                            Personal Data:
                                                            Cookies, Usage Data
                                                        </li>
                                                        <li className="text-lg mb-1 text-zinc-600">
                                                            Privacy Policy:{" "}
                                                            <a
                                                                href="#"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-zinc-600"
                                                            >
                                                                YouTube Privacy
                                                                Policy
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="py-2 rounded-lg mb-8">
                                        <div className="container">
                                            {/* Displaying Content from External Platforms */}
                                            <h2 className="text-2xl font-bold mb-4 ">
                                                Displaying Content from External
                                                Platforms
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                These services allow us to
                                                display content hosted on
                                                external platforms directly on
                                                our website.
                                            </p>

                                            {/* Google Fonts */}
                                            <h2 className="text-xl font-bold mb-2 text-zinc-600">
                                                Google Fonts (Google Inc.)
                                            </h2>
                                            <ul className="list-disc ">
                                                <li className="text-lg mb-1 text-zinc-600 ">
                                                    Personal Data: Usage Data,
                                                    Various Types of Data
                                                </li>
                                                <li className="text-lg mb-1 text-zinc-600 ">
                                                    Privacy Policy:{" "}
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-zinc-600"
                                                    >
                                                        Google Fonts Privacy
                                                        Policy
                                                    </a>
                                                </li>
                                            </ul>

                                            {/* Adobe Fonts */}
                                            <h2 className="text-xl font-bold mb-2 text-zinc-600 ">
                                                Adobe Fonts (Adobe Systems
                                                Incorporated)
                                            </h2>
                                            <ul className="list-disc mb-4">
                                                <li className="text-lg mb-1 text-zinc-600 ">
                                                    Personal Data: Usage Data,
                                                    Various Types of Data
                                                </li>
                                                <li className="text-lg mb-1 text-zinc-600 ">
                                                    Privacy Policy:{" "}
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-red-600"
                                                    >
                                                        Adobe Fonts Privacy
                                                        Policy
                                                    </a>
                                                </li>
                                            </ul>

                                            {/* Google Maps Widget */}
                                            <h2 className="text-xl font-bold mb-2 text-zinc-600 ">
                                                Google Maps Widget (Google Inc.)
                                            </h2>
                                            <ul className="list-disc mb-4">
                                                <li className="text-lg mb-1 text-zinc-600 ">
                                                    Personal Data: Cookies,
                                                    Usage Data
                                                </li>
                                                <li className="text-lg mb-1 text-zinc-600 ">
                                                    Privacy Policy:{" "}
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-zinc-600"
                                                    >
                                                        Google Maps Privacy
                                                        Policy
                                                    </a>
                                                </li>
                                            </ul>

                                            {/* YouTube Video Widget */}
                                            <h2 className="text-xl font-bold mb-2 text-zinc-600 ">
                                                YouTube Video Widget (Google
                                                Inc.)
                                            </h2>
                                            <ul className="list-disc mb-4">
                                                <li className="text-lg mb-1 text-zinc-600 ">
                                                    Personal Data: Cookies,
                                                    Usage Data
                                                </li>
                                                <li className="text-lg mb-1 text-zinc-600">
                                                    Privacy Policy:{" "}
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-zinc-600"
                                                    >
                                                        YouTube Privacy Policy
                                                    </a>
                                                </li>
                                            </ul>

                                            {/* Handling Payments */}
                                            <h2 className="text-2xl font-bold mb-4 ">
                                                Handling Payments
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600 ">
                                                Payment processing services
                                                enable us to process payments
                                                securely.
                                            </p>

                                            {/* Apple Pay */}
                                            <h2 className="text-xl font-bold mb-2 text-zinc-600 ">
                                                Apple Pay (Apple Inc.)
                                            </h2>
                                            <ul className="list-disc  mb-4">
                                                <li className="text-lg mb-1 text-zinc-600 ">
                                                    Personal Data: Various Types
                                                    of Data
                                                </li>
                                                <li className="text-lg mb-1 text-zinc-600">
                                                    Privacy Policy:{" "}
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-zinc-600"
                                                    >
                                                        Apple Pay Privacy Policy
                                                    </a>
                                                </li>
                                            </ul>

                                            {/* Stripe */}
                                            <h2 className="text-xl font-bold mb-2 text-zinc-600 ">
                                                Stripe (Stripe Inc.)
                                            </h2>
                                            <ul className="list-disc  mb-4">
                                                <li className="text-lg mb-1 text-zinc-600 ">
                                                    Personal Data: Various Types
                                                    of Data
                                                </li>
                                                <li className="text-lg mb-1 text-zinc-600">
                                                    Privacy Policy:{" "}
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-zinc-600"
                                                    >
                                                        Stripe Privacy Policy
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="py-2 rounded-lg mb-8">
                                        <div className="container mx-auto">
                                            <h2 className="text-2xl mb-4  font-bold">
                                                Hosting and Backend
                                                Infrastructure
                                            </h2>

                                            <p className="text-lg mb-4 text-zinc-600">
                                                These services host data and
                                                files that enable our website to
                                                operate.
                                            </p>

                                            <h2 className="text-xl  font-bold mb-2 text-zinc-600">
                                                Amazon Web Services (AWS)
                                                (Amazon Web Services, Inc.)
                                            </h2>
                                            <ul className="list-disc mb-4">
                                                <li className="text-lg text-zinc-600">
                                                    Personal Data: Various Types
                                                    of Data
                                                </li>
                                                <li className="text-lg  text-zinc-600">
                                                    Privacy Policy:{" "}
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-red-600"
                                                    >
                                                        AWS Privacy Policy
                                                    </a>
                                                </li>
                                            </ul>

                                            <h2 className="text-2xl  mb-4 font-bold">
                                                Interaction with External Social
                                                Networks and Platforms
                                            </h2>

                                            <p className="text-lg mb-4 text-zinc-600">
                                                These services allow interaction
                                                with social networks or other
                                                external platforms directly from
                                                our website.
                                            </p>

                                            <h2 className="text-xl mb-2 text-zinc-600">
                                                Facebook Like Button and Social
                                                Widgets (Facebook, Inc.)
                                            </h2>
                                            <ul className="list-disc mb-4">
                                                <li className="text-lg text-zinc-600">
                                                    Personal Data: Cookies,
                                                    Usage Data
                                                </li>
                                                <li className="text-lg  text-zinc-600">
                                                    Privacy Policy:{" "}
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-red-600"
                                                    >
                                                        Facebook Privacy Policy
                                                    </a>
                                                </li>
                                            </ul>

                                            <h2 className="text-xl text-zinc-600">
                                                Twitter Tweet Button and Social
                                                Widgets (X Corp.)
                                            </h2>
                                            <ul className="list-disc mb-4">
                                                <li className="text-lg text-zinc-600">
                                                    Personal Data: Cookies,
                                                    Usage Data
                                                </li>
                                                <li className="text-lgtext-zinc-600">
                                                    Privacy Policy:{" "}
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-red-600"
                                                    >
                                                        Twitter Privacy Policy
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Additional sections can be added similarly */}
                                </div>
                            </div>

                            {/* Section 3 - Further Information about the Processing of Personal Data */}
                            <div className=" py-2 rounded-lg mb-8">
                                <div className="container mx-auto ">
                                    <h2 className="text-3xl font-bold mb-4">
                                        Further Information about the Processing
                                        of Personal Data
                                    </h2>

                                    {/* Legal Basis of Processing */}
                                    <h2 className="text-xl font-bold my-4">
                                        Legal Basis of Processing
                                    </h2>
                                    <p className="text-lg mb-2 text-zinc-600">
                                        We may process Personal Data if one of
                                        the following applies:
                                    </p>
                                    <ul className="list-disc list-inside mb-4 text-zinc-600">
                                        <li className="mb-2">
                                            You have given your consent for one
                                            or more specific purposes.
                                        </li>
                                        <li className="mb-2">
                                            Provision of data is necessary for
                                            the performance of an agreement with
                                            you and/or for any pre-contractual
                                            obligations thereof.
                                        </li>
                                        <li className="mb-2">
                                            Processing is necessary for
                                            compliance with a legal obligation
                                            to which we are subject.
                                        </li>
                                        <li className="mb-2">
                                            Processing is related to a task that
                                            is carried out in the public
                                            interest or in the exercise of
                                            official authority vested in us.
                                        </li>
                                        <li className="mb-2">
                                            Processing is necessary for the
                                            purposes of the legitimate interests
                                            pursued by us or by a third party.
                                        </li>
                                    </ul>

                                    {/* Retention Time */}
                                    <h2 className="text-2xl font-bold mb-2">
                                        Retention Time
                                    </h2>
                                    <p className="text-lg mb-4 text-zinc-600">
                                        Personal Data will be processed and
                                        stored for as long as required by the
                                        purpose they have been collected for, or
                                        as long as you have provided consent, or
                                        as required by law.
                                    </p>
                                    <div className="py-2 rounded-lg mb-8">
                                        <div className="container mx-auto">
                                            <h2 className="text-2xl font-bold mb-4">
                                                Your Rights
                                            </h2>
                                            <p className="text-lg mb-4 ">
                                                We may process Personal Data if
                                                one of the following applies:
                                            </p>
                                            <ul className="list-disc list-inside mb-4 text-lg text-zinc-600">
                                                <li>
                                                    You have given your consent
                                                    for one or more specific
                                                    purposes.
                                                </li>
                                                <li>
                                                    Provision of data is
                                                    necessary for the
                                                    performance of an agreement
                                                    with you and/or for any
                                                    pre-contractual obligations
                                                    thereof.
                                                </li>
                                                <li>
                                                    Processing is necessary for
                                                    compliance with a legal
                                                    obligation to which we are
                                                    subject.
                                                </li>
                                                <li>
                                                    Processing is related to a
                                                    task that is carried out in
                                                    the public interest or in
                                                    the exercise of official
                                                    authority vested in us.
                                                </li>
                                                <li>
                                                    Processing is necessary for
                                                    the purposes of the
                                                    legitimate interests pursued
                                                    by us or by a third party.
                                                </li>
                                            </ul>

                                            <h2 className="text-2xl font-bold mb-4">
                                                Changes to This Privacy Policy
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                We reserve the right to make
                                                changes to this Privacy Policy
                                                at any time by notifying you on
                                                this page. It is strongly
                                                recommended to check this page
                                                often. Should the changes affect
                                                processing activities performed
                                                on the basis of your consent, we
                                                shall collect new consent from
                                                you, where required.
                                            </p>

                                            <h2 className="text-2xl font-bold mb-4 ">
                                                Definitions and Legal References
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                Personal Data (or Data): Any
                                                information that directly,
                                                indirectly, or in connection
                                                with other information —
                                                including a personal
                                                identification number — allows
                                                for the identification or
                                                identifiability of a natural
                                                person.
                                            </p>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                Usage Data: Information
                                                collected automatically through
                                                our website, which can include:
                                                the IP addresses or domain names
                                                of the computers utilized by the
                                                Users, the URI addresses, the
                                                time of the request, the method
                                                utilized to submit the request
                                                to the server, the size of the
                                                file received in response, the
                                                numerical code indicating the
                                                status of the server's answer,
                                                the country of origin, the
                                                features of the browser and the
                                                operating system utilized by the
                                                User, the various time details
                                                per visit and other parameters
                                                about the device operating
                                                system and/or the User's IT
                                                environment.
                                            </p>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                User: The individual using
                                                CitizenTestPrep.ca who, unless
                                                otherwise specified, coincides
                                                with the Data Subject.
                                            </p>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                Data Subject: The natural person
                                                to whom the Personal Data
                                                refers.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="py-2 rounded-lg mb-8">
                                        <div className="container mx-auto">
                                            <h2 className="text-2xl font-bold mb-4 ">
                                                Information We Collect
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                The personal information that
                                                you are asked to provide, and
                                                the reasons why you are asked to
                                                provide it, will be made clear
                                                to you at the point we ask you
                                                to provide your personal
                                                information.
                                            </p>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                If you contact us directly, we
                                                may receive additional
                                                information about you such as
                                                your name, email address, phone
                                                number, the contents of the
                                                message and/or attachments you
                                                may send us, and any other
                                                information you may choose to
                                                provide. When you register for
                                                an Account, we may ask for your
                                                contact information, including
                                                items such as name, address,
                                                email address, and telephone
                                                number.
                                            </p>

                                            <h2 className="text-2xl font-bold mb-4">
                                                How We Use Your Information
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                We use the information we
                                                collect in various ways,
                                                including to:
                                            </p>
                                            <ul className="list-disc list-inside mb-4 text-lg text-zinc-600">
                                                <li>
                                                    Provide, operate, and
                                                    maintain our website
                                                </li>
                                                <li>
                                                    Improve, personalize, and
                                                    expand our website
                                                </li>
                                                <li>
                                                    Understand and analyze how
                                                    you use our website
                                                </li>
                                                <li>
                                                    Develop new products,
                                                    services, features, and
                                                    functionality
                                                </li>
                                                <li>
                                                    Communicate with you,
                                                    including for customer
                                                    service, to provide you with
                                                    updates and other
                                                    information relating to the
                                                    website, and for marketing
                                                    and promotional purposes
                                                </li>
                                                <li>
                                                    Send you emails related to
                                                    your active courses
                                                </li>
                                                <li>Find and prevent fraud</li>
                                            </ul>

                                            <h2 className="text-2xl font-bold mb-4">
                                                Log Files
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                CitizenTestPrep follows a
                                                standard procedure of using log
                                                files. These files log visitors
                                                when they visit websites. All
                                                hosting companies do this and
                                                are a part of hosting services’
                                                analytics. The information
                                                collected by log files includes
                                                internet protocol (IP)
                                                addresses, browser type,
                                                Internet Service Provider (ISP),
                                                date and time stamp,
                                                referring/exit pages, and
                                                possibly the number of clicks.
                                                These are not linked to any
                                                information that is personally
                                                identifiable. The purpose of the
                                                information is for analyzing
                                                trends, administering the site,
                                                tracking users’ movement on the
                                                website, and gathering
                                                demographic information.
                                            </p>

                                            <h2 className="text-2xl font-bold mb-4 ">
                                                Cookies
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                Like any other website,
                                                CitizenTestPrep uses ‘cookies’.
                                                These cookies are used to store
                                                information including visitors’
                                                preferences, and the pages on
                                                the website that the visitor
                                                accessed or visited. The
                                                information is used to optimize
                                                the users’ experience by
                                                customizing our web page content
                                                based on visitors’ browser type
                                                and/or other information.
                                            </p>

                                            <h2 className="text-2xl font-bold mb-4">
                                                Advertising Partners Privacy
                                                Policies
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                Third-party ad servers or ad
                                                networks use technologies like
                                                cookies, JavaScript, or Web
                                                Beacons that are used in their
                                                respective advertisements and
                                                links that may appear on
                                                CitizenTestPrep, which are sent
                                                directly to users’ browsers.
                                                They automatically receive your
                                                IP address when this occurs.
                                                These technologies are used to
                                                measure the effectiveness of
                                                their advertising campaigns
                                                and/or to personalize the
                                                advertising content that you see
                                                on websites that you visit.
                                                Please note that CitizenTestPrep
                                                has no access to or control over
                                                these cookies that are used by
                                                third-party advertisers.
                                            </p>

                                            <h2 className="text-2xl font-bold mb-4">
                                                Third Party Privacy Policies
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                CitizenTestPrep’s Privacy Policy
                                                does not apply to other
                                                advertisers or websites. Thus,
                                                we are advising you to consult
                                                the respective Privacy Policies
                                                of these third-party ad servers
                                                for more detailed information.
                                                It may include their practices
                                                and instructions about how to
                                                opt-out of certain options. You
                                                can choose to disable cookies
                                                through your individual browser
                                                options. To know more detailed
                                                information about cookie
                                                management with specific web
                                                browsers, it can be found at the
                                                browsers’ respective websites.
                                            </p>

                                            <h2 className="text-2xl font-bold mb-4 ">
                                                GDPR Data Protection Rights
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                We would like to make sure you
                                                are fully aware of all of your
                                                data protection rights. Every
                                                user is entitled to the
                                                following:
                                            </p>
                                            <ul className="list-disc list-inside mb-4 text-lg text-zinc-600">
                                                <li>
                                                    <span className="font-semibold">
                                                        {" "}
                                                        The right to access
                                                    </span>
                                                    – You have the right to
                                                    request copies of your
                                                    personal data. We may charge
                                                    you a small fee for this
                                                    service.
                                                </li>
                                                <li>
                                                    <span className="font-semibold">
                                                        {" "}
                                                        The right to
                                                        rectification
                                                    </span>
                                                    – You have the right to
                                                    request that we correct any
                                                    information you believe is
                                                    inaccurate. You also have
                                                    the right to request that we
                                                    complete the information you
                                                    believe is incomplete.
                                                </li>
                                                <li>
                                                    <span className="font-semibold">
                                                        {" "}
                                                        The right toerasure
                                                    </span>
                                                    – You have the right to
                                                    request that we erase your
                                                    personal data, under certain
                                                    conditions.
                                                </li>
                                                <li>
                                                    <span className="font-semibold">
                                                        {" "}
                                                        The right to restrict
                                                        processing
                                                    </span>{" "}
                                                    – You have the right to
                                                    request that we restrict the
                                                    processing of your personal
                                                    data, under certain
                                                    conditions.
                                                </li>
                                                <li>
                                                    <span className="font-semibold">
                                                        {" "}
                                                        The right to object to
                                                        processing
                                                    </span>{" "}
                                                    – You have the right to
                                                    object to our processing of
                                                    your personal data, under
                                                    certain conditions.
                                                </li>
                                                <li>
                                                    <span className="font-semibold">
                                                        The right to data
                                                        portability{" "}
                                                    </span>
                                                    – You have the right to
                                                    request that we transfer the
                                                    data that we have collected
                                                    to another organization, or
                                                    directly to you, under
                                                    certain conditions.
                                                </li>
                                            </ul>
                                            <p className="text-zinc-600 mb-8">
                                                If you make a request, we have
                                                one month to respond to you. If
                                                you would like to exercise any
                                                of these rights, please contact
                                                us.
                                            </p>
                                            <h2 className="text-2xl font-bold mb-4 ">
                                                Our Results
                                            </h2>
                                            <p className="text-lg mb-4 text-zinc-600">
                                                We are proud of the success
                                                stories from our users who have
                                                achieved their dream of Canadian
                                                citizenship. Our users
                                                consistently report high
                                                satisfaction rates and
                                                successful test outcomes. By
                                                providing comprehensive and
                                                accessible test preparation
                                                materials, we have helped
                                                thousands of individuals pass
                                                the Canadian Citizenship Test.
                                                We believe in the potential of
                                                every learner and are committed
                                                to supporting your journey to
                                                success.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
