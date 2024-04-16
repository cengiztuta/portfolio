import ProjectCard from "@/components/ProjectCard";
import styles from "../styles/Projects.module.css";
import ProjectsSection from "@/helpers";
import { getID } from "@/helpers";
import Button from "@/components/Button";
const Projects = () => {
  const { projects } = ProjectsSection;
  return (
    <div id="Projects" className={styles.container}>
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
      <Button ButtonText={"Show More"} ButtonStyle={"ShowMoreButton"} />
    </div>
  );
};

export default Projects;
