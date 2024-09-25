import Badge from "../Badge/Badge.jsx";
import {Link} from "react-router-dom";

export default function Project({ title, description, link, badges, img }) {
    const alt = "Project logo";

    return (
        <div className="w-[15.625rem] bg-white/[.04] rounded-lg shadow-lg">
            <img className="w-full h-[9.375rem] object-cover rounded-t-lg" src={img} alt={alt}/>
            <div className="flex flex-col justify-between h-[12.5rem] p-3 text-white">
                <div>
                    <h2>{title}</h2>
                    <p className="text-[#718096] text-[0.813rem] h-[3.75rem] mt-1 line-clamp-3 overflow-hidden overflow-ellipsis">{description}</p>
                </div>
                <div>
                    <button className="hover:brightness-90">
                        <Link className="py-2 px-4 bg-white/[.04] rounded-lg dark:text-[#6A1FC0]" to={link}>Link</Link>
                    </button>
                </div>
                <div className="flex gap-[0.625rem]">
                    {badges.map((badge) => (
                        <Badge key={badge.label} label={badge.label} color={badge.color}></Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
