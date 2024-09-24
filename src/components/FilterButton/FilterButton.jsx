export default function FilterButton({ label, isActive, onClick }) {
    return (
        <button onClick={onClick} className="border-white/[.16] border px-5 py-2 rounded-lg bg-none dark:text-white" style={isActive ? {color: "#6A1FC0", borderColor: "#6A1FC0"} : {}}>
            {label}
        </button>
    );
}
