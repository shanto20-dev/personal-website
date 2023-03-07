import styles from "./skills.module.css";
import Image from "next/image";

interface SkillTileProps {
  skillName: string;
  imageSource: string;
  nightMode: boolean;
}

const SkillTile = ({ skillName, imageSource, nightMode }) => {
  return (
    <div
      className={
        nightMode ? styles.skillTileDivNight : styles.skillTileDivLight
      }>
      <Image src={imageSource} width={50} height={50} alt={skillName} />
      <p className={styles.skillName}>{skillName}</p>
    </div>
  );
};

export default SkillTile;
