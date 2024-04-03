import ProjectCard from "@/components/ProjectCard";
import styles from "../styles/Projects.module.css";
import ProjectsSection from "@/helpers";
import { getID } from "@/helpers";
const Projects = () => {
  const { projects } = ProjectsSection;
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      <div className={styles.content}>
        {projects.map((item) => (
          <ProjectCard
            key={getID()}
            name={item.name}
            repo={item.repo}
            img={item.img}
            year={item.year}
            tags={item.tags}
          />
        ))}
      </div>
      <button>Show More</button>
    </div>
  );
};

export default Projects;
