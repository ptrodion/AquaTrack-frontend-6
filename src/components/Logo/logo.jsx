
import PropTypes from 'prop-types';
import styles from './logo.module.css';

const Logo = ({className}) => {
  return (
    <div className={`${styles.logoWrapper} ${className}`}>
      <h2 className={styles.logoText}>AQUATRACK</h2>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;