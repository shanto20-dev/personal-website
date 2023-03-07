import styles from "./welcome.module.css";
import Image from "next/image";
import classNames from "classnames";

const Welcome = ({ nightMode }: { nightMode: boolean }) => {
  return (
    <div className={styles.welcomeSection} id="about">
      <div className={styles.welcomeDiv}>
        <div className={styles.helloBlock}>
          <div className={styles.avatarBlock}>
            <Image
              className={styles.avatar}
              src="/images/avatar.png"
              width={200}
              height={200}
              alt="sayeef-headshot"
            />
          </div>
          <div className={styles.helloTextBlock}>
            <h1 className={styles.hello}>Hello! 👋🏽</h1>
            <span className={styles.helloUnderline}></span>
            <p className={styles.helloSubHeader}>
              {`My name is Sayeef, and I'm a software engineer!`}
            </p>
            <p className={styles.helloBody}>
              {`I'm a Software engineer based in New York. I love learning and solving problems. I like to write code that looks just as good in Visual Studio Code as it does on the browser.`}
            </p>
            <p className={styles.helloFunStuff}>
              {`Some fun stuff: 
            I love to sing, dance, meditate, and game. I was on a reality TV show, and I was flown out to America's Got Talent to sing in front of Simon Cowell and the bunch (they said yes!).`}
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          nightMode ? styles.highlightsNightMode : styles.highlightsLightMode
        }>
        <h1 className={styles.highlightsHeader}>Highlights</h1>
        <p
          className={
            styles.highlightsContent
          }>{`• Software Engineer at PSQuote `}</p>
        <p className={styles.highlightsContent}>{`• Advisory at KPMG `}</p>
        <p
          className={
            styles.highlightsContent
          }>{`• Graduated from the University of Maryland`}</p>
        <p
          className={
            styles.highlightsContent
          }>{`• Built this website with React`}</p>
      </div>
      <a href="/Sayeef Alam Tech Frontend Resume.pdf" download>
        <button
          className={
            nightMode ? styles.resumeButton : styles.resumeButtonLight
          }>
          <Image
            className={styles.resumeIcon}
            src="/images/files-logo.svg"
            width={20}
            height={20}
            alt="Resume logo"
          />
          Download my Resume
        </button>
      </a>
    </div>
  );
};

export default Welcome;
