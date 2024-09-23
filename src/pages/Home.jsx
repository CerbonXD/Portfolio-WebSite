import ButtonLink from "../components/ButtonLink/ButtonLink.jsx";

export default function Home() {
    return (
        <div className="flex flex-col justify-center gap-10 h-screen">
            <h1 className="dark:text-white text-6xl text-center">
                Hi, my name is Felipe.
                <br></br>
                <span className="dark:text-[#6A1FC0] text-[3.375rem]">I’m a software engineer and a Minecraft modder.</span>
            </h1>
            <p className="text-2xl text-[#718096] text-center">Let’s build something awesome together!</p>
            <div className="flex gap-5 justify-center">
                <ButtonLink label="Linkedin" to="https://www.linkedin.com/in/felipe-cerboncini-cordeiro"></ButtonLink>
                <ButtonLink label="Discord" to="https://discord.gg/zSbSPpunyJ"></ButtonLink>
            </div>
        </div>
    )
}