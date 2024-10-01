import PropTypes from "prop-types";

export default function SkillCard({ skillName, svg }) {
    return (
        <div className="group p-10 bg-black/[.04] dark:bg-white/[.04] rounded-lg relative transform transition-transform hover:scale-125 shadow-lg">
            <div className="group-hover:translate-y-[-10px] transition-transform duration-150" aria-hidden="true">
                <div className="w-[5.625rem] h-[5.625rem]">
                    {svg}
                </div>
            </div>
            <span className="opacity-0 group-hover:opacity-100 absolute bottom-2 left-1/2 transform -translate-x-1/2 duration-150">{skillName}</span>
        </div>
    );
}

SkillCard.propTypes = {
    skillName: PropTypes.string.isRequired,
    svg: PropTypes.element.isRequired
}