import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="container mx-auto  px-0 md:px-16 lg:px-8 xl:px-44 ">
            <div className="px-4 sm:px-6 md:px-8  pt-10  bg-white text-black ">
                <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-4  xl:grid-cols-4 gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex  md:justify-start">
                            <span className="text-xl font-black leading-6">
                                <span className="text-blue-500">Citizen</span>{" "}
                                TestPrep
                            </span>
                        </div>

                        {/* Content for small screens */}
                        <p className=" mx-2 text-base md:text-base text-justify text-gray-500 mt-5 sm:hidden">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque vero eos et accusamus et iusto.
                        </p>

                        {/* Content for larger screens */}
                        <p className="hidden sm:block text-base text-gray-500 mt-5">
                            We're the top online destination for preparing for
                            the Canadian Citizenship Test. We want you to feel
                            confident and ready on test day. Use our study
                            materials and resources to pass with a 100% success
                            guarantee.
                        </p>

                        <div className="mt-8 sm:flex sm:flex-col  md:hidden lg:hidden xl:hidden">
                            <div className="flex items-center text-base text-gray-600">
                                <p className="text-base text-gray-500 text-left ">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.5 6.5L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123L19.5002 6.5M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z"
                                            stroke="#626262"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="ml-2">
                                        hello@citizentestprep.ca
                                    </span>
                                </p>
                            </div>

                            <div className="flex items-center text-xs md:text-sm text-gray-500">
                                <p className="text-base text-gray-500 mt-4 sm:mt-0 text-left">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
                                            stroke="#626262"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="ml-2">
                                        +1 672-558-4037
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Other sections remain unchanged */}
                    <div className="mt-2 md:mt-0 px-2 lg:ml-5 xl:ml-40">
                        <p className="text-lg font-semibold mb-2">About</p>
                        <ul className="text-nowrap space-y-3">
                            <li>
                                <a
                                    href={route("about")}
                                    className="text-gray-500"
                                >
                                    Who We Are
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("terms")}
                                    className="text-gray-500"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("privacyPolicy")}
                                    className="text-gray-500"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("refund")}
                                    className="text-gray-500"
                                >
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className=" px-2 xl:ml-24">
                        <p className="text-lg font-semibold mb-2">Platform</p>
                        <ul className="text-base space-y-3">
                            <li>
                                <a
                                    href={route("contact")}
                                    className="text-gray-500 "
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("about")}
                                    className="text-gray-500"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-500">
                                    News & Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="px-2  xl:ml-10">
                        <p className="text-lg font-semibold mb-2 md:mb-5 ">
                            Resources
                        </p>
                        <ul className="text-base space-y-3">
                            <li>
                                <a
                                    href={route("dashboard")}
                                    className="text-gray-500"
                                >
                                    Study Guide
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("testInfoPage", {
                                        chapter_id: 12,
                                    })}
                                    className="text-gray-500"
                                >
                                    Practice Tests
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("testInfoPage", {
                                        chapter_id: 12,
                                    })}
                                    className="text-gray-500"
                                >
                                    Diagnostic Test
                                </a>
                            </li>
                            <li>
                                <a
                                    href={route("faqs")}
                                    className="text-gray-500"
                                >
                                    FAQs
                                </a>
                            </li>
                        </ul>

                        {/* Add space after the list on small screens */}
                        <div className="mt-10 sm:mt-10"></div>
                    </div>
                </div>

                <div className="my-4 hidden md:flex flex-wrap items-center justify-center md:justify-start space-x-4">
                    <div className="flex items-center text-base text-gray-600">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.5 6.5L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123L19.5002 6.5M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z"
                                stroke="#626262"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="ml-2">hello@citizentestprep.ca</span>
                    </div>
                    <div className="flex items-center text-xs md:text-sm text-gray-500">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
                                stroke="#626262"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="ml-2">+1 672-558-4037</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-2 text-white bg-secondary">
                <div className="px-8 sm:px-14 md:px-8 lg:px-12 xl:px-4 flex flex-col sm:flex-row items-center justify-between">
                    {/* Sentence first on small screens, left side on larger screens */}
                    <p className="text-sm mx-8 tracking-wide text-center sm:text-left order-2 sm:order-none mt-2 md:mt-0">
                        © 2024 CitizenTestPrep All rights reserved.
                    </p>

                    {/* Icons second on small screens, right side on larger screens */}
                    <div className="flex space-x-4 mb-2 sm:mb-0 order-1 sm:order-none sm:ml-auto">
                        <a
                            href="https://www.facebook.com/profile.php?id=61566797242585"
                            className="text-white hover:text-gray-300"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 0.000244141C5.37258 0.000244141 0 5.37283 0 12.0002C0 18.6277 5.37258 24.0002 12 24.0002C18.6274 24.0002 24 18.6277 24 12.0002C24 5.37283 18.6274 0.000244141 12 0.000244141ZM13.2507 12.5273V19.056H10.5495V12.5276H9.19995V10.2778H10.5495V8.92703C10.5495 7.09164 11.3115 6.00024 13.4765 6.00024H15.279V8.2503H14.1523C13.3095 8.2503 13.2538 8.56471 13.2538 9.1515L13.2507 10.2775H15.2917L15.0529 12.5273H13.2507Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/citizentestprep/ "
                            className="text-white hover:text-gray-300"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 0.000244141C5.37258 0.000244141 0 5.37283 0 12.0002C0 18.6277 5.37258 24.0002 12 24.0002C18.6274 24.0002 24 18.6277 24 12.0002C24 5.37283 18.6274 0.000244141 12 0.000244141ZM9.36174 5.63901C10.0444 5.60794 10.2625 5.60034 12.0007 5.60034H11.9987C13.7374 5.60034 13.9547 5.60794 14.6374 5.63901C15.3187 5.67021 15.7841 5.77808 16.1921 5.93635C16.6134 6.09968 16.9694 6.31835 17.3254 6.67435C17.6814 7.03009 17.9001 7.38716 18.0641 7.8081C18.2214 8.21504 18.3294 8.68011 18.3614 9.36145C18.3921 10.0441 18.4001 10.2623 18.4001 12.0004C18.4001 13.7386 18.3921 13.9562 18.3614 14.6388C18.3294 15.3199 18.2214 15.7851 18.0641 16.1922C17.9001 16.613 17.6814 16.9701 17.3254 17.3258C16.9698 17.6818 16.6133 17.901 16.1925 18.0645C15.7853 18.2227 15.3197 18.3306 14.6383 18.3618C13.9557 18.3929 13.7382 18.4005 11.9999 18.4005C10.2619 18.4005 10.0439 18.3929 9.3612 18.3618C8.68 18.3306 8.21479 18.2227 7.80759 18.0645C7.38692 17.901 7.02985 17.6818 6.67424 17.3258C6.31837 16.9701 6.0997 16.613 5.9361 16.1921C5.77797 15.7851 5.6701 15.32 5.63876 14.6387C5.60783 13.956 5.6001 13.7386 5.6001 12.0004C5.6001 10.2623 5.6081 10.044 5.63863 9.36131C5.6693 8.68024 5.7773 8.21504 5.93597 7.80796C6.09997 7.38716 6.31864 7.03009 6.67464 6.67435C7.03038 6.31848 7.38745 6.09981 7.80839 5.93635C8.21533 5.77808 8.6804 5.67021 9.36174 5.63901Z"
                                    fill="white"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11.4266 6.75331C11.5381 6.75313 11.658 6.75319 11.7874 6.75325L12.0007 6.75331C13.7096 6.75331 13.9121 6.75944 14.5869 6.79011C15.2109 6.81864 15.5496 6.92291 15.7752 7.01051C16.0739 7.12651 16.2868 7.26518 16.5107 7.48918C16.7347 7.71319 16.8733 7.92652 16.9896 8.22519C17.0772 8.45053 17.1816 8.7892 17.21 9.4132C17.2407 10.0879 17.2473 10.2905 17.2473 11.9986C17.2473 13.7066 17.2407 13.9092 17.21 14.5839C17.1815 15.2079 17.0772 15.5466 16.9896 15.7719C16.8736 16.0706 16.7347 16.2833 16.5107 16.5071C16.2867 16.7311 16.074 16.8698 15.7752 16.9858C15.5499 17.0738 15.2109 17.1778 14.5869 17.2064C13.9122 17.237 13.7096 17.2437 12.0007 17.2437C10.2918 17.2437 10.0893 17.237 9.41459 17.2064C8.79058 17.1776 8.45191 17.0733 8.22618 16.9857C7.92751 16.8697 7.71417 16.731 7.49017 16.507C7.26617 16.283 7.1275 16.0702 7.01123 15.7714C6.92363 15.5461 6.81923 15.2074 6.79083 14.5834C6.76016 13.9087 6.75403 13.706 6.75403 11.997C6.75403 10.2879 6.76016 10.0863 6.79083 9.4116C6.81936 8.7876 6.92363 8.44893 7.01123 8.22332C7.12723 7.92465 7.26617 7.71132 7.49017 7.48732C7.71417 7.26331 7.92751 7.12465 8.22618 7.00838C8.45178 6.92038 8.79058 6.81638 9.41459 6.78771C10.005 6.76104 10.2338 6.75304 11.4266 6.75171V6.75331ZM15.4169 7.8157C14.9929 7.8157 14.6489 8.1593 14.6489 8.58344C14.6489 9.00744 14.9929 9.35145 15.4169 9.35145C15.8409 9.35145 16.1849 9.00744 16.1849 8.58344C16.1849 8.15943 15.8409 7.81543 15.4169 7.81543V7.8157ZM8.71411 11.9993C8.71411 10.1843 10.1857 8.71272 12.0007 8.71265C13.8158 8.71265 15.287 10.1843 15.287 11.9993C15.287 13.8144 13.8159 15.2854 12.0008 15.2854C10.1857 15.2854 8.71411 13.8144 8.71411 11.9993Z"
                                    fill="white"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.0005 9.8667C13.1787 9.8667 14.1339 10.8218 14.1339 12.0001C14.1339 13.1782 13.1787 14.1334 12.0005 14.1334C10.8223 14.1334 9.86719 13.1782 9.86719 12.0001C9.86719 10.8218 10.8223 9.8667 12.0005 9.8667V9.8667Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://x.com/citizentestprep"
                            className="text-white hover:text-gray-300"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 0.000244141C5.37258 0.000244141 0 5.37283 0 12.0002C0 18.6277 5.37258 24.0002 12 24.0002C18.6274 24.0002 24 18.6277 24 12.0002C24 5.37283 18.6274 0.000244141 12 0.000244141ZM11.6658 10.1689L11.6406 9.7537C11.5651 8.6775 12.2282 7.69451 13.2774 7.31318C13.6635 7.1776 14.3182 7.16065 14.7463 7.27929C14.9142 7.33013 15.2331 7.49961 15.4598 7.65214L15.8711 7.93179L16.3243 7.78773C16.5761 7.71146 16.9119 7.58435 17.063 7.49961C17.2057 7.42335 17.3316 7.38098 17.3316 7.4064C17.3316 7.55046 17.021 8.04195 16.7608 8.31312C16.4083 8.69445 16.509 8.72834 17.2224 8.47412C17.6505 8.33007 17.6589 8.33007 17.575 8.49107C17.5246 8.57581 17.2644 8.8724 16.9874 9.14357C16.5174 9.60964 16.4922 9.66049 16.4922 10.0503C16.4922 10.6519 16.2068 11.9061 15.9214 12.5925C15.3926 13.8806 14.2595 15.211 13.1263 15.8804C11.5315 16.821 9.40786 17.0583 7.61999 16.5075C7.02404 16.3211 6 15.8465 6 15.7618C6 15.7364 6.31057 15.7025 6.68829 15.694C7.4773 15.677 8.26631 15.4567 8.93781 15.0669L9.39108 14.7957L8.87066 14.6178C8.13201 14.3636 7.46891 13.7789 7.30103 13.2281C7.25067 13.0501 7.26746 13.0416 7.73751 13.0416L8.22434 13.0331L7.81305 12.8382C7.32621 12.5925 6.88134 12.1773 6.66311 11.7536C6.50362 11.4485 6.30218 10.6774 6.36093 10.6181C6.37772 10.5926 6.55399 10.6435 6.75544 10.7113C7.33461 10.9231 7.41015 10.8723 7.0744 10.5164C6.44487 9.87234 6.25181 8.91477 6.55399 8.00805L6.69668 7.6013L7.25067 8.15211C8.38383 9.26221 9.71843 9.92318 11.2461 10.1181L11.6658 10.1689Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCUvM0foDlasYhSOWFey8TnA"
                            className="text-white hover:text-gray-300"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 0.000244141C5.37258 0.000244141 0 5.37283 0 12.0002C0 18.6277 5.37258 24.0002 12 24.0002C18.6274 24.0002 24 18.6277 24 12.0002C24 5.37283 18.6274 0.000244141 12 0.000244141ZM17.0009 7.87525C17.5517 8.02638 17.9854 8.47169 18.1326 9.0372C18.4001 10.0621 18.4001 12.2006 18.4001 12.2006C18.4001 12.2006 18.4001 14.339 18.1326 15.364C17.9854 15.9295 17.5517 16.3748 17.0009 16.526C16.0028 16.8006 12.0001 16.8006 12.0001 16.8006C12.0001 16.8006 7.99741 16.8006 6.99923 16.526C6.44846 16.3748 6.01472 15.9295 5.86752 15.364C5.6001 14.339 5.6001 12.2006 5.6001 12.2006C5.6001 12.2006 5.6001 10.0621 5.86752 9.0372C6.01472 8.47169 6.44846 8.02638 6.99923 7.87525C7.99741 7.60059 12.0001 7.60059 12.0001 7.60059C12.0001 7.60059 16.0028 7.60059 17.0009 7.87525Z"
                                    fill="white"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10.7999 14.3999V10.3999L13.9999 12.4L10.7999 14.3999Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
