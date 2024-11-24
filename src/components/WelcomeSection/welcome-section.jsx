import Logo from "../../components/Logo/logo.jsx";
import styles from "../../components/WelcomeSection/welcom-section.module.css";

const WelcomeSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Logo />
      </div>
    </section>
  );
};

export default WelcomeSection;
