import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import HeaderPremium from "@/Components/HeaderPremium";

export default function Guest({ children, user }) {
    const { url } = usePage();
    return (
        <>
            {url.startsWith("/premium") ? (
                <div className="bg-slate-50">
                    <HeaderPremium user={user} />
                    {children}
                    <HeaderPremium />
                </div>
            ) : (
                <div className="bg-slate-50">
                    <Header user={user} />
                    {children}
                    <Footer />
                </div>
            )}
        </>
    );
}
