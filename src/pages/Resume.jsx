import {useTranslation} from "react-i18next";

export default function Resume() {
    const [t, i18n] = useTranslation();

    const srcImg = i18n.language === "pt_br" ? "https://i.imgur.com/TDmAgpH.png" : "https://imgur.com/mpfsYyP.png"

    return (
        <div className="flex justify-center w-full py-[4.375rem] px-5 lg:px-20">
            <img className="w-[56.25rem]" src={srcImg} alt=""/>
        </div>
    )
}
