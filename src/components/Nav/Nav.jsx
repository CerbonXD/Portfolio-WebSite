import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useState } from "react";

export default function Nav() {
    const [t] = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

    const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle menu function

    const navLinkCss = "underline-center-animation-light dark:underline-center-animation-dark";

    return (
        <div className="h-full px-5 lg:px-20">
            <div className="flex justify-between items-center h-full max-w-[120rem] mx-auto ">
                <Logo/>
                <nav className="hidden md:block"> {/* Desktop Navigation */}
                    <ul className="flex justify-center gap-7">
                        <li><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/">{t("nav.home")}</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/about">{t("nav.about")}</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/experience">{t("nav.experience")}</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/projects">{t("nav.projects")}</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/resume">{t("nav.resume")}</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/contact">{t("nav.contact")}</NavLink></li>
                    </ul>
                </nav>
                <LanguageAndThemeButtons/>

                <div className="md:hidden ml-5">
                    {/* Hamburger icon for small screens */}
                    <div onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 cursor-pointer transform -scale-x-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>

                    {/* Mobile Navigation - Shows when menu is open */}
                    {menuOpen && (
                        <nav className="md:hidden absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-10" onClick={toggleMenu}>✕</button>
                            <ul className="flex flex-col items-center gap-8">
                                <li onClick={toggleMenu}><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/">{t("nav.home")}</NavLink></li>
                                <li onClick={toggleMenu}><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/about">{t("nav.about")}</NavLink></li>
                                <li onClick={toggleMenu}><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/experience">{t("nav.experience")}</NavLink></li>
                                <li onClick={toggleMenu}><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/projects">{t("nav.projects")}</NavLink></li>
                                <li onClick={toggleMenu}><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/resume">{t("nav.resume")}</NavLink></li>
                                <li onClick={toggleMenu}><NavLink className={({isActive}) => isActive ? "border-b-[0.063rem] border-black dark:border-white py-[0.188rem] " : "" + navLinkCss} to="/contact">{t("nav.contact")}</NavLink></li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    );
}

function Logo() {
    return (
        <div className="flex-grow basis-0">
            <img className="min-w-11" src="logo.png" alt="Cerbon's logo"/>
        </div>
    )
}

function LanguageAndThemeButtons() {
    const [t] = useTranslation()
    const [dark, setDark] = useState(true)

    const darkModeHandler = () => {
        setDark(!dark)
        document.body.classList.toggle("dark")
    }
    return (
        <>
            <div className="flex justify-end items-center basis-0 flex-grow gap-2">
                <button className="px-[0.875rem] py-[0.625rem] rounded-lg hover:bg-black/[.06] dark:hover:bg-white/[.06] active:scale-90 transition" onClick={() => document.getElementById("language_modal").showModal()}>
                    <svg
                        className="h-5 w-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        aria-hidden="true">
                        <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
                    </svg>
                </button>

                <label className="swap swap-rotate px-3 py-2 rounded-lg hover:bg-black/[.06] dark:hover:bg-white/[.06] active:scale-90 transition">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onClick={darkModeHandler}/>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                    </svg>

                    {/* sun icon */}
                    <svg
                        className="swap-off h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                    </svg>
                </label>
            </div>
            <dialog id="language_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white dark:bg-[#1A202C] px-0">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-xl pl-5 pb-4">{t("nav.language.modal.select_language")}</h3>
                    <div className="flex flex-col">
                        <LanguageModalButton language="English" language_code="en_us" country="United States"/>
                        <LanguageModalButton language="Português" language_code="pt_br" country="Brasil"/>
                    </div>
                </div>
            </dialog>
        </>
    )
}

function LanguageModalButton({language, language_code, country}) {
    const [t, i18n] = useTranslation()

    return (
        <button className="flex justify-between items-center w-full border-b border-b-black/[.08] dark:border-b-white/[.08] text-start py-3 px-5 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] active:scale-x-[.99] transition" onClick={() => i18n.changeLanguage(language_code, () => window.location.reload())}>
            <div>
                <p>{language}</p>
                <p className="text-[#718096]">{country}</p>
            </div>
            <span className={"fi fis " + "fi-" + language_code.substring(3)}></span> {/* Flag */}
        </button>
    )
}

LanguageModalButton.propTypes = {
    language: PropTypes.string.isRequired,
    language_code: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}
