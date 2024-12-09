import { Link, Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import GuestLayout from "@/Layouts/GuestLayout";

export default function Refundpolicy({ auth, chapters }) {
    return (
        <>
            <GuestLayout>
                <Head>
                    <title>Refund Policy - CitizenTestPrep</title>
                    <meta
                        name="description"
                        content="Discover CitizenTestPrep's Refund Policy"
                    />
                </Head>
                <div className="bg-slate-50 ">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-60 xl:px-60 py-14">
                        <div className="">
                            {/* Section 1 */}
                            <div className="text-center mb-8">
                                <h1 className="text-3xl sm:text-4xl text-center font-bold mb-6 sm:mb-8 py-8">
                                    Refund Policy
                                </h1>
                                <img
                                    src="/images/pass guarantee small (1).webp"
                                    alt="Logo"
                                    className="w-60 h-24 mx-auto hidden sm:block"
                                />
                            </div>
                            <p className="text-lg text-left text-zinc-600 mb-8">
                                We acknowledge the potential need for refund
                                requests due to changing circumstances. However,
                                it is important to note that our online course
                                is generally non-refundable, except under
                                specific conditions outlined herein pursuant to
                                our commitment titled "Pass your test or your
                                money back."
                            </p>

                            {/* Section 2 */}
                            <div className="py-8 rounded-lg mb-8">
                                <div className="container mx-auto px-4">
                                    <h2 className="text-3xl font-bold mb-4">
                                        Refund Eligibility
                                    </h2>
                                    <p className="text-lg mb-4 text-zinc-600">
                                        Refunds may be considered under the
                                        following conditions:
                                    </p>
                                    <ol className="list-decimal list-inside mb-4  text-zinc-600">
                                        <li className="mb-2">
                                            You have completed our entire
                                            training course with a minimum of
                                            100% completion before attempting
                                            your official IRCC Citizenship Test.
                                        </li>
                                        <li className="mb-2">
                                            Subsequently, if you fail the
                                            official IRCC Citizenship Test, you
                                            are eligible to request a refund.
                                        </li>
                                        <li className="mb-2">
                                            You must provide evidence of your
                                            test failure, including official
                                            notification from the Test
                                            Officials.
                                        </li>
                                        <li className="mb-2">
                                            Refund requests must be submitted
                                            within 30 days of receiving
                                            confirmation of your test failure.
                                        </li>
                                    </ol>
                                    <p className="text-lg mb-10  text-zinc-600">
                                        Upon verification of your course
                                        completion and failure of the test, we
                                        will initiate the refund process.
                                    </p>

                                    <h2 className="text-3xl font-bold mb-4">
                                        Ineligible for Refund
                                    </h2>
                                    <p className="text-lg mb-4  text-zinc-600">
                                        Please ensure thorough consideration of
                                        the course details to align with your
                                        requirements prior to purchase, as
                                        refunds are not applicable in the
                                        following circumstances:
                                    </p>
                                    <ul className="list-disc list-inside mb-8  text-zinc-600">
                                        <li className="mb-2">
                                            Change of mind about the course.
                                        </li>
                                        <li className="mb-2">
                                            Determination that the course does
                                            not meet your needs.
                                        </li>
                                        <li className="mb-2">
                                            Inability to complete the course.
                                        </li>
                                        <li className="mb-2">
                                            Insufficient review of course
                                            details and requirements prior to
                                            purchase.
                                        </li>
                                    </ul>

                                    <p className="text-lg  text-zinc-600">
                                        Should you encounter any technical
                                        difficulties while accessing the course,
                                        please contact our customer support team
                                        for assistance. We are committed to
                                        resolving such issues promptly to ensure
                                        your full access and completion of the
                                        course.
                                    </p>
                                </div>
                            </div>
                            <div className="py-2 rounded-lg mb-2 hidden sm:block">
                                <div className="container mx-auto px-4">
                                    <h2 className="text-3xl font-bold mb-4">
                                        To Claim
                                    </h2>
                                    <p className="text-lg mb-2 text-zinc-600">
                                        Just send us an email with your full
                                        name (which must match the name and
                                        email address used for your purchase at
                                        CitizenTestPrep.ca) and a screenshot of
                                        your official result.
                                    </p>
                                </div>
                            </div>

                            <div className="py-2 rounded-lg mb-2 hidden sm:block">
                                <div className="container mx-auto px-4">
                                    <h2 className="text-3xl font-bold mb-4">
                                        What Happens Next
                                    </h2>
                                    <p className="text-lg mb-4 text-zinc-600">
                                        We'll check your account to make sure
                                        you've successfully completed the entire
                                        course. Once that is confirmed, we'll
                                        issue a full refund. You will receive a
                                        separate email confirmation.
                                    </p>
                                    <p className="text-lg mb-4 text-zinc-600">
                                        This policy is formulated to ensure
                                        fairness and clarity regarding refund
                                        entitlements associated with our online
                                        course offerings.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
