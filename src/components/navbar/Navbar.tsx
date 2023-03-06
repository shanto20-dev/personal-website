import styles from "./navbar.module.css";
import Image from "next/image";
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({ nightMode, handleNightSwitch }) => {
  return (
    <div>
      <div className={styles.full}>
        <div className={styles.leftButtons}>
          <h2 className={styles.initialsButton}>SA.</h2>
          <button>Projects</button>
          <button>Skills</button>
          <button>Contact Me</button>
        </div>
        <div className={styles.rightButtons}>
          <button className={styles.colorpicker}>
            <Image
              src="/images/Mediamodifier-Design.svg"
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
