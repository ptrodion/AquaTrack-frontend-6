// import styles from './Container.module.css';

const Container = ({ children }) => (
  <div className={'container'}>
    <div className={'pageContentWrapper'}>{children}</div>
  </div>
);

export default Container;
