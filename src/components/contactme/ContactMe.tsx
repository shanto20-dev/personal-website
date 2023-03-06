import styles from "./contactme.module.css";
import Image from "next/image";

const ContactMe = ({ nightMode }) => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contactDiv}>
        <h1
          className={
            nightMode ? styles.messageHeader : styles.messageHeaderLight
          }>{`Send me a message!`}</h1>
        <div className={nightMode ? styles.formDiv : styles.formDivLight}>
          <form className={styles.actualForm}>
            <label for="name" className={styles.label}>
              Name
            </label>
            <input
              className={nightMode ? styles.input : styles.inputLight}
              name="name"
              required
            />
            <label for="email" className={styles.label}>
              {`Email`}
            </label>
            <input
              className={nightMode ? styles.input : styles.inputLight}
              name="email"
              required
            />
            <label for="message" className={styles.label}>
              {`Message`}
            </label>
            <textarea
              className={nightMode ? styles.input : styles.inputLight}
              name="message"
              required
            />
            <button
              className={
                nightMode ? styles.submitButton : styles.submitButtonLight
              }>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
