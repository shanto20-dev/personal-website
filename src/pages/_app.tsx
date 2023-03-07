import "../styles/globals.css";
import { useState } from "react";
import { Howl, Howler } from "howler";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/Navbar";
import Welcome from "../components/welcome/Welcome";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import ContactMe from "../components/contactme/ContactMe";
import classNames from "classnames";

export default function App({ Component, pageProps }: AppProps) {
  const lightSwitchSound = new Howl({ src: ["/audio/lightswitch.mp3"] });
  const [nightMode, setNightMode] = useState(true);

  const handleNightSwitch = () => {
    lightSwitchSound.play();
    setNightMode(!nightMode);
  };

  const nightLightMode = classNames({
    nightMode: nightMode,
    lightMode: !nightMode,
  });

  return (
    <>
      <Navbar nightMode={nightMode} handleNightSwitch={handleNightSwitch} />
      <div className={nightLightMode}>
        <Welcome nightMode={nightMode} />
        <Projects />
        <Skills nightMode={nightMode} />
        <ContactMe nightMode={nightMode} />
      </div>
    </>
  );
}
