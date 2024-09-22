import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <>
        <div className="flex flex-col h-screen">
            <Header/>
            <main className="grow dark:bg-[#1A202C]">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    </>
  )
}
