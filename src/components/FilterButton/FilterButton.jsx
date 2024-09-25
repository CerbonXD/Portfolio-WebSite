export default function FilterButton({ label, isActive, onClick }) {
    const buttonHoverCss = isActive ? " hover:bg-[#6A1FC0]/[.14]" : " hover:bg-white/[.08]"

    const buttonCss = "border-white/[.16] border px-5 py-2 rounded-lg bg-none dark:text-white transition" + buttonHoverCss
    const buttonActiveCss = "border-[#6A1FC0] border px-5 py-2 rounded-lg bg-none dark:text-[#6A1FC0] transition" + buttonHoverCss

    return (
        <button onClick={onClick} className={isActive ? buttonActiveCss : buttonCss}>
            {label}
        </button>
    );
}
