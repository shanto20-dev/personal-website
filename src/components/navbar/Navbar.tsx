import styles from "./navbar.module.css";
import Image from "next/image";
interface NavbarProps {
  nightMode: boolean;
  handleNightSwitch: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ nightMode, handleNightSwitch }) => {
  const scrollSkills = () => {
    window.location.replace("/#skills");
  };

  const scrollContact = () => {
    window.location.replace("/#contact");
  };

  const scrollAbout = () => {
    window.location.replace("/#about");
  };

  const scrollProjects = () => {
    window.location.replace("/#projects");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.full}>
        <div className={styles.leftButtons}>
          <h2 className={styles.initialsButton} onClick={scrollAbout}>
            SA.
          </h2>
          <button onClick={scrollProjects}>Projects</button>
          <button onClick={scrollSkills}>Skills</button>
          <button onClick={scrollContact}>Contact Me</button>
        </div>
        <div className={styles.rightButtons}>
          <button className={styles.colorpicker}>
            <Image
              src="/personal-website/images/Mediamodifier-Design.svg"
              width={15}
              height={15}
              alt="Color picker"
            />
          </button>
          <button className={styles.moonSun} onClick={handleNightSwitch}>
            {nightMode === true ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
