import PropTypes from "prop-types";

export default function FilterButton({ label, isActive, onClick }) {
    const buttonHoverCss = isActive ? " hover:bg-[#6A1FC0]/[.14]" : " hover:bg-black/[.08] dark:hover:bg-white/[.08]"

    const buttonCss = "border-black/[.16] dark:border-white/[.16] border px-5 py-2 rounded-lg bg-none transition" + buttonHoverCss
    const buttonActiveCss = "border-[#6A1FC0] border px-5 py-2 rounded-lg bg-none text-[#6A1FC0] transition" + buttonHoverCss

    return (
        <button onClick={onClick} className={isActive ? buttonActiveCss : buttonCss}>
            {label}
        </button>
    );
}

FilterButton.propTypes = {
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
}
