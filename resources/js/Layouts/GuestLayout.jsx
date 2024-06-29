import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Guest({ children, user }) {
    return (
        <div className="bg-slate-50">
            <Header user={user} />
            {children}
            <Footer />
        </div>
    );
}
