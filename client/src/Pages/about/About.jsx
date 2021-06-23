import styles from "./About.module.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <p>PI FOODS</p>
        <p>
          Application made in the labs of "SoyHenry" by the student Facundo
          Maksud.
        </p>
      </div>
    </div>
  );
}
