import styles from "./contactme.module.css";
import Image from "next/image";
import { Howl, Howler } from "howler";
import { useState } from "react";

const ContactMe = ({ nightMode }) => {
  const successSound = new Howl({ src: ["/audio/success.wav"], volume: 0.1 });

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    successSound.play();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className={styles.contactSection} id="contact">
      <div className={styles.contactDiv}>
        <h1
          className={
            nightMode ? styles.messageHeader : styles.messageHeaderLight
          }>{`Send me a message!`}</h1>
        <div className={nightMode ? styles.formDiv : styles.formDivLight}>
          <form className={styles.actualForm} onSubmit={handleSubmit}>
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
      {submitted && (
        <div className={styles.submitNotification}>
          {`Message submitted! I'll get back to you as soon as possible.`}
        </div>
      )}
    </div>
  );
};

export default ContactMe;
