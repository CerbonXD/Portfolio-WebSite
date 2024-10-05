import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useState} from "react";

export default function Contact() {
    const [t] = useTranslation()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name)
        console.log(email)
        console.log(message)

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <section className="flex justify-center gap-4 h-screen max-w-[120rem] mx-auto">
            <div className="flex flex-col justify-center gap-10 max-w-md w-full">
                <div className="text-center text-4xl">
                    <h3>{t("contact.heading")} <span className="text-[#6A1FC0]">{t("contact.touch.heading")}</span></h3>
                </div>

                <div className="flex justify-center items-center gap-3">
                    <div className="w-full border-black/[.08] dark:border-white/[.08] border-b-2"></div>             
                    <Link to="https://www.linkedin.com/in/felipe-cerboncini-cordeiro"><svg width="24" height="24" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_49)"><path d="M4.13375 14.5H1.23125V5.15312H4.13375V14.5ZM2.68094 3.87812C1.75281 3.87812 1 3.10937 1 2.18124C1 1.73543 1.1771 1.30788 1.49234 0.99264C1.80757 0.677403 2.23513 0.500305 2.68094 0.500305C3.12675 0.500305 3.5543 0.677403 3.86954 0.99264C4.18478 1.30788 4.36188 1.73543 4.36188 2.18124C4.36188 3.10937 3.60875 3.87812 2.68094 3.87812ZM14.9969 14.5H12.1006V9.94999C12.1006 8.86562 12.0787 7.47499 10.5916 7.47499C9.0825 7.47499 8.85125 8.65312 8.85125 9.87187V14.5H5.95188V5.15312H8.73562V6.42812H8.77625C9.16375 5.69374 10.1103 4.91874 11.5225 4.91874C14.46 4.91874 15 6.85312 15 9.36562V14.5H14.9969Z" fill="currentColor"/></g><defs><clipPath id="clip0_4_49"><rect width="16" height="16" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg></Link>
                    <Link to="https://discord.gg/zSbSPpunyJ"><svg width="24" height="24" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.32 1.94626C12.0463 0.921259 10.0313 0.747509 9.94501 0.741259C9.81126 0.730009 9.68376 0.805009 9.62876 0.928759C9.62376 0.936259 9.58001 1.03751 9.53126 1.19501C10.3738 1.33751 11.4088 1.62376 12.345 2.20501C12.495 2.29751 12.5413 2.49501 12.4488 2.64501C12.3875 2.74376 12.2838 2.79751 12.1763 2.79751C12.1188 2.79751 12.06 2.78126 12.0075 2.74876C10.3975 1.75001 8.38751 1.70001 8.00001 1.70001C7.61251 1.70001 5.60126 1.75001 3.99251 2.74876C3.84251 2.84251 3.64501 2.79626 3.55251 2.64626C3.45876 2.49501 3.50501 2.29876 3.65501 2.20501C4.59126 1.62501 5.62626 1.33751 6.46876 1.19626C6.42001 1.03751 6.37626 0.937509 6.37251 0.928759C6.31626 0.805009 6.19001 0.727509 6.05501 0.741259C5.96876 0.747509 3.95376 0.921259 2.66251 1.96001C1.98876 2.58376 0.640015 6.22876 0.640015 9.38001C0.640015 9.43626 0.655015 9.49001 0.682515 9.53876C1.61251 11.1738 4.15126 11.6013 4.73001 11.62C4.73251 11.62 4.73626 11.62 4.74001 11.62C4.84251 11.62 4.93876 11.5713 4.99876 11.4888L5.58376 10.6838C4.00501 10.2763 3.19876 9.58376 3.15251 9.54251C3.02001 9.42626 3.00751 9.22376 3.12501 9.09126C3.24126 8.95876 3.44376 8.94626 3.57626 9.06251C3.59501 9.08001 5.08001 10.34 8.00001 10.34C10.925 10.34 12.41 9.07501 12.425 9.06251C12.5575 8.94751 12.7588 8.95876 12.8763 9.09251C12.9925 9.22501 12.98 9.42626 12.8475 9.54251C12.8013 9.58376 11.995 10.2763 10.4163 10.6838L11.0013 11.4888C11.0613 11.5713 11.1575 11.62 11.26 11.62C11.2638 11.62 11.2675 11.62 11.27 11.62C11.8488 11.6013 14.3875 11.1738 15.3175 9.53876C15.345 9.49001 15.36 9.43626 15.36 9.38001C15.36 6.22876 14.0113 2.58376 13.32 1.94626ZM5.92001 8.10001C5.30126 8.10001 4.80001 7.52751 4.80001 6.82001C4.80001 6.11251 5.30126 5.54001 5.92001 5.54001C6.53876 5.54001 7.04001 6.11251 7.04001 6.82001C7.04001 7.52751 6.53876 8.10001 5.92001 8.10001ZM10.08 8.10001C9.46126 8.10001 8.96001 7.52751 8.96001 6.82001C8.96001 6.11251 9.46126 5.54001 10.08 5.54001C10.6988 5.54001 11.2 6.11251 11.2 6.82001C11.2 7.52751 10.6988 8.10001 10.08 8.10001Z" fill="currentColor"/></svg></Link>
                    <Link to="mailto:felipecerboncinix@gmail.com"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="24" width="21" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></Link>
                    <div className="w-full border-black/[.08] dark:border-white/[.08] border-b-2 "></div>
                </div>

                <form className="flex flex-col justify-center gap-7" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2 focus-within:outline-[#6A1FC0] bg-black/[.04] dark:bg-white/[.04]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input
                            required="true"
                            type="text"
                            className="grow"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder={t("contact.input.name.placeholder")} />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 focus-within:outline-[#6A1FC0] bg-black/[.04] dark:bg-white/[.04] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-3 w-4"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                        <input
                            required="true"
                            type="email"
                            className="grow"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder={t("contact.input.email.placeholder")} />
                    </label>

                    <textarea
                        required="true"
                        className="textarea textarea-bordered min-h-40 focus-within:outline-[#6A1FC0] bg-black/[.04] dark:bg-white/[.04]"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder={t("contact.input.message.placeholder")}>
                    </textarea>

                    <button type="submit" className="bg-[#6A1FC0] rounded-lg py-2 cursor-pointer text-white hover:brightness-90 active:scale-[.97] transition">{t("contact.form.submit.button")}</button>
                </form>
            </div>
        </section>
    )
}