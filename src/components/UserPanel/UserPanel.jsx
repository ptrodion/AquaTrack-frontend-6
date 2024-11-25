import css from  './UserPanel.module.css';

const UserPanel = () => {
  return (
      <div className={css.welcome}>Hello<span className={css.userName}>, Nadia</span></div>
  )
}

export default UserPanel
