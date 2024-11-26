import { t } from 'i18next';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher.jsx';
import Logo from '../../components/Logo/logo.jsx';
import styles from '../../components/WelcomeSection/welcom-section.module.css';

const WelcomeSection = () => {
  return (
    <section className={styles.WelcomeSection}>
      <div className={styles.container}>
        <div className={styles.logoLanguageWrapper}>
          <Logo className={styles.logo} />
          <LanguageSwitcher />
        </div>
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <h3 className={styles.subtitle}>{t('homepage.welcome.text')}</h3>

            <h1 className={styles.title}>{t('homepage.welcome.title')}</h1>
          </div>
          <div className={styles.links}>
            <button className={styles.button}>
              <a href="#" className={styles.tryTracker}>
                {t('homepage.welcome.tryBtn')}
              </a>
            </button>
            <button className={styles.button}>
              <a href="#" className={styles.signIn}>
                {t('homepage.welcome.signInBtn')}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
