import { Link } from 'react-router';
import PropTypes from 'prop-types';
import styles from './logo.module.css';

const Logo = ({className}) => {
  return (
    <Link to="/" className={`${styles.logoWrapper} ${className}`}>
      <span className={styles.logoText}>AQUATRACK</span>
    </Link>

  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;