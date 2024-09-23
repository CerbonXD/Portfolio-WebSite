import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function App() {
    const location = useLocation();

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <TransitionGroup className="grow dark:bg-[#1A202C]">
                <CSSTransition key={location.key} timeout={500} classNames="fade">
                    <main>
                        <Outlet/>
                    </main>
                </CSSTransition>
            </TransitionGroup>
            <Footer/>
        </div>
    );
}
