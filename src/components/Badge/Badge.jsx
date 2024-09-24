export default function Badge({ label, color }) {
    return (
        <div>
            <div style={{ backgroundColor: `${color}16`, color: color }} className="inline-block uppercase text-[0.75rem] px-1 rounded-sm">
                {label}
            </div>
        </div>
    );
}

