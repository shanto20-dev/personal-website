import styles from "./skills.module.css";
import Image from "next/image";
import SkillTile from "./SkillTile";

const skillsArray = [
  { name: "React", imageSource: "/images/skills/react.png" },
  { name: "Next.js", imageSource: "/images/skills/nextjs.png" },
  { name: "Redux", imageSource: "/images/skills/redux.png" },
  { name: "JavaScript", imageSource: "/images/skills/javascript.png" },
  { name: "Ruby", imageSource: "/images/skills/ruby.png" },
  { name: "Rails", imageSource: "/images/skills/rails.png" },
  { name: "Express.js", imageSource: "/images/skills/express.png" },
  { name: "Node.js", imageSource: "/images/skills/nodejs.png" },
  { name: "GraphQL", imageSource: "/images/skills/graphql.png" },
  { name: "Postgres", imageSource: "/images/skills/postgresql.png" },
  { name: "MySQL", imageSource: "/images/skills/mysql.png" },
  { name: "MongoDB", imageSource: "/images/skills/mongodb.png" },
  { name: "HTML5", imageSource: "/images/skills/html-5.png" },
  { name: "CSS3", imageSource: "/images/skills/css3.png" },
  { name: "jQuery", imageSource: "/images/skills/jquery.png" },
  { name: "Heroku", imageSource: "/images/skills/heroku.png" },
  { name: "Webpack", imageSource: "/images/skills/webpack.png" },
  { name: "Git", imageSource: "/images/skills/git.png" },
  { name: "Salesforce", imageSource: "/images/skills/react.png" },
  { name: "Apex", imageSource: "/images/skills/salesforce.svg" },
  { name: "LWC", imageSource: "/images/skills/salesforce.svg" },
  ,
];

const Skills = ({ nightMode }) => {
  return (
    <div className={styles.skillsSection} id="skills">
      <div>
        <h1 className={styles.skillsHeader}>Technologies</h1>
      </div>
      <div className={styles.skillsList}>
        {skillsArray.map((skill, index) => {
          return (
            <SkillTile
              skillName={skill.name}
              imageSource={skill.imageSource}
              nightMode={nightMode}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
