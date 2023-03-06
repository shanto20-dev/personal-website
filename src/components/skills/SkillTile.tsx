import styles from "./skills.module.css";
import Image from "next/image";

const SkillTile = ({ skillName, imageSource, nightMode }) => {
  return (
    <div
      className={
        nightMode ? styles.skillTileDivNight : styles.skillTileDivLight
      }>
      <Image src={imageSource} width={50} height={50} />
      <p className={styles.skillName}>{skillName}</p>
    </div>
  );
};

export default SkillTile;
