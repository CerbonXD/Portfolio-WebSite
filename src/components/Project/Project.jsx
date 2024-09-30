import Badge from "../Badge/Badge.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Project({ title, description, link, badges, img }) {
    const alt = `${title} project logo`;

    return (
        <div className="w-[15.625rem] bg-white/[.04] rounded-lg shadow-lg">
            <img className="w-full h-[9.375rem] object-cover rounded-t-lg" src={img} alt={alt} />
            <div className="flex flex-col justify-between h-[12.5rem] p-3">
                <div>
                    <h2>{title}</h2>
                    <p className="text-[#718096] text-[0.813rem] h-[3.75rem] mt-1 line-clamp-3 overflow-hidden overflow-ellipsis">
                        {description}
                    </p>
                </div>

                <div>
                    <Link className="py-2 px-4 bg-white/[.04] rounded-lg dark:text-[#6A1FC0] hover:brightness-90 transition" to={link}>
                        Link
                    </Link>
                </div>

                <div className="flex gap-[0.625rem] mt-2">
                    {badges.map((badge, index) => (
                        <Badge key={`${badge.label}-${index}`} label={badge.label} color={badge.color} />
                    ))}
                </div>
            </div>
        </div>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    badges: PropTypes.array.isRequired,
    img: PropTypes.string.isRequired
}
