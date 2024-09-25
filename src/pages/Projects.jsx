import Project from "../components/Project/Project.jsx";
import { useEffect, useState } from "react";
import FilterButton from "../components/FilterButton/FilterButton.jsx";

export default function Projects() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('All');
    const [visibleProjects, setVisibleProjects] = useState(8);

    const filters = ["All", "Sites", "Minecraft Mods"];

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredProjects = data.filter(project => {
        switch (filter) {
            case "All": return true;
            case "Sites": return project.badges.some(badge => badge.label.toUpperCase() === 'REACT');
            case "Minecraft Mods": return project.badges.some(badge => badge.label.toUpperCase() === 'MOD');
            default: return false;
        }
    });

    const handleShowMore = () => {
        setVisibleProjects(prevAmount => prevAmount + 8);
    };

    return (
        <div className="mb-[4.375rem]">
            <div className="flex justify-center gap-2.5 my-[4.375rem]">
                {filters.map((f) => (
                    <FilterButton key={f} label={f} isActive={filter === f} onClick={() => {setFilter(f); setVisibleProjects(8)}} />
                ))}
            </div>
            <div className="flex flex-wrap gap-7 mt-10 max-w-[67.75rem] mx-auto">
                {filteredProjects.slice(0, visibleProjects).map((project) => (
                    <Project
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        img={project.image}
                        badges={project.badges} />
                ))}
            </div>
            {visibleProjects < filteredProjects.length && (
                <div className="flex justify-center mt-[4.375rem]">
                    <button className="px-5 py-2 rounded-lg bg-white/[.04] dark:text-white hover:brightness-90" onClick={handleShowMore}>
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
}
