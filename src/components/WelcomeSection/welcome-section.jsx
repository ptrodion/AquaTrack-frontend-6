import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher.jsx';
import Logo from '../../components/Logo/logo.jsx';
import styles from '../../components/WelcomeSection/welcom-section.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import Section from 'components/Section/Section.jsx';

const WelcomeSection = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <section className={styles.WelcomeSection}>
        <div className={styles.container}>
          <Logo className={styles.logo} />
          <LanguageSwitcher className={styles.lang} />

          <div className={styles.content}>
            <div className={styles.textWrapper}>
              <p className={styles.subtitle}>{t('homepage.welcome.text')}</p>

              <h1 className={styles.title}>{t('homepage.welcome.title')}</h1>
            </div>
            <div className={styles.links}>
              <a className={styles.button}>
                <Link to="/signup" className={styles.tryTracker}>
                  {t('homepage.welcome.tryBtn')}
                </Link>
              </a>
              <a className={styles.button}>
                <Link to="/signin" className={styles.signIn}>
                  {t('homepage.welcome.signInBtn')}
                </Link>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default WelcomeSection;
