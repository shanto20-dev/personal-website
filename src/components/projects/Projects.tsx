import styles from "./projects.module.css";
import Image from "next/image";

const Projects = () => {
  return (
    <div className={styles.projectSection} id="projects">
      <h1 className={styles.projectTitle}>My Work</h1>
      <iframe
        width="800"
        height="1080"
        src="https://www.youtube.com/embed/j136G2lfjMM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
    </div>
  );
};

export default Projects;
