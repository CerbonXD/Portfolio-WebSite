import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

export default function App() {
    const location = useLocation();

    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <main className="grow dark:bg-[#1A202C]">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
                    <Outlet/>
                </motion.div>
            </main>
            <Footer/>
        </div>
    );
}
