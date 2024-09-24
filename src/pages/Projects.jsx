import Project from "../components/Project/Project.jsx";
import {useEffect, useState} from "react";

export default function Projects() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-wrap gap-7 mt-10 max-w-[67.75rem] mx-auto">
            {data.map((item) => (
                <Project title={item.title} description={item.description} link={item.link} img={item.image} badges={item.badges}></Project>
            ))}
        </div>
    )
}