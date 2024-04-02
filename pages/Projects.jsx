import styles from "../styles/Projects.module.css";
const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      <div className={styles.content}>
        <div className={styles.project}> </div>
        <div className={styles.project}> </div>
        <div className={styles.project}> </div>
        <div className={styles.project}> </div>
        <div className={styles.project}> </div>
        <div className={styles.project}> </div>
      </div>
      <button>Show More</button>
    </div>
  );
};

export default Projects;