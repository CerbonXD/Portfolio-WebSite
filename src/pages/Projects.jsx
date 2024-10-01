import Project from "../components/Project/Project.jsx";
import { useEffect, useState, useMemo } from "react";
import FilterButton from "../components/FilterButton/FilterButton.jsx";
import { motion } from 'framer-motion';
import {useTranslation} from "react-i18next";

export default function Projects() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('All');
    const [visibleProjects, setVisibleProjects] = useState(8);
    const [completedAnimations, setCompletedAnimations] = useState(0); // Track animation completion
    const [t] = useTranslation();

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Memoize filtered projects to avoid unnecessary recalculations
    const filters = [t("projects.filter.all"), t("projects.filter.sites"), t("projects.filter.mods")];
    const filteredProjects = useMemo(() => {
        return data.filter(project => {
            switch (filter) {
                case t("projects.filter.all"): return true;
                case t("projects.filter.sites"): return project.badges?.some(badge => badge?.label?.toUpperCase() === 'REACT');
                case t("projects.filter.mods"): return project.badges?.some(badge => badge?.label?.toUpperCase() === 'MOD');
                default: return false;
            }
        });
    }, [data, filter]);

    const handleShowMore = () => {
        setVisibleProjects(prevAmount => Math.min(prevAmount + 8, filteredProjects.length));
    };

    return (
        <section className="mb-[4.375rem] min-h-[80vh]">
            {/* Filter buttons */}
            <div className="flex justify-center gap-2.5 my-[4.375rem]">
                {filters.map((f) => (
                    <FilterButton
                        key={f}
                        label={f}
                        isActive={filter === f}
                        aria-pressed={filter === f}
                        onClick={() => {
                            if (filter !== f) {
                                setFilter(f);
                                setVisibleProjects(8); // Reset visible projects on filter change
                                setCompletedAnimations(0); // Reset animation counter on filter change
                            }
                        }}
                    />
                ))}
            </div>

            {/* Display projects */}
            <div className="flex flex-wrap gap-7 mt-10 max-w-[67.75rem] mx-auto">
                {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                    <motion.div
                        key={`${project.title}-${filter}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: (index % 8) * 0.15 }}
                        onAnimationComplete={() => {
                            setCompletedAnimations(prev => prev + 1);
                        }}>
                        <Project
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            img={project.image}
                            badges={project.badges}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Show more button */}
            {visibleProjects < filteredProjects.length && completedAnimations === visibleProjects && (
                <motion.div
                    key=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}>
                    <div className="flex justify-center mt-[4.375rem]">
                        <button
                            className="px-5 py-2 rounded-lg bg-white/[.04] hover:brightness-90"
                            onClick={handleShowMore}>
                            Show More
                        </button>
                    </div>
                </motion.div>
            )}
        </section>
    );
}
