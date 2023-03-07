import styles from "./skills.module.css";
import Image from "next/image";
import SkillTile from "./SkillTile";

const skillsArray = [
  { name: "React", imageSource: "/personal-website/images/skills/react.png" },
  {
    name: "Next.js",
    imageSource: "/personal-website/images/skills/nextjs.png",
  },
  { name: "Redux", imageSource: "/personal-website/images/skills/redux.png" },
  {
    name: "JavaScript",
    imageSource: "/personal-website/images/skills/javascript.png",
  },
  { name: "Ruby", imageSource: "/personal-website/images/skills/ruby.png" },
  { name: "Rails", imageSource: "/personal-website/images/skills/rails.png" },
  {
    name: "Express.js",
    imageSource: "/personal-website/images/skills/express.png",
  },
  {
    name: "Node.js",
    imageSource: "/personal-website/images/skills/nodejs.png",
  },
  {
    name: "GraphQL",
    imageSource: "/personal-website/images/skills/graphql.png",
  },
  {
    name: "Postgres",
    imageSource: "/personal-website/images/skills/postgresql.png",
  },
  { name: "MySQL", imageSource: "/personal-website/images/skills/mysql.png" },
  {
    name: "MongoDB",
    imageSource: "/personal-website/images/skills/mongodb.png",
  },
  { name: "HTML5", imageSource: "/personal-website/images/skills/html-5.png" },
  { name: "CSS3", imageSource: "/personal-website/images/skills/css3.png" },
  { name: "jQuery", imageSource: "/personal-website/images/skills/jquery.png" },
  { name: "Heroku", imageSource: "/personal-website/images/skills/heroku.png" },
  {
    name: "Webpack",
    imageSource: "/personal-website/images/skills/webpack.png",
  },
  { name: "Git", imageSource: "/personal-website/images/skills/git.png" },
  {
    name: "Salesforce",
    imageSource: "/personal-website/images/skills/salesforce.png",
  },
  {
    name: "Apex",
    imageSource: "/personal-website/images/skills/salesforce.svg",
  },
  {
    name: "LWC",
    imageSource: "/personal-website/images/skills/salesforce.svg",
  },
];

const Skills = ({ nightMode }: { nightMode: boolean }) => {
  return (
    <div className={styles.skillsSection} id="skills">
      <div>
        <h1 className={styles.skillsHeader}>Technologies</h1>
      </div>
      <div className={styles.skillsList}>
        {skillsArray.map((skill, index) => {
          if (!skill) {
            return null;
          }
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
