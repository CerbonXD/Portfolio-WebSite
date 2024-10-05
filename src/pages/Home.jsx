import ButtonLink from "../components/ButtonLink/ButtonLink.jsx";
import {useTranslation} from "react-i18next";

export default function Home() {
    const [t] = useTranslation();

    return (
        <section className="flex flex-col justify-center gap-10 h-screen">
            <h1 className="text-6xl text-center">
                {t("home.greeting")}
                <span className="block text-[#6A1FC0] text-[3.375rem]">{t("home.description")}</span>
            </h1>
            <p className="text-2xl text-[#718096] text-center">{t("home.invite")}</p>
            <div className="flex flex-wrap gap-5 justify-center">
                <ButtonLink label="Linkedin" to="https://www.linkedin.com/in/felipe-cerboncini-cordeiro"></ButtonLink>
                <ButtonLink label="Discord" to="https://discord.gg/zSbSPpunyJ"></ButtonLink>
            </div>
        </section>
    )
}