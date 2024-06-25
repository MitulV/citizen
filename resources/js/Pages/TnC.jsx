import { Link, Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import GuestLayout from "@/Layouts/GuestLayout";

export default function TnC({ auth, chapters }) {
    return (
        <>
            <GuestLayout>
                <Head title="Contact Us" />
                <div className="bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-60 xl:px-60 py-14">
                        <h1 className="text-3xl sm:text-4xl text-center font-bold mb-6 sm:mb-8 py-8">
                            Terms & Conditions
                        </h1>

                        <div className="prose lg:prose-lg xl:prose-xl text-gray-600">
                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                1.00 INTRODUCTION
                            </h2>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                This is a legal agreement between
                                CitizenTestPrep.ca ("we," "us," "our") and you
                                ("User," "you," "your"). It defines our mutual
                                rights and responsibilities. Please read these
                                Terms and Conditions and our Privacy Policy
                                carefully and in their entirety before using
                                this website to ensure you are fully aware of
                                your rights and obligations.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Welcome to CitizenTestPrep.ca! We are a private
                                organization dedicated to assisting you in
                                preparing for the Canadian citizenship
                                examination. This website and its content are
                                proprietary and copyrighted materials owned by
                                CitizenTestPrep.ca. We are not affiliated with
                                any provincial, federal, or municipal
                                government, nor with any department, bureau,
                                division, or agency thereof. For assistance,
                                contact us at{" "}
                                <a
                                    href="mailto:contact@citizentestprep.ca"
                                    className="text-red-600 hover:underline"
                                >
                                    contact@citizentestprep.ca
                                </a>
                                .
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4 py-8">
                                1.01 ACCEPTANCE OF AGREEMENT
                            </h2>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                (A) Acknowledgment and Acceptance of Terms By
                                accessing this website and using our free or
                                premium services, you agree to be bound by these
                                Terms and Conditions, along with the Privacy
                                Policy and related provisions. You agree to
                                comply with all applicable federal, provincial,
                                and local laws, statutes, ordinances, and
                                regulations, as well as our rules and
                                prohibitions. This Agreement contains warranty
                                disclaimers and other provisions that limit our
                                liability to you. If you do not agree to each
                                term and condition set forth herein, please exit
                                our website immediately.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                You acknowledge that there is good and valuable
                                consideration between both parties to the
                                Agreement, and you hereby voluntarily intend to
                                be legally bound to all provisions and materials
                                that comprise the Agreement. You agree to comply
                                with all applicable domestic and international
                                laws, statutes, ordinances, and regulations
                                regarding your use of our website, content,
                                services, and any software provided therein.
                            </p>
                            <h2 className="text-zinc-600 font-semibold py-2">
                                {" "}
                                (B) Users Under 18
                            </h2>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                By accessing or using the service, you verify
                                that you are legally able to enter into
                                contracts and are at least 14 years of age or
                                older. If you are under the age of 18 and choose
                                to purchase a Premium account, an adult parent
                                or guardian must agree to the establishment of a
                                "family account" and provide valid credit card
                                or other bank information acceptable to
                                CitizenTestPrep.ca for payment of all program
                                fees. The parent or guardian must confirm their
                                awareness of the applicant’s enrollment and give
                                permission, acknowledging their responsibility
                                to pay any incurred fees.
                            </p>
                            <h2 className="text-zinc-600 font-semibold py-2">
                                {" "}
                                (C) COPPA Compliance
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Our procedures and policies are designed to
                                comply with the Children's Online Privacy
                                Protection Act (“COPPA”), which provides
                                children and their parents or guardians with
                                meaningful protection of their privacy rights.
                                We do not collect information from or accept any
                                form of account relating to any minor 13 years
                                of age or younger.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                1.02 SIGNATURES, ELECTRONIC NOTICES, AND OTHER
                                CONSENTS
                            </h2>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                (A) Digital Signature By registering for a
                                Premium account or using any free tests, you are
                                deemed to have executed this Agreement, the
                                Privacy Policy, and other related materials,
                                effective on the date you first registered or
                                used the free tests. Pursuant to the U.S.
                                Electronic Signatures in Global and National
                                Commerce Act (E-Sign Act) (15 U.S.C. § 7001, et
                                seq.), your account registration or use of our
                                practice test constitutes acknowledgment that
                                you can electronically receive, download, and
                                print this Agreement and any amendments.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                (B) Consent to Electronic Records and Notices
                                You agree to receive certain records or notices
                                from CitizenTestPrep.ca electronically by email
                                or on the website. We reserve the right to
                                communicate with you via your registered email
                                address. Your consent to receive records and
                                notices electronically will remain in effect
                                until you withdraw it by contacting Customer
                                Support. Withdrawal of consent will result in
                                the revocation of your access to the Site and
                                Services. Withdrawal is effective only after a
                                reasonable period for processing your request.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                (C) Password Security You agree to maintain the
                                confidentiality of your password and are fully
                                responsible for all liability and damages
                                resulting from your failure to maintain that
                                confidentiality. Notify us immediately of any
                                unauthorized use of your password or other
                                breaches of security. We are not liable for any
                                loss or damage arising from your failure to
                                comply with password security.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                (D) Keeping Your Information Current You agree
                                to notify us immediately of any changes in your
                                email address by updating your Account
                                information on the Site or by contacting
                                Customer Support.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                (E) Duty to Provide Accurate Information You
                                agree to provide factual, correct, current, and
                                complete information about yourself and update
                                it promptly. Providing false, inaccurate, or
                                incomplete information may result in suspension
                                or termination of your account and forfeiture of
                                payments made.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                1.03 NO GOVERNMENT AFFILIATION – OFFICIAL MANUAL
                                GOVERNS
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                CitizenTestPrep.ca is not affiliated with any
                                government entity. Our website contains general
                                information regarding the Canadian citizenship
                                examinations for informational and educational
                                purposes only. Where we make definitive
                                statements, we reference your official Discover
                                Canada book. Our practice tests are intended for
                                training purposes and do not guarantee the same
                                questions on the official examination. The
                                Discover Canada book and related laws are the
                                sole official authority governing the test
                                material.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                2.0 LIMITED USE LICENSE
                            </h2>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                CitizenTestPrep.ca grants you a non-exclusive,
                                non-transferable, revocable license to access
                                and use our Website and Services strictly in
                                accordance with this Agreement. This license is
                                for personal, educational, and non-commercial
                                viewing only.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                This grant can be terminated by us if you or any
                                third party:
                            </p>
                            <ul className="list-disc list-inside text-base sm:text-lg mb-3 sm:mb-4">
                                <li>
                                    Modify, display, post, reproduce,
                                    distribute, or copy the materials.
                                </li>
                                <li>
                                    Use materials for commercial purposes or
                                    public display.
                                </li>
                                <li>
                                    Attempt to decompile, reverse engineer, or
                                    interfere with any software on
                                    CitizenTestPrep.ca.
                                </li>
                                <li>
                                    Remove copyright notices or interfere with
                                    intellectual property rights.
                                </li>
                                <li>
                                    Transfer materials to another person or
                                    "mirror" them on another server.
                                </li>
                                <li>
                                    Build a similar service or application based
                                    on our proprietary programs.
                                </li>
                                <li>Violate any law or regulation.</li>
                                <li>
                                    Collect or store personal data without
                                    consent.
                                </li>
                                <li>
                                    Use another’s account or impersonate any
                                    person or entity.
                                </li>
                                <li>Create a false identity.</li>
                                <li>
                                    Scrape or copy profiles or identifying
                                    information.
                                </li>
                                <li>
                                    Use or distribute viruses or any harmful
                                    code.
                                </li>
                                <li>
                                    Interfere with the website or servers or
                                    disobey any policies or regulations.
                                </li>
                            </ul>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                We may terminate your account at our discretion
                                and report any egregious breaches to
                                authorities. Upon termination, you agree to
                                destroy any downloaded materials.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                2.1 LINKS
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                We may provide links to outside services and
                                resources. These linked sites are not part of
                                CitizenTestPrep.ca, and we are not responsible
                                for any transactions or activities on those
                                sites.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                2.2 AMENDMENTS
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                We may amend this Agreement at any time by
                                posting the amended terms on the website.
                                Continued use of the services after an amendment
                                is published constitutes acceptance of the
                                changes. The latest Agreement will always be
                                accessible on our Website, and your continued
                                use of the site confirms your acceptance of any
                                updates or modifications.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: Throughout this
                                document, simplified explanations are provided
                                to ensure clarity. These summaries are for
                                convenience only and do not replace or alter the
                                legal terms and conditions.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                2.3 Digital Millennium Copyright Act Compliance
                            </h2>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                Legal Language: Our website, CitizenTestPrep.ca
                                ("Website"), complies with the provisions of the
                                Digital Millennium Copyright Act of 1998
                                ("DMCA"), a United States law (17 USC. § 512).
                                We promptly respond to notices alleging
                                copyright infringement in our content. If you
                                believe that your copyright has been infringed,
                                please provide us with a written notice
                                containing:
                            </p>
                            <ul className="list-disc list-inside text-base sm:text-lg mb-3 sm:mb-4">
                                <li>
                                    A physical or electronic signature of a
                                    person authorized to act on behalf of the
                                    copyright owner.
                                </li>
                                <li>
                                    Identification of the copyrighted work
                                    claimed to have been infringed.
                                </li>
                                <li>
                                    Identification of the material that is
                                    claimed to be infringing or to be the
                                    subject of infringing activity and that is
                                    to be removed or access to which is to be
                                    disabled, and information reasonably
                                    sufficient to permit us to locate the
                                    material.
                                </li>
                                <li>
                                    Your contact information, including your
                                    address, telephone number, and email
                                    address.
                                </li>
                                <li>
                                    A statement by you that you have a good
                                    faith belief that use of the material in the
                                    manner complained of is not authorized by
                                    the copyright owner, its agent, or the law.
                                </li>
                                <li>
                                    A statement that the information in the
                                    notification is accurate, and under penalty
                                    of perjury, that you are authorized to act
                                    on behalf of the owner of an exclusive right
                                    that is allegedly infringed.
                                </li>
                            </ul>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Please send your notice to the following
                                contact: Email: contact@citizentestprep.ca
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: If you believe your
                                copyright is being infringed on our site, please
                                let us know in writing with specific details so
                                we can address it promptly.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                2.4 Our Intellectual Property
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: The trademarks, service marks,
                                and logos displayed on our Website are the
                                property of CitizenTestPrep.ca or other parties.
                                You are not permitted to use these without the
                                prior written consent of CitizenTestPrep.ca or
                                such third party that may own the
                                trademark/service mark.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: You cannot use our logos
                                or trademarks without our permission.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                2.5 Our Content
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: All content on our Website is
                                protected by Canadian and international
                                copyright laws. You are prohibited from copying,
                                distributing, using, or publishing any such
                                content without our explicit permission.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: Our content is protected
                                by copyright; please don’t copy or use it
                                without asking us.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                3.0 Premium Services
                            </h2>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                Legal Language:
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                (A) We offer a basic service for free, including
                                practice tests and content. Additionally, we
                                offer various membership and subscription plans
                                ("Premium"), which provide enhanced features
                                such as additional practice tests and upgraded
                                functionality. Our Premium services are subject
                                to fees outlined on our Website and may change
                                without notice. For current pricing and
                                features, please visit: Premium Services Page.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                (B) By opening a Premium Account, you authorize
                                CitizenTestPrep.ca to charge your provided
                                payment method for all charges incurred through
                                our services. The terms of payment, including
                                any subscription plans, are detailed on our
                                Website. Premium subscriptions do not
                                automatically renew.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: We offer free and paid
                                services. Paid plans give you more features.
                                Prices can change, so check our website.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                4.0 Refund/Cancellation Policy and Pass
                                Guarantee
                            </h2>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                Legal Language:
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                (A) Pass Guarantee: We offer a Pass Guarantee
                                program under specific conditions. To qualify,
                                you must enable Pass Guarantee protection, pass
                                all practice tests, fail your official knowledge
                                test, and request a refund within 30 days of
                                purchase.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                (B) Refund Policy: We generally do not issue
                                refunds unless specified in our Pass Guarantee
                                or under exceptional circumstances, such as
                                technical issues with our products or services.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                (C) Cancellation Policy: You can cancel your
                                Premium membership at any time by emailing
                                contact@citizentestprep.ca. We do not provide
                                refunds for the current subscription period once
                                payment is processed.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                (D) Automatic Renewal: Some services may renew
                                automatically. You are responsible for canceling
                                these subscriptions to avoid charges.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: We offer refunds under
                                certain conditions and you can cancel anytime.
                                Check our policy for details.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                4.1 Chargebacks
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: We do not issue refunds through
                                chargebacks. Contact us first with any billing
                                issues to avoid penalties.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: Please contact us
                                directly about billing issues; do not initiate
                                chargebacks.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                4.2 Resolution of Conflicts Procedure
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: We aim to resolve disputes
                                amicably. Contact us directly with any issues,
                                and we'll work to find a solution. If necessary,
                                unresolved disputes may be subject to formal
                                mediation or court action.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: We want to resolve
                                problems with you directly. Contact us if you
                                have an issue, and we'll try to fix it together.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                5.0 DISCLAIMERS – NO WARRANTIES AND NO LIABILITY
                                FOR LOSSES
                            </h2>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                While our commitment to your satisfaction is
                                paramount, please understand that our liability
                                is limited. Should you believe our services do
                                not meet our agreed standards, we encourage you
                                to promptly contact our courteous administrative
                                staff to address your concerns. We strive to
                                resolve issues amicably and accommodate your
                                needs within industry norms.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                By using our services, you acknowledge the
                                fierce competition online necessitates stringent
                                limitations on our liability to the fullest
                                extent permitted by law. You voluntarily accept
                                the following limitations. If unacceptable,
                                refrain from completing the registration process
                                and exit the site. Your continued usage
                                signifies your understanding and agreement to
                                these limitations, waivers, disclaimers, and
                                hold harmless provisions, including those
                                elsewhere in these Terms and Conditions.
                            </p>
                            <p className="text-base font-semibold sm:text-lg mb-3 sm:mb-4">
                                PLEASE READ AND UNDERSTAND OUR LIMITS OF
                                LIABILITY BEFORE USING OUR SERVICES. OUR RIGHTS
                                TO SUE OR MAKE CLAIMS ARE RESTRICTED, AS
                                DETAILED IN SEVERAL PROVISIONS BELOW. NOTE: SOME
                                JURISDICTIONS DO NOT PERMIT EXCLUSION OF CERTAIN
                                WARRANTIES OR LIABILITY, WHICH MAY AFFECT THE
                                ENFORCEABILITY OF THESE EXCLUSIONS.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                You, the Client, affirm that services provided
                                by CitizenTestPrep.ca are offered "as is,"
                                without any warranties, express or implied,
                                including but not limited to warranties of
                                merchantability, fitness for a particular
                                purpose, or non-infringement of any personal or
                                property rights. You understand and agree that
                                CitizenTestPrep.ca makes no representations or
                                warranties regarding the effectiveness,
                                reliability, security, timeliness, validity,
                                error-free nature, or uninterrupted operation of
                                its webpages or services, given the inherent
                                risks of the internet.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                Furthermore, CitizenTestPrep.ca does not
                                guarantee that its tests or learning techniques
                                will fully satisfy your specific preparation
                                needs or produce desired outcomes. We do not
                                warrant against unauthorized access, alteration,
                                deletion, destruction, damage, loss, or failure
                                to store your content or data.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                You acknowledge that individual learning
                                capacities and other factors, such as sleep,
                                physical or mental condition, significantly
                                influence test results. Therefore, you
                                explicitly and voluntarily assume all risks
                                associated with your use of CitizenTestPrep.ca's
                                website functions and learning tools. Our
                                services are provided on an "as is" and "as
                                available" basis, without warranties of any
                                kind.
                            </p>
                            <p className="text-base sm:text-lg mb-3 sm:mb-4">
                                You, the Client, explicitly and voluntarily
                                acknowledge, understand, and agree that
                                CitizenTestPrep.ca and its affiliates,
                                licensors, subsidiaries, officers, employees,
                                owners, agents, successors, or assigns shall not
                                be liable to you or any third parties for any
                                damages, including but not limited to indirect,
                                direct, incidental, special, consequential,
                                compensatory, or exemplary damages arising from
                                the purchase or implementation of any Canadian
                                citizenship learning programs offered by us.
                                This disclaimer applies to damages or losses
                                incurred by you or third parties, including
                                those related to property loss, profits,
                                savings, income, domestic harmony disruption,
                                psychological trauma, mental health issues,
                                physical harm, loss of earning capacity,
                                goodwill loss, business interruption,
                                replacement costs, data loss, or other
                                intangible losses, even if CitizenTestPrep.ca or
                                its authorized representatives have been
                                notified of the possibility of such damages, and
                                regardless of negligence.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: We make no guarantees
                                regarding test success. If you do not pass, we
                                are not legally liable. Individual test outcomes
                                are unpredictable due to various personal
                                factors.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                5.1 LIMITS OF LIABILITY FOR VALIDATED CLAIMS BY
                                US OR A COURT
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                In any instance where a claim is made for
                                damages, you, the Client, agree that our
                                aggregate liability under this agreement is
                                limited to the total amount actually paid to us
                                during the twelve months preceding the claim for
                                the service(s) or product(s) giving rise to the
                                claim, or a lesser amount deemed appropriate.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: If we are liable for any
                                reason, our liability is capped at the total
                                amount you paid us in the twelve months before
                                your claim.
                            </p>
                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                5.2 FORCE MAJEURE
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: You, the Client, agree that
                                CitizenTestPrep.ca, its employees, affiliates,
                                officers, agents, directors, representatives,
                                shareholders, successors, and assigns are not
                                liable for any delay or failure to perform
                                obligations under this agreement resulting from
                                causes beyond our reasonable control, including
                                acts of God, labor disputes, industrial
                                disturbances, utility failures, natural
                                disasters, government actions or orders,
                                terrorism, war, or internet service provider
                                failures due to hacker attacks. You waive,
                                release, and discharge any claims arising from
                                such events and interruptions, agreeing to
                                indemnify and hold CitizenTestPrep.ca harmless.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: We are not responsible
                                for delays or service interruptions due to
                                unforeseen circumstances beyond our control.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                5.3 HOLD HARMLESS CLAUSE
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: You, the Client, agree to
                                indemnify, defend, and hold harmless
                                CitizenTestPrep.ca, its officers, directors,
                                employees, agents, successors, and assigns from
                                all claims, liabilities, damages, losses, costs,
                                and expenses, including legal fees, arising from
                                your use of the site, breach of these Terms and
                                Conditions, or any other claims related to your
                                use of our services, platform, or services
                                provided by any other persons or entities.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: You will defend,
                                indemnify, and protect CitizenTestPrep.ca from
                                any claims resulting from your use of the
                                website or services.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                6.0 ADMINISTRATIVE PROVISIONS
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: These provisions are mutually
                                agreed upon by You and CitizenTestPrep.ca to
                                address various administrative matters that may
                                arise during the execution or termination of
                                this Agreement.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: This contract is between
                                you and CitizenTestPrep.ca only, and no other
                                persons can enforce its terms.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                6.1 NO THIRD-PARTY BENEFICIARIES
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: This Agreement does not confer
                                any rights to third parties who are not parties
                                to this Agreement.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: This contract is between
                                you and CitizenTestPrep.ca only, and no other
                                persons can enforce its terms.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                6.2 ASSIGNMENT
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: You may not assign this
                                Agreement or delegate/sublicense your rights
                                under this Agreement without
                                CitizenTestPrep.ca's prior written consent. Any
                                such attempt will be void.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: You cannot transfer your
                                rights or duties under this agreement without
                                our written permission.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                6.3 NO WAIVERS
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: Failure by CitizenTestPrep.ca to
                                enforce any provision of this Agreement does not
                                constitute a waiver of that provision or our
                                right to enforce it in the future. Any waivers
                                must be in writing to be effective.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: Not enforcing a
                                provision doesn’t mean we waive our right to do
                                so later.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                6.4 SEVERABILITY
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: If any provision of this
                                Agreement is found unenforceable, the remainder
                                of the Agreement will remain in effect to the
                                fullest extent possible, with the unenforceable
                                provision modified to reflect the intent of the
                                parties.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: If a court says part of
                                this agreement isn’t enforceable, the rest
                                remains valid.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                6.5 GOVERNING LAW; VENUE
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: This Agreement is governed by
                                the laws of Ontario, Canada, without regard to
                                conflict of law principles. Any dispute related
                                to the Service, Products, or this Agreement will
                                be adjudicated in provincial or federal courts
                                in Ontario. You consent to the exclusive
                                jurisdiction and venue of these courts. We may
                                seek injunctive or other relief in any state or
                                federal court for infringement of our
                                intellectual property rights.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: Disputes are governed by
                                Ontario law. We can choose where to resolve
                                disputes if we sue you.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                6.6 ENTIRE AGREEMENT
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Legal Language: This Agreement represents the
                                entire agreement between you and us regarding
                                the Services or Products, superseding any prior
                                agreements or communications, whether written or
                                oral, regarding its subject matter.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                Non-Legalese Summaries: This document and our
                                Privacy Policy are our entire agreement; nothing
                                else applies.
                            </p>

                            <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">
                                6.7 CONTACT US FOR INFORMATION OR ASSISTANCE
                            </h2>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                For inquiries or assistance, please contact us
                                at contact@citizentestprep.ca. These Terms and
                                Conditions were last fully updated on June 14,
                                2024.
                            </p>
                            <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                This version maintains the legal precision
                                required while translating key provisions into
                                plain language summaries for clarity.
                            </p>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
