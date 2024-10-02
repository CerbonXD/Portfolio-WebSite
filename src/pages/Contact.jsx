export default function Contact() {
    return (
        <section className="flex justify-center gap-4 px-20 h-screen max-w-[120rem] mx-auto">
            <div className="flex flex-col justify-center gap-3 max-w-96 w-full">
                
                <label className="input input-bordered flex items-center gap-2 bg-black/[.04] dark:bg-white/[.04] ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" className="grow" placeholder="Name"/>
                </label>
                
                <label className="input input-bordered flex items-center gap-2 bg-black/[.04] dark:bg-white/[.04] ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-3 w-3"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                    <input type="text" className="grow" placeholder="Email"/>
                </label>

                <textarea className="textarea textarea-bordered min-h-40 bg-black/[.04] dark:bg-white/[.04] " placeholder="Message"></textarea>
                
                <input type="submit" value="submit" className="bg-[#6A1FC0] rounded-lg py-2 cursor-pointer text-white hover:brightness-90 active:scale-[.97] transition"/>
            </div>
        </section>
    )
}