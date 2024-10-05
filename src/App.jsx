import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

import './i18n'

export default function App() {
    const location = useLocation();

    return (
        <div className="flex flex-col h-screen text-[#1a202c] dark:text-white">
            <Header/>
            <main className="grow bg-[#ffffff] dark:bg-[#1A202C] px-5 lg:px-20">
                <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity: 0}} transition={{ delay: 0.10 }}>
                    <Outlet/>
                </motion.div>
            </main>
            <div>
                <Footer/>
            </div>

        </div>
    );
}
