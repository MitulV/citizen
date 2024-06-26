import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Headertry from "@/Components/Headertry";
import Footer from "@/Components/Footer";

export default function Guest({ children }) {
    return (
        <div className="bg-slate-50">
            <Headertry />
            {children}
            <Footer />
        </div>
    );
}
