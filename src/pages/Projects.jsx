import Project from "../components/Project/Project.jsx";
import {useEffect, useState} from "react";
import FilterButton from "../components/FilterButton/FilterButton.jsx";

export default function Projects() {
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState('All'); // Manage the selected filter

    // Filters
    const all = "All"
    const sites = "Sites"
    const minecraftMods = "Minecraft Mods"

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }
    const filteredProjects = data.filter(project => {
        if (filter === all) return true
        else if (filter === sites) return project.badges.some(badge => badge.label.toUpperCase() === 'REACT')
        else if (filter === minecraftMods) return project.badges.some(badge => badge.label.toUpperCase() === 'MOD')
        return false;
    });

    return (
        <div className="mb-[4.375rem]">
            <div className="flex justify-center gap-2.5 my-[4.375rem]">
                <FilterButton label={all} isActive={filter === all} onClick={() => setFilter(all)} />
                <FilterButton label={sites} isActive={filter === sites} onClick={() => setFilter(sites)} />
                <FilterButton label={minecraftMods} isActive={filter === minecraftMods} onClick={() => setFilter(minecraftMods)} />
            </div>
            <div className="flex flex-wrap gap-7 mt-10 max-w-[67.75rem] mx-auto">
                {filteredProjects.map((project) => (
                    <Project
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        img={project.image}
                        badges={project.badges} />
                ))}
            </div>
        </div>
    );
}
